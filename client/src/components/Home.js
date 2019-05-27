import React from 'react';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

let apiHost = "";

class Home extends React.Component {
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
            <Container>

                <Row className="justify-content-md-center">
                    <h2> Shorten your urls </h2>

                </Row>


                <Row className="justify-content-md-center">
                    <Form onSubmit={this.onClick} className="">
                        <Form.Group controlId="originalUrl">
                            <Form.Label>Original Url</Form.Label>
                            <Form.Control type="text" placeholder="Enter original url" ref="url"/>

                        </Form.Group>

                        <Form.Group controlId="shortCode">
                            <Form.Label>Short Code</Form.Label>
                            <Form.Control type="text" placeholder="Short Code" ref="shortCode"/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Shorten
                        </Button>
                    </Form>
                </Row>


            </Container>)
    }
}

export default Home;