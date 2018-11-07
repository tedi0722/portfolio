import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './About.css'
import ProfilePic from '../../assets/images/IMG_4399.JPG';

export default class About extends Component {
    render () {
        return (
            <Grid>
                <Jumbotron className="text-center">
                    <h2>Hello, I'm Ted,</h2>
                    <h2>front-end developer.</h2>
                    <h2>Nice to meet you!</h2>
                    <br></br>
                    <Link to="/">
                    <Button className="view-work-btn">View Work</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center about-wrapper">
                    <Col xs={12} md={4} className="profile-pic-wrapper">
                        <Image src={ ProfilePic } circle className="profile-pic" />
                    </Col>
                    <Col xs={12} md={8} className="bio-wrapper">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}