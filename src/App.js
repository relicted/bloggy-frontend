import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react'

// import AuthRequired from './containers/HOC/AuthRequired';
import Navigation from './components/navigation';
import Main from './containers/main';

class App extends Component {

  render() {
    return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div>
            <Navigation/>
            <Main/>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
    )
  }
}

export default App;

