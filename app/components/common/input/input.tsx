import * as React from 'react';
import {I18nManager, StyleSheet, TextStyle} from 'react-native';
import {Card, HelperText, TextInput as RNPTextInput} from 'react-native-paper';
import {TextInputProps} from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import {translate, TxKeyPath} from '../../../i18n';
import {color} from '../../../theme';
import {moderateVerticalScale} from '../../../utils/scaling-utils';

const ERRORTEXT: TextStyle = {
  color: color.error,
  // paddingHorizontal: 0,
};

const TEXT: TextStyle = {
  height: moderateVerticalScale(40),
};

interface Props extends Omit<TextInputProps, 'theme'> {
  txOptions?: I18n.TranslateOptions;
  txPlaceholder?: TxKeyPath;
  err?: TxKeyPath;
  txLabel?: TxKeyPath;
  noValidation?: boolean;
  errorMessage?: string;
}

const AppInput = (props: Props) => {
  const {
    style: styleOverride,
    txPlaceholder,
    placeholder,
    errorMessage,
    err,
    label,
    txLabel,
    txOptions,
    noValidation,
    secureTextEntry,
    ...rest
  } = props;

  const writingDirection = I18nManager.isRTL ? 'rtl' : 'ltr';

  const styles = StyleSheet.flatten([TEXT, {writingDirection}, styleOverride]);
  // const texttyles = flatten([BASE, {writingDirection}, styleOverride]);

  // placeHolder
  const i18nText = txPlaceholder && translate(txPlaceholder, txOptions);
  const transPlaceholder = i18nText || placeholder;

  // label
  const i18nTextLabel = txLabel && translate(txLabel, txOptions);
  const transLabel = i18nTextLabel || txLabel;

  //error message
  const i18nTextErr = err && translate(err, txOptions);
  const transErrorMessage = i18nTextErr || errorMessage;

  return (
    <>
      <RNPTextInput
        mode="flat"
        label={transLabel}
        placeholderTextColor={color.hint}
        error={!!transErrorMessage}
        placeholder={transPlaceholder}
        style={styles as any}
        {...rest}
        theme={{
          colors: {
            primary: color.primary,
            background: '#FFFFFF00',
          },
        }}
      />
      {!noValidation && (
        <HelperText style={[ERRORTEXT]} type="error">
          {transErrorMessage}
        </HelperText>
      )}
    </>
  );
};

export default AppInput;
