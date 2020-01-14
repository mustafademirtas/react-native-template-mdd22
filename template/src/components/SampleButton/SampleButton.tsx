import React from 'react';
import {Button, ButtonProps} from 'react-native-elements';
import {StyleSheet} from 'react-native';

interface Props extends ButtonProps {}

export const SampleButton: React.FC<Props> = props => {
  return <Button {...props} buttonStyle={[styles.buttonStyle, props.style]} />;
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'orange',
  },
});
