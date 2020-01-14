import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';

interface Props extends ActivityIndicatorProps {}

export const SampleActivityIndicator: React.FC<Props> = props => {
  return <ActivityIndicator {...props} size="small" color="blue" />;
};
