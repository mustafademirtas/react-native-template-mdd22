import React from 'react';
import {Provider} from 'mobx-react';

import initializeStores from './stores/storeInitializer';
import Router from './Router';

const stores = initializeStores();

const App = () => {
  return (
    <Provider {...stores}>
      <Router />
    </Provider>
  );
};

export default App;
