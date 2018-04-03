import React, { PureComponent } from 'react';
import { propType as fragmentProp } from 'graphql-anywhere';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Icon,
  Button,
  Text,
  H2,
} from 'native-base';

import { withStyleSheet as styleSheet, connectToStyleSheet } from 'theme';

const Gradient = connectToStyleSheet('overlay', LinearGradient).withProps({
  colors: [ 'rgba(0, 0, 0, 0.35)', 'rgba(0, 0, 0, 0.5)' ],
});

const fragments = {
  user: gql`
    fragment Head_user on User {
      id
      avatar {
        id
        url(size: MEDIUM)
      }
      info {
        line1
        line2
      }
    }
  `
};

@styleSheet('Sparkle.UserViewHead', {
  overlay: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },

  navigation: {

  },

  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  infoLine: {
    textAlign: 'center',
  },

  infoLine1: {
    marginBottom: 5,
  },

  infoLine2: {
    marginBottom: 25,
    color: '#BDC0CB',
  },

  chatButton: {
    width: '38%',
    alignSelf: 'center',
  },

  backgroundImage: {
    resizeMode: 'cover',
  },

  backIcon: {
    fontSize: 35,
    color: '#BDC0CB',
  },
})
export default class Head extends PureComponent {
  static fragments = fragments;
  static propTypes = {
    user: fragmentProp(fragments.user).isRequired,
    onBackPress: PropTypes.func.isRequired,
  }

  render() {
    const { style, styleSheet, user, onBackPress } = this.props;

    const avatarUrl = user.avatar
      ? user.avatar.url
      : 'http://www.puristaudiodesign.com/Data/images/misc/default-avatar.jpg';

    return (
      <ImageBackground source={{ uri: avatarUrl }} style={[styleSheet.root, style]} imageStyle={styleSheet.backgroundImage}>
        <Gradient>
          <View style={styleSheet.navigation}>
            <Button light transparent onPress={onBackPress}>
              <Icon style={styleSheet.backIcon} name={'ios-arrow-back'} />
            </Button>
          </View>

          <View style={styleSheet.info}>
            <H2 inverse style={[styleSheet.infoLine, styleSheet.infoLine1]}>
              {user.info.line1}
            </H2>
            <Text note style={[styleSheet.infoLine, styleSheet.infoLine2]}>
              {user.info.line2}
            </Text>
          </View>

          <Button block bordered light style={styleSheet.chatButton}>
            <Text>Chat</Text>
          </Button>
        </Gradient>
      </ImageBackground>
    );
  }
}
