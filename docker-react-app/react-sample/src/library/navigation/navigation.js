import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class Navigation extends React.Component{
    render(){
        return(
            <>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
                </Nav.Item>
            </Nav>
            <p className="text-center mt-4 mb-4">Or right-aligned</p>
            </>
        )
    }
}
export default Navigation