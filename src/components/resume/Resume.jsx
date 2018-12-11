import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Resume.css';

export default class Resume extends Component {
    render () {
        return (
            <div>
                <h2 className="text-center">Resume</h2>
            <Grid className="resume-wrapper">
                <Row>
                    <Col xs={12} sm={6}>
                    <h3>Technologies:</h3>
                        <ul className="list-unstyled">
                            <li>HTML 5</li>
                            <li>CSS 3</li>
                            <li>JavaScript</li>
                            <li>ReactJS</li>
                            <li>NodeJS</li>
                            <li>WordPress</li>
                            <li>Git</li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={6}>
                    <h3>Other Skills:</h3>
                        <ul className="list-unstyled">
                            <li>Microsoft Word</li>
                            <li>Microsoft Powerpoint</li>
                            <li>Microsoft Excel</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Lightroom</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                    <h3 className="resume-title">Experience</h3>
                    </Col>
                    <Col xs={12}>
                    <h4>Front-end Developer | GingerRed Naturals</h4>
                    <p></p>
                    </Col>
                    <Col xs={12}>
                    <h4>Company Brand Manager | EchoMe</h4>
                    <p></p>
                    </Col>
                    <Col xs={12}>
                    <h4>Production Assistant | Platinum Recording Studio</h4>
                    <p></p>
                    </Col>
                    <Col xs={12}>
                    <h4>Valunteer | Tech Goes Home</h4>
                    <p></p>
                    </Col>
                    <Col xs={12}>
                    <h4>Instructor | Taipei Juvenile Welfare Center</h4>
                    <p></p>
                    </Col>
                    <Col xs={12}>
                    <h4>Audio Engineer | Edgar Stanton Audio Recording Institute</h4>
                    <p></p>
                    </Col>
                    <Col xs={12}>
                    <h4>Intern | Platinum Recording Studio</h4>
                    <p></p>
                    </Col>
                    <Col xs={12}>
                    <h4>Intern | Point Studio</h4>
                    <p></p>
                    </Col>
                    <Col xs={12}>
                    <h4>Intern | Pony</h4>
                    <p></p>
                    </Col>
                    <Col xs={12}>
                    <h4>Event Coordinator | Team of Median Performance</h4>
                    <p></p>
                    </Col>
                </Row>
            </Grid>
            <Grid className="additional-info">
    
            </Grid>
            </div>
        )
    }
}