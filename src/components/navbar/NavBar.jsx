import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
    render () {
        return (
            <Navbar default collapseOnSelect className="myNav">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Ted I</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <div>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} className="tab" href="/" to="/">
                            Work
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} className="tab" href="/" to="/About">
                            About
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} className="tab" href="/" to="/Resume">
                            Resume
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} className="tab" href="/" to="/Contact">
                            Contact
                        </NavItem>
                    </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}