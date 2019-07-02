import React from 'react';
import { View } from 'react-native';
import Text from '../components/MyTextComponent';

export default function Tab({ navigation }) {
  const { routeName } = navigation.state;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text>{routeName}</Text>
    </View>
  )
}
