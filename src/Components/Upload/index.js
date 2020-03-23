import React, { Component } from 'react';
import axios, { post } from 'axios';

class Upload extends Component {
	// eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state ={
          file:null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
      }
      onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
          console.log(response.data);
        })
      }
      onChange(e) {
        this.setState({file:e.target.files[0]})
      }
      fileUpload(file){
        const url = 'https://cemasapi.herokuapp.com/upload';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config)
      }
    
      render() {
        return (
          <form action="/upload" onSubmit={this.onFormSubmit} enctype="multipart/form-data">
            <h1>File Upload:</h1>
            <input   type="file" onChange={this.onChange}  name="avatar"/>
            <button  className="btn btn-info" type="submit">Actualizar con Archivo</button>
          </form>
       )
      }
}

export default Upload;