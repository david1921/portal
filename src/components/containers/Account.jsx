import React from 'react';
import AccountView  from '../AccountView.jsx'
import Api from '../../apiUtil'

export default  class Account extends React.Component {

  constructor(){
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);

    this.state ={
        title: '',
        attachment: '',
        imagePreviewUrl: 'select',
        filename: '',
        filetype:''
    };
  }

  
  handleChange(event){
   const field = event.target.name
   const data = this.state
   data[field] = event.target.value
  }

  handleFile(event){
   const reader = new FileReader();
   const file = event.target.files[0];
   reader.onload = (upload) => {
    console.log(file.name)
      this.setState({
        attachment: upload.target.result,
        imagePreviewUrl: upload.target.result,
        filename: file.name,
        filetype: file.type
      });
    }
   reader.readAsDataURL(file)
   
  }

  onSubmit(e){
    e.preventDefault();
    if (this.state.title === "") {
         alert("please enter the name or title ")
         return
    }
     if (this.state.attachment === "" || this.state.attachment === undefined) {
         alert("please attach the file")
         return
    }

    var formData = JSON.stringify({
        title: this.state.name,
        attachment: this.state.attachment,
        filename: this.state.filename,
        filetype: this.state.filetype
     });

     const url = "/listing/create"

     Api.post(url, formData);
  }

  
  

   render() {
             let imagePreview = null;
             if(this.state.imagePreviewUrl === 'select'){
                imagePreview = (<div>Select </div>);
                }
             else {
                imagePreview = (<img src={this.state.imagePreviewUrl} />);
             
              }
      return (<AccountView onSubmit={this.onSubmit} onChange={this.handleChange} onFileChange={this.handleFile} imagePreview = {imagePreview}/>)
   }
}

//export default Account;