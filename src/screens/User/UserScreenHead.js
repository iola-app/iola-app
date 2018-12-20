import React, { PureComponent } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { UserHeading } from 'components';
import * as routes from '../roteNames';

const userQuery = gql`
  query UserDetailsQuery($userId: ID!) {
    user: node(id: $userId) {
      id
      ...UserHeading_user
    }
  }

  ${UserHeading.fragments.user}
`;

export default class UserScreenHead extends PureComponent {
  static HEIGHT = UserHeading.HEIGHT;

  render() {
    const { navigation: { goBack, navigate, state: { params } }, ...props } = this.props;

    return (
      <Query query={userQuery} variables={{ userId: params.id }}>
        {({ data: { user }, loading }) => (
          <UserHeading {...props} highlight loading={loading} user={user} />
        )}
      </Query>
    );
  }
}
