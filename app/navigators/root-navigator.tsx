import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
  useTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainNavigator} from './main-navigator';

export type RootParamList = {
  mainStack: undefined;
};

const Stack = createStackNavigator<RootParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="mainStack"
        component={MainNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const RootNavigator: React.FC<
  Partial<React.ComponentProps<typeof NavigationContainer>>
> = props => {
  const theme = useTheme();

  return (
    <>
      <NavigationContainer theme={theme} {...props}>
        <RootStack />
      </NavigationContainer>
    </>
  );
};

RootNavigator.displayName = 'RootNavigator';
