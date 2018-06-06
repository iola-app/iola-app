import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
} from 'react-native';

import {
  Label,
  Body,
  Right,
  Icon,
  Spinner,
} from 'native-base';

import { withStyle } from 'theme';

@withStyle('Sparkle.Input', {
  'NativeBase.Label': {
    flex: 1,
    color: '#585A61',
    fontWeight: '600',
    paddingRight: 5,
    flexWrap: 'wrap',
  },

  'NativeBase.Body': {
    'NativeBase.Input': {
      padding: 0,
    },

    'NativeBase.Text': {
      fontSize: 14,
    },

    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  'NativeBase.Right': {
    flexGrow: 0,
    flexBasis: 30,

    'NativeBase.Spinner': {
      height: 20,
    }
  },

  '.last': {
    borderBottomWidth: 0,
  },

  minHeight: 50,
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: '#C9C9C9',
})
export default class Input extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    last: PropTypes.bool,
  };

  static defaultProps = {
    isLoading: false,
    last: false,
  };

  render() {
    const {
      label,
      isLoading,
      style,
      children,
    } = this.props;

    return(
      <View style={style}>
        <Label>
          {label}
        </Label>

        <Body>
          {children}
        </Body>
        <Right>
          {
            isLoading && (
              <Spinner size={20} />
            )
          }
        </Right>
      </View>
    );
  }
}
