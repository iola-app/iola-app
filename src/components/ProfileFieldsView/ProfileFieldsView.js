import React, { PureComponent } from 'react';
import { propType as fragmentProp } from 'graphql-anywhere';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

import ProfileFieldList from '../ProfileFieldList';
import ProfileFieldView from '../ProfileFieldView';

const userFragment = gql`
  fragment ProfileFieldsView_user on User {
    id
    profile {
      accountType {
        fields(on: VIEW) {
          id
          ...ProfileFieldView_field
          ...ProfileFieldList_field
        }
      }
      values {
        id
        ...ProfileFieldView_value
        ...ProfileFieldList_value
      }
    }
  }

  ${ProfileFieldView.fragments.field}
  ${ProfileFieldView.fragments.value}
  ${ProfileFieldList.fragments.value}
  ${ProfileFieldList.fragments.field}
`;

export default class ProfileFieldsView extends PureComponent {
  static fragments = {
    user: userFragment,
  }

  static propTypes = {
    user: fragmentProp(userFragment),
    loading: PropTypes.bool,
  };

  static defaultProps = {
    user: null,
    loading: false,
  };

  renderItem = ({ field, ...props }) => (
    <ProfileFieldView {...props} key={field.id} field={field} />
  );

  render() {
    const { style, user, loading } = this.props;
    let fields = [];
    let values = [];

    if (user && !loading) {
      fields = user.profile.accountType.fields;
      values = user.profile.values;
    }

    return (
      <ProfileFieldList
        loading={loading}
        style={style}
        fields={fields}
        values={values}
        renderItem={this.renderItem}
      />
    );
  }
}
