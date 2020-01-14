import React from 'react';
import {Input, InputProps} from 'react-native-elements';
import {StyleSheet} from 'react-native';

interface Props extends InputProps {}

export const SampleTextInput: React.FC<Props> = props => {
  return (
    <Input
      {...props}
      containerStyle={[styles.containerStyle, props.containerStyle]}
      inputStyle={[styles.inputStyle, props.inputStyle]}
      labelStyle={[styles.labelStyle, props.labelStyle]}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {paddingHorizontal: 0},
  inputStyle: {},
  labelStyle: {},
});
