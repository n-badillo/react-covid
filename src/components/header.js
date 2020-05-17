import React, { Component } from 'react';
//import { Link } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';

// Components used from react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">COVID-19 Tracker</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
      </Nav>
    </Navbar>
    )
  }
}
