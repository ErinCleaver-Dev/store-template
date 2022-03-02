import React from 'react'
import {Navbar, Nav, Button, Container, Form, FormControl} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            <Nav>
                <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                </LinkContainer>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header