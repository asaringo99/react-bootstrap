import React, { useState } from 'react';
import { Stack, Button, Form } from 'react-bootstrap';

const CountClick = () => {
    const [count, setCount] = React.useState(0);
    const [word, setWord] = React.useState('a');
    React.useEffect(() => {
        setWord('<p>おちんぽ</p>')
    },[]);
    return(
        <div>
            <p>count: {count}</p>
            <Button variant="success" onClick = { () => setCount(count + 1) }>Clear</Button>
        </div>
    )
}
export default CountClick