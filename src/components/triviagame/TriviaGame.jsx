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
                            <p>blah blah blah</p>
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