import React from 'react'
import Api from '../../apiUtil'
import SignUp  from '../SignUp.jsx'
require('../../styles/app.css');

export default class SignUpPage extends React.Component {
 
  constructor(){
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state ={
      formData : {
        email: '',
        password: '',
        reviews: []
      }
    }
  }

  handleChange(event){
   const field = event.target.name
   const data = this.state.formData 
   data[field] = event.target.value
  }

  onSubmit(e){
    e.preventDefault();
    if (this.state.formData.email === "") {
         alert("please enter email")
         return
    }
     if (this.state.formData.password === "") {
         alert("please enter password")
         return
    }
  
  var formData = JSON.stringify({
    email: this.state.formData.email,
    password: this.state.formData.password
  });

   const url = "/signup/users"

   Api.post(url, formData);
   this.props.history.push("/myAccount")
  }
  
  componentDidMount() {
    // Api.get("/companies/users").then(data => {
    //     this.setState({reviews : data.reviews[0].positive_reviews})
    //   })  
  }
  render(){
    return(<SignUp onSubmit={this.onSubmit} onChange={this.handleChange}/>) 
  }
}
