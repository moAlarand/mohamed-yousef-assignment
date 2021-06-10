import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {color} from '../../../theme';

interface Props {
  title?: string;
}

const AppHeader = (props: Props) => {
  const {title} = props;
  return (
    <Appbar.Header style={{backgroundColor: 'white'}}>
      <Appbar.Content color={color.primary} title={title} />
    </Appbar.Header>
  );
};

export default AppHeader;
