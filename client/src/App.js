import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'

//axios.defaults.withCredentials = true


let apiHost = "https://np-url-shortener.herokuapp.com" 
//apiHost = "http://localhost:3005" 

class App extends React.Component {

  onClick = async (event) => {
    event.preventDefault();
    // call this function from render 
    // and this.whatever in here works fine.
    console.log(event)

    const form = event.target;
    console.log(form.elements.originalUrl.value)
    console.log(form.elements.shortCode.value)

    const res = await axios.post(`${apiHost}/api/url`,{
      originalUrl: form.elements.originalUrl.value,
      shortCode: form.elements.shortCode.value,
    })

    const {data} = res; 
    console.log(data)
    
  };

  render() {
    return  (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  
  
          <div>
            <Form onSubmit={this.onClick}>
                <Form.Group controlId="originalUrl">
                  <Form.Label>Original Url</Form.Label>
                  <Form.Control type="text" placeholder="Enter original url" ref="url"/>
  
                </Form.Group>
  
                <Form.Group controlId="shortCode">
                  <Form.Label>Short Code</Form.Label>
                  <Form.Control type="text" placeholder="Short Code" ref="shortCode" />
                </Form.Group>
                
                <Button variant="primary" type="submit" >
                  Submit
                </Button>
              </Form>
  
          </div>
  
        </header>
      </div>
    );
  }
}


export default App;
