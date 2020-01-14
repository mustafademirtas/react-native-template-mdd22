import React from 'react';
import {View} from 'react-native';
import {inject, observer} from 'mobx-react';
import {NavigationStackProp} from 'react-navigation-stack';
import styled from 'styled-components/native';
import Stores from '../../stores/storeIdentifier';
import SampleStore from '../../stores/sampleStore';
import ThemeStore from '../../stores/themeStore';
import SignInForm from './components/SignInForm';
import AppConst from '../../lib/appconst';
import {
  SampleSafeAreaView,
  SampleDefaultText,
  SampleDefaultHeaderText,
  SampleButton,
} from '../../components';

const StyledHolder = styled.View`
  margin-top: 5;
  margin-bottom: 5;
`;

interface Props {
  sampleStore: SampleStore;
  themeStore: ThemeStore;
  navigation: NavigationStackProp;
}

const SignInScene: React.FC<Props> = props => {
  const {themeStore, navigation} = props;
  return (
    <SampleSafeAreaView>
      <View>
        <SampleDefaultHeaderText>{AppConst.enviroment}</SampleDefaultHeaderText>
        <SampleDefaultText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SampleDefaultText>
      </View>
      <SignInForm />
      <StyledHolder>
        <SampleButton
          title="DARK THEME"
          onPress={async () => {
            await themeStore.switchDarkTheme();
          }}
        />
      </StyledHolder>
      <StyledHolder>
        <SampleButton
          title="DEFAULT THEME"
          onPress={async () => {
            await themeStore.switchDefaultTheme();
          }}
        />
      </StyledHolder>
      <StyledHolder>
        <SampleButton
          title="SETTINGS"
          onPress={async () => {
            navigation.navigate('Setting');
          }}
        />
      </StyledHolder>
    </SampleSafeAreaView>
  );
};

export default inject(Stores.SampleStore, Stores.ThemeStore)(
  observer(SignInScene),
);
