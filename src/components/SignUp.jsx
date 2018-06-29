import React from 'react'
import Api from '../apiUtil'
require('../styles/app.css');

const SignUp = ({onSubmit, onChange}) => (
 
  // constructor(){
  //   super();
  //   this.onSubmit = this.onSubmit.bind(this);
  // }

  // onSubmit(e){
  //   e.preventDefault();
  //   if (this.email !== null) {
  //     if (this.email.value === ""){
  //        alert("hey")
  //        return
  //     }
  //   }

  //   var formData = JSON.stringify({
  //    firstanme: this.email.value,
  //    lastname: "Li"
  //   });

  //  const url = "/signup/users"

  //  Api.post(url, formData);
  // }
  
    <div className="header">
           <form onSubmit={onSubmit} className="MyForm" >
            <input type="email" name="email" placeholder="Enter your email" onChange = {onChange}/>
            <input type="password" name="password" placeholder="Enter your password" onChange = {onChange}/>
          <button type="submit">Submit</button>
        </form>
         </div>
  
);

export default SignUp;