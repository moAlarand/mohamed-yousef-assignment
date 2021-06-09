import * as React from 'react';
import {Text as RNPText} from 'react-native-paper';
import {translate, TxKeyPath} from '../../../i18n';
import {I18nManager, StyleSheet, TextProps} from 'react-native';
import {color as colors} from '../../../theme/color';
import I18n from 'i18n-js';
import {Color} from '../../../theme';

export interface Props extends TextProps {
  children?: React.ReactNode;

  tx?: TxKeyPath;

  txOptions?: I18n.TranslateOptions;

  text?: string;

  color?: Color;
}

export function Text(props: Props) {
  // grab the props
  const {
    tx,
    txOptions,
    text,
    children,
    style: styleOverride,
    color = colors.text,
    ...rest
  } = props;
  const i18nText = tx && translate(tx, txOptions);
  const content = i18nText || text || children;
  const writingDirection = I18nManager.isRTL ? 'rtl' : 'ltr';

  const styles = StyleSheet.flatten([
    {writingDirection, color: colors[color as Color]},
    styleOverride,
  ]);

  return (
    <RNPText {...rest} style={styles as any}>
      {content}
    </RNPText>
  );
}
