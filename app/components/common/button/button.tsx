import * as React from 'react';
import {ButtonProps} from 'react-native';
import {Button as RNPButton} from 'react-native-paper';
import {translate, TxKeyPath} from '../../../i18n';

interface Props {
  txOptions?: I18n.TranslateOptions;
  title?: string;
  tx?: TxKeyPath;
  onPress?: () => void;
}
const AppButton = (props: Props) => {
  const {tx, txOptions, title, ...rest} = props;

  const i18nText = tx && translate(tx, txOptions);
  const transTitle = i18nText || title;
  return (
    <RNPButton
      //   icon="camera"
      //   mode="contained"
      {...rest}>
      {transTitle}
    </RNPButton>
  );
};

export default AppButton;
