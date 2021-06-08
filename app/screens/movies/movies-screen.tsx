import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';

export const MoviesScreen = ({navigation}) => {
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
