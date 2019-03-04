import React from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { Text } from 'native-base';

import ConnectivityIndicator from './ConnectivityIndicator';

const stories = storiesOf('Components/ConnectivityIndicator', module);

// Decorators
stories.addDecorator(withKnobs);

// Stories
stories.add('Default', () => (
  <ConnectivityIndicator isOnline={boolean('Is online', true)}>
    <Text>Overlay content</Text>
  </ConnectivityIndicator>
));
