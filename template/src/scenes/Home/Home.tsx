import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {inject, observer} from 'mobx-react';
import {NavigationStackProp} from 'react-navigation-stack';
import styled from 'styled-components/native';
import Stores from '../../stores/storeIdentifier';
import SampleStore from '../../stores/sampleStore';
import {SampleButton} from '../../components';

const StyledText = styled.Text`
  color: #ddd;
`;

interface Props {
  sampleStore: SampleStore;
  navigation: NavigationStackProp;
}

const HomeScene: React.FC<Props> = props => {
  const {sampleStore, navigation} = props;
  useEffect(() => {
    async function getAll() {
      // NOTE: Bu screen başlangıcında servisten alınacak değerler burada olacak
      await sampleStore.getTodo();
    }
    getAll();
  }, [sampleStore]);
  return (
    <SafeAreaView>
      <StyledText>{sampleStore.todo.title}</StyledText>
      <SampleButton
        title="Megan"
        onPress={() => {
          navigation.navigate('Sub');
        }}
      />
    </SafeAreaView>
  );
};

export default inject(Stores.SampleStore)(observer(HomeScene));
