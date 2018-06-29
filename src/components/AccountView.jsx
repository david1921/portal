import React from 'react'
//import Api from '../apiUtil'
require('../styles/app.css');

const AccountView = ({onSubmit, onChange, onFileChange, imagePreview}) => (
  
    <div className="header">
        <form onSubmit={onSubmit} className="MyForm" encType= "multipart/form-data" >
            <input type="text" name="title" placeholder="Enter name or title" onChange = {onChange}/>
            <input type="file" name="attachment" onChange = {onFileChange}/>
            {imagePreview}
          <button type="submit">Submit</button>
        </form>
    </div>
  
);

export default AccountView;