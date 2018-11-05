import React, { Component } from 'react';
import { Carousel, Grid, Row, Col, Button } from 'react-bootstrap';
import './TriviaGame.css';

export default class TriviaGame extends Component {
    render () {
        return (
            <div>
                <h2 className="text-center">Trivia Game</h2>
                <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/assets/images/TG1.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/assets/images/TG2.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/assets/images/TG3.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/assets/images/TG4.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/assets/images/TG5.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/assets/images/TG6.jpg" />
                    </Carousel.Item>
                </Carousel>;
                <Grid className="project-info"> 
                    <Row>
                        <Col xs={12}>
                            <h3>About This Project</h3>
                                <hr></hr>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <h3>Technologies Involved</h3>
                                <hr></hr>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                            </ul>
                            <Button className="view-site-btn">View Site</Button>
                        </Col>
                </Row>
                </Grid>
            </div>
        )
    }
}