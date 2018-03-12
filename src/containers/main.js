import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';


import CreateUserForm from "../forms/RegisterForm";
import UnauthRequired from "./HOC/UnauthRequired";
import Landing from "./landing";
import Login from "../forms/LoginForm";

class Main extends Component {


  render(){

    return (
      <Switch>
        <Route exact path='/' component={UnauthRequired(Landing)}/>
        <Route path='/join' component={UnauthRequired(CreateUserForm)}/>
        <Route path='/login' component={UnauthRequired(Login)}/>
      </Switch>
    )
  }
}


export default Main;