import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Routing from './Routing';
import store from './redux/store';
import { getAddresses } from './redux/actions/addressActions';

const App = () => {
  useEffect(() => {
    store.dispatch(getAddresses());
  }, []);

  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
};

export default App;
