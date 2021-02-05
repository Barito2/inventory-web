import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><strong>Inventory-api</strong></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/units">Unit</Nav.Link>
                    <Nav.Link href="/items">Item</Nav.Link>
                    <Nav.Link href="/stocks">Stock</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent
