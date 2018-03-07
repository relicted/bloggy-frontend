import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation, {Error404} from './components/navigation';
import Post from './containers/post/main';
import User from './containers/account/main';



class App extends Component {

  render() {return (
      <BrowserRouter>
        <div>
          <Navigation />
          <div className='container'>
            <Switch>
              <Route path='/posts' component={Post}/>
              <Route path='/users' component={User} />

              <Route component={Error404}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(state => ({}))(App);

