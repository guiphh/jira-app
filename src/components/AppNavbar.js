import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Nav, Grid, Row, Col, NavbarBrand } from "react-bootstrap";


class AppNavbar extends Component {
    render(){
        return(
        <Row>
        <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
            React Jira App
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem componentClass={Link} href="/" to="/">Home</NavItem>
            <NavItem componentClass={Link} href="/issues" to="/issues">Issues</NavItem>
        </Nav>
        </Navbar>
        </Row>
        )
    }
}

export default AppNavbar;
