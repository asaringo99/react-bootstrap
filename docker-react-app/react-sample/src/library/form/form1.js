import React, { Component } from 'react';
import { Stack, Button, Form } from 'react-bootstrap';

class Form1 extends React.Component {
    render(){
        return(
            <Stack direction="horizontal" gap={2} className="col-md-10 mx-auto">
                <Form.Control className="me-auto" placeholder="Add your item here..." />
                <Button variant="secondary">Submit</Button>
                <div className="vr" />
                <Button variant="outline-danger">Reset</Button>
            </Stack>
        )
    }
}
export default Form1