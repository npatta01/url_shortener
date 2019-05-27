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

        this.setState({message: null});

        const form = event.target;
        console.log(form.elements.originalUrl.value);
        //console.log(form.elements.shortCode.value );

        const res = await axios.post(`${apiHost}/api/url`, {
            originalUrl: form.elements.originalUrl.value,
           // shortCode: form.elements.shortCode.value,
        });

        const {data} = res;
        console.log(data);

        const newUrl =  `https://${window.location.hostname}/u/${data.urlCode}`;
        this.setState({ message: data, url:newUrl  });
    };

    constructor (props){
        super(props);
        this.state = {
            message: null,
            newUrl: null
        }
    }

    _renderResponse(url){
        if (url){
            return (
                <div>
                    <h3> New Url</h3>
                    <div>{url}</div>
                </div>
            )
        }else{
            return null
        }
    }
    render() {
        const {url} = this.state;
        return (
            <Container>

                <Row className="justify-content-md-center">
                    <h2> Shorten your urls </h2>

                </Row>


                <Row className="justify-content-md-center">
                    <Form onSubmit={this.onClick} className="">
                        <Form.Group controlId="originalUrl">
{/*
                            <Form.Label>Original Url</Form.Label>
*/}
                            <Form.Control type="text" placeholder="Enter original url" ref="url"/>

                        </Form.Group>
{/*
                        <Form.Group controlId="shortCode">
                            <Form.Label>Short Code</Form.Label>
                            <Form.Control type="text" placeholder="Short Code" ref="shortCode"/>
                        </Form.Group>*/}

                        <Button variant="primary" type="submit">
                            Shorten
                        </Button>
                    </Form>
                </Row>


                {this._renderResponse(url)}



            </Container>)
    }
}

export default Home;