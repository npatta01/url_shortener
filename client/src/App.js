import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";


import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import About from "./components/About";



class App extends React.Component {

    render() {
        return (
            <div className="App">

                <NavBar/>

                <div >

                    <Router>
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route strict path="/about" component={About} />
                        </div>
                    </Router>



                </div>
            </div>
        );
    }
}


export default App;
