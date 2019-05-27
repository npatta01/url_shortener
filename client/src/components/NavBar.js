import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


class NavBar extends  React.Component {



    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#github">Github</Nav.Link>
                </Nav>

            </Navbar>
        )
    }
}

export default NavBar