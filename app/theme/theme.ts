import {DefaultTheme} from 'react-native-paper';
import {color} from './color';

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    ...color,
    accent: color.secondary,
  },
};
