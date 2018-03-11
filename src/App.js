import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react'

// import AuthRequired from './containers/HOC/AuthRequired';
import UnauthRequired from './containers/HOC/UnauthRequired';
import Navigation from './components/navigation';
import CreateUserForm from './forms/RegisterForm';
import Login from './forms/LoginForm';

class App extends Component {

  render() {
    return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div>
            <Navigation/>
            <div className="container">
              <Switch>
                <Route exact path='/' render={() => <div>Main Page</div>}/>
                <Route path='/join' component={UnauthRequired(CreateUserForm)}/>
                <Route path='/login' component={UnauthRequired(Login)}/>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
    )
  }
}

export default App;

