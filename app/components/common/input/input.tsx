import {translate} from 'i18n-js';
import * as React from 'react';
import {I18nManager, StyleSheet, TextStyle} from 'react-native';
import {HelperText, TextInput as RNPTextInput} from 'react-native-paper';
import {TextInputProps} from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import {TxKeyPath} from '../../../i18n';
import {color} from '../../../theme';

const ERRORTEXT: TextStyle = {
  color: color.error,
  paddingHorizontal: 0,
};

const TEXT: TextStyle = {};

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
    noValidation = true,
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
        mode="outlined"
        theme={{colors: {primary: color.secondary}}}
        left={
          <RNPTextInput.Icon
            color={color.error}
            name="eye"
            onPress={() => {}}
          />
        }
        label={transLabel}
        placeholderTextColor={color.error}
        error={!!transErrorMessage}
        placeholder={transPlaceholder}
        style={styles as any}
        {...rest}
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
