import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import { BrowserRouter as Router, Route } from 'react-router-dom';



import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import NavBar from "./components/NavBar";


let apiHost = "";

const Home = () => <h1>Home</h1>;
const Admin = () => <h1>Admin</h1>;

class App extends React.Component {

    onClick = async (event) => {
        event.preventDefault();
        // call this function from render
        // and this.whatever in here works fine.
        console.log(event);

        const form = event.target;
        console.log(form.elements.originalUrl.value);
        console.log(form.elements.shortCode.value);

        const res = await axios.post(`${apiHost}/api/url`, {
            originalUrl: form.elements.originalUrl.value,
            shortCode: form.elements.shortCode.value,
        });

        const {data} = res;
        console.log(data)

    };

    render() {
        return (
            <div className="App">

                <NavBar/>

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                    <Router>
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route strict path="/admin" component={Admin} />
                        </div>
                    </Router>



                </header>
            </div>
        );
    }
}


export default App;
