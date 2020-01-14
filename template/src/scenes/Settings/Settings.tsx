import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {inject, observer} from 'mobx-react';
import {NavigationStackProp} from 'react-navigation-stack';
import styled from 'styled-components/native';
import {ListItem} from 'react-native-elements';
import Stores from '../../stores/storeIdentifier';
import SampleStore from '../../stores/sampleStore';
import {SampleButton} from '../../components';

const StyledText = styled.Text`
  color: #ddd;
`;

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
];

interface Props {
  sampleStore: SampleStore;
  navigation: NavigationStackProp;
}

const SettingsScene: React.FC<Props> = props => {
  const {sampleStore, navigation} = props;
  useEffect(() => {
    async function getAll() {
      await sampleStore.getTodo();
    }
    getAll();
  }, [sampleStore]);
  return (
    <SafeAreaView>
      {list.map((item, i) => (
        <ListItem
          key={i}
          title={item.title}
          leftIcon={{name: item.icon}}
          bottomDivider
          chevron
        />
      ))}
    </SafeAreaView>
  );
};

export default inject(Stores.SampleStore)(observer(SettingsScene));
