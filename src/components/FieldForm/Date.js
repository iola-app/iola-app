import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { propType as fragmentProp } from 'graphql-anywhere';
import gql from 'graphql-tag';

import InputItem from '../Input';
import Yup from 'yup'

const fieldFragment = gql`
  fragment FieldDate_field on ProfileField {
    id
    label
    configs {
      ...on ProfileFieldDateConfigs {
        minDate
        maxDate
      }
    }
  }
`;

const valueFragment = gql`
  fragment FieldDate_data on ProfileFieldDateValue {
    dateValue: value
  }
`;

export default class FieldDate extends Component {
  static formOptions({ field, data }) {
    return {
      validationSchema: Yup.date(),
      initialValue: data && data.dateValue,
      transformResult: value => ({ dateValue: value }),
    };
  }

  static fragments = {
    field: fieldFragment,
    data: valueFragment,
  };

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
    field: fragmentProp(fieldFragment).isRequired,
    data: fragmentProp(valueFragment),
  };

  render() {
    const { field, value, onChange } = this.props;

    return (
      <InputItem
        type="date"
        value={value}
        placeholder={'Not specified'}
        label={field.label}
        {...field.configs}
        onChange={onChange}
      />
    );
  }
}