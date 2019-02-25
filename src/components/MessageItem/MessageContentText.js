import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import PropTypes from 'prop-types';
import { propType as fragmentProp } from 'graphql-anywhere';
import gql from 'graphql-tag';

import { withStyle } from 'theme';

const contentFragment = gql`
  fragment MessageContentText_content on MessageContent {
    text
    image
  }
`;

@withStyle('Sparkle.MessageContentText', {
  paddingHorizontal: 15,
  paddingVertical: 10,
  backgroundColor: '#FFFFFF',

  'NativeBase.Text': {
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    lineHeight: 19,
  },

  '.inverse': {
    backgroundColor: '#5259FF',

    'NativeBase.Text': {
      color: '#FFFFFF',
    },
  },
})
export default class MessageContentText extends Component {
  static fragments = {
    content: contentFragment,
  };

  static propTypes = {
    inverse: PropTypes.bool.isRequired,
    content: fragmentProp(contentFragment).isRequired,
  };

  render() {
    const { content: { text }, style } = this.props;
    const spaceForDateAndMessageStatus = <Text>{'           '}</Text>;

    return (
      <View style={style}>
        <Text>
          {text}
          {spaceForDateAndMessageStatus}
        </Text>
      </View>
    );
  }
}