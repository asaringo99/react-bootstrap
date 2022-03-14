import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

const Hello = (props) => {
    const [name, setName] = useState("World");
    return (
        <Card>
            <Card.Body>
                <h1>ENTRY FORM</h1>
                <h1>Hello {name}!</h1>
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} />
            </Card.Body>
        </Card>
    )
}
export default Hello