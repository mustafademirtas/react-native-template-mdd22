import React, {useEffect} from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import {NavigationStackProp} from 'react-navigation-stack';
import Utils from '../../utils';
import Stores from '../../stores/storeIdentifier';
import ThemeStore from '../../stores/themeStore';

interface Props {
  themeStore: ThemeStore;
  navigation: NavigationStackProp;
}

const AuthLoadingScene: React.FC<Props> = props => {
  const {themeStore, navigation} = props;

  useEffect(() => {
    async function _bootstrapAsync() {
      // Handle Theme
      await themeStore.loadCurrentTheme();

      // Handle Token
      const userToken = await Utils.getAuthToken();
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      navigation.navigate(userToken ? 'App' : 'Auth');
    }
    _bootstrapAsync();
  }, [navigation, themeStore]);

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default inject(Stores.SampleStore, Stores.ThemeStore)(
  observer(AuthLoadingScene),
);
