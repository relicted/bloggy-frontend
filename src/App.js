import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor} from './store';
import Navigation from './components/navigation';
import CreateUserForm from './forms/RegisterForm';
import { PersistGate } from 'redux-persist/integration/react'

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
                <Route path='/join' component={CreateUserForm}/>
                {/*<Route to='/' render={() => <div>Main Page</div>}/>*/}
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

