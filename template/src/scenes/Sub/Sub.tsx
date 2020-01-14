import React, {useEffect} from 'react';
import {Text, SafeAreaView} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import {inject, observer} from 'mobx-react';
import Stores from '../../stores/storeIdentifier';
import SampleStore from '../../stores/sampleStore';

interface Props {
  sampleStore: SampleStore;
  navigation: NavigationStackProp;
}

const SubScene: React.FC<Props> = props => {
  const {sampleStore} = props;

  useEffect(() => {
    sampleStore.setMessage('WAYY');
  }, [sampleStore]);

  return (
    <SafeAreaView>
      <Text>{sampleStore.message}</Text>
    </SafeAreaView>
  );
};

export default inject(Stores.SampleStore)(observer(SubScene));
