import { assign } from 'lodash';
import { AsyncStorage } from 'react-native';
import { toIdValue, getMainDefinition } from 'apollo-utilities';
import { ApolloClient } from 'apollo-client';
import { from, split, ApolloLink } from 'apollo-link';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { CachePersistor } from 'apollo-cache-persist';
import { setContext } from 'apollo-link-context';
import { createUploadLink } from 'apollo-upload-client';
import { disableFragmentWarnings } from 'graphql-tag';
import EventSource from 'react-native-event-source';

import { AuthLink, ErrorLink, SSELink } from './links';
import resolvers from './resolvers';
import introspectionQueryResultData from './meta/fragmentTypes';

disableFragmentWarnings();

export async function createClient({
  terminatingLink,
  persistorStorage = AsyncStorage,
  restoreCache = true,
}) {
  const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData,
  });

  const cache = new InMemoryCache({
    fragmentMatcher,
    dataIdFromObject: object => object.id || null,
    cacheRedirects: {
      Query: {
        node(root, { id }) {
          return toIdValue(id);
        }
      }
    },
  });

  const cachePersistor = new CachePersistor({
    cache,
    storage: persistorStorage,
    trigger: 'background',
    debug: true,
  });

  const withContext = setContext(() => ({
    cachePersistor,
  }));

  const stateLink = withClientState({
    resolvers: resolvers.resolvers,
    defaults: resolvers.defaults,

    /**
     * TODO: Uncomment when it will support gql AST or typeDefs will be required by Apollo Client
     */
    //typeDefs: resolvers.typeDefs,
    cache,
  });

  /**
   * Reload resolvers if module.hot is available
   */
  if (module.hot) {
    module.hot.accept(() => {
      const newResolvers = require('./resolvers').default;

      assign(resolvers.resolvers, newResolvers.resolvers);
    });
  }

  if (restoreCache) {
    await cachePersistor.restore();
  }

  const authLink = new AuthLink();
  const errorLink = new ErrorLink();

  const client = new ApolloClient({
    link: from([
      errorLink,
      withContext.concat(
        stateLink,
      ),
      authLink,
      terminatingLink,
    ]),
    cache,
  });

  client.onResetStore(stateLink.writeDefaults);

  return client;
}

export default async () => {
  const queryUri = 'http://172.27.0.74/ow/oxwall/everywhere/api/graphql?XDEBUG_SESSION_START=PHPSTORM';
  const subscriptionUri = 'http://172.27.0.74/ow/oxwall/everywhere/api/subscriptions?XDEBUG_SESSION_START=PHPSTORM';

  const httpLink = createUploadLink({
    uri: queryUri,
    fetch: (uri, allOptions, ...restArgs) => {
      const {
        uploadProgress,
        ...options
      } = allOptions;
      const promise = fetch(uri, options, ...restArgs);

      if (uploadProgress) {
        promise.uploadProgress(options.uploadProgress);
      }

      return promise;
    }
  });

  const sseLink = new SSELink({
    uri: subscriptionUri,
    streamId: 'app',
    EventSourceImpl: EventSource,
  });

  const terminatingLink = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    sseLink,
    httpLink,
  );

  return createClient({
    terminatingLink,
  });
};
