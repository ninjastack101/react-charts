import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../store';
import ApolloProvider from '../../services/graphql/AplloProvider';

import RootWrapper from '../../components/RootWrapper';
import Routes from '../../routes';

// Configure the store instance
const store = configureStore();

const App = () => (
  <RootWrapper>
    <ApolloProvider>
      <Provider store={store}>
        {Routes}
      </Provider>
    </ApolloProvider>
  </RootWrapper>
);

App.propTypes = {
};

export default App;
