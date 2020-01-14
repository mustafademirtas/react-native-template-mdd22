import React from 'react';
import {Text, TextProps} from 'react-native';
import theme from '../../utils/theme';

interface Props extends TextProps {}

export const SampleDefaultText: React.FC<Props> = props => {
  return (
    <Text {...props} style={theme.defaultText}>
      {props.children}
    </Text>
  );
};
