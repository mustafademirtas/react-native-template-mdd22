import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {inject, observer} from 'mobx-react';
import Stores from '../../../src/stores/storeIdentifier';
import ThemeStore from '../../../src/stores/themeStore';

interface Props {}

interface InjectedProps extends Props {
  themeStore: ThemeStore;
}

const Component: React.FC<Props> = props => {
  const {themeStore} = props as InjectedProps;
  return (
    <SafeAreaView
      style={[styles.containerStyle, themeStore.styleSheet.defaultContainer]}>
      {props.children}
    </SafeAreaView>
  );
};

export const SampleSafeAreaView = inject(Stores.ThemeStore)(
  observer(Component),
);

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});
