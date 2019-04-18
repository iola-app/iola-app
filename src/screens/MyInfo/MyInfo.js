import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withNavigationFocus } from 'react-navigation';
import { Container } from 'native-base';

import { ProfileFieldsView } from '~components';

const userFieldsQuery = gql`
  query MyInfoQuery {
    me {
      id
      ...ProfileFieldsView_user
    }
  }

  ${ProfileFieldsView.fragments.user}
`;

@graphql(userFieldsQuery)
@withNavigationFocus
export default class UserInfo extends Component {
  static navigationOptions = {
    title: 'Info',
  };

  state = {
    isRefreshing: false,
  };

  /**
   * TODO: Move these common logic to a central place, to prevent copy & past
   */
  refresh = async () => {
    const { data: { refetch } } = this.props;
    
    this.setState({ isRefreshing: true });
    try {
      await refetch({ cursor: null });
    } catch {
      // Pass...
    }
    this.setState({ isRefreshing: false });
  };

  shouldComponentUpdate({ isFocused }) {
    return isFocused;
  }

  render() {
    const { data: { loading, me } } = this.props;
    const { isRefreshing } = this.state;

    return (
      <Container>
        <ProfileFieldsView
          loading={loading}
          user={me}
          refreshing={isRefreshing}

          onRefresh={this.refresh}
        />
      </Container>
    );
  }
}