import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';

export const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>sdjksd</Text>
      <Button
        onPress={() => {
          navigation.navigate('movies');
        }}>
        click
      </Button>
    </View>
  );
};
