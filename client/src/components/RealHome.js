import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class RealHome extends React.Component {

    render() {
        return (
            <div>
                <Form onSubmit={this.onClick}>
                    <Form.Group controlId="originalUrl">
                        <Form.Label>Original Url</Form.Label>
                        <Form.Control type="text" placeholder="Enter original url" ref="url"/>

                    </Form.Group>

                    <Form.Group controlId="shortCode">
                        <Form.Label>Short Code</Form.Label>
                        <Form.Control type="text" placeholder="Short Code" ref="shortCode"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </div>
        )
    }
}

