// Yönlendirme burada yapılacak
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScene from './scenes/Home';
import SubScene from './scenes/Sub';
import AuthLoadingScene from './scenes/AuthLoading';
import SignInScene from './scenes/SignIn';
import SettingsScene from './scenes/Settings';

const AppStack = createStackNavigator({Home: HomeScene, Sub: SubScene});
const AuthStack = createStackNavigator({SignIn: SignInScene});
const SettingsStack = createStackNavigator({Settings: SettingsScene});

const RootNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScene,
    App: AppStack,
    Auth: AuthStack,
    Setting: SettingsStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const AppContainer = createAppContainer(RootNavigator);

export default AppContainer;
