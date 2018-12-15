import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './About.css'
import ProfilePic from '../../assets/images/IMG_7244.JPG';

export default class About extends Component {
    render () {
        return (
            <Grid>
                <Jumbotron className="text-center">
                    <h2>Hello, I'm Ted,</h2>
                    <h2>full-stack developer.</h2>
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
                        <p>I'm a full-stack developer who wants to help a company grow through building and improving its applications and online presence. I enjoy decomposing and solving complicated problems and I’m always intrigued by the different possibilities and solutions that lies ahead. I strive to write clean codes and want to use my skills to ensure a business grows and remains on the cutting edge.</p>
                        <p>When I'm not working, I love being outdoors, going on road trips, and shooting landscape photos.</p>
                        <p>I am a hard worker and consider myself a lifelong learner. I’m confident that I’ll be able to contribute positively and I’m excited about what the future holds for my career.</p>
                        <p>If you'd like to learn more about me, feel free to reach out on <Link to="/Contact">contact page</Link>.</p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}