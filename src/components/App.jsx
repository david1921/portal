import React from 'react'
import Api from '../apiUtil'
//import SignUp  from './SignUp.jsx'
require('../styles/app.css');
import { BrowserRouter as Router,Route,Link ,Switch } from 'react-router-dom'

import Account from './containers/Account.jsx'
import SignUp from './containers/SignUpPage.jsx'
import MainLayout from './MainLayout.jsx'
import ReactDOM from 'react-dom';
//import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

export default class App extends React.Component {
 
  // constructor(){
  //   super();
  //   this.onSubmit = this.onSubmit.bind(this);
  //   this.handleChange = this.handleChange.bind(this);

  //   this.state ={
  //     formData : {
  //       email: ''
  //     }
  //   }
  // }

  // handleChange(event){
  //  const field = event.target.name
  //  const data = this.state.formData 
  //  data[field] = event.target.value
  // }

  // onSubmit(e){
  //   e.preventDefault();
  //   if (this.state.formData.email === "") {
  //        alert("please enter email")
  //        return
  //   }
  
  // var formData = JSON.stringify({
  //    firstanme: this.state.formData.email,
  //    lastname: "Li"
  // });

  //  const url = "/signup/users"

  //  Api.post(url, formData);
  // }

	render(){
		return( <MainLayout/>) 
	}
}
