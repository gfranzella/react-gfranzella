import React from "react"
import {Nav, Navbar} from 'react-bootstrap'



const Header = () => (
<>
    <div style={{paddingTop: '10px'}}>
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="#">Nosotros</Nav.Link>
                <Nav.Link href="#">Registro</Nav.Link>
                <Nav.Link href="#">Tickets</Nav.Link>
                <Nav.Link href="#">Blog</Nav.Link>
                <Nav.Link href="#">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>

</>
)

export default Header