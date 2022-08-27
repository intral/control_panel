import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';


class Home extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Nav fill variant="tabs" defaultActiveKey="/home">
                        <Navbar.Brand href="/">Home</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/Service">Сервисы</Nav.Link>
                        </Nav>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}
export default Home;