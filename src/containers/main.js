import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';


import CreateUserForm from "../forms/RegisterForm";
import UnauthRequired from "./HOC/UnauthRequired";
import AuthRequired from "./HOC/AuthRequired";
import Landing from "./landing";
import Login from "../forms/LoginForm";
import Feed from "../containers/landing/feed";


class Main extends Component {


  render(){

    return (
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/join' component={UnauthRequired(CreateUserForm)}/>
        <Route path='/login' component={UnauthRequired(Login)}/>
        <Route path='/feed' component={AuthRequired(Feed)}/>
        <Route path='/messages' component={AuthRequired(Feed)}/>
      </Switch>
    )
  }
}


export default Main;
