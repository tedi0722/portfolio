import React, { Component } from 'react';
import { Carousel, Grid, Row, Col, Button } from 'react-bootstrap';
import './GRN.css';

export default class GRN extends Component {
    render () {
        return (
            <div>
                <h2 className="text-center">GingerRed Naturals</h2>
                <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/assets/images/GRNHome.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/assets/images/GRNOrder.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/assets/images/GRNWeatherNews.jpg" />
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
                                <li>WordPress</li>
                                <li>HTML5</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>JavaScript</li>
                                <li>PHP</li>
                                <li>Weather & News API</li>
                            </ul>
                            <Button className="view-site-btn">View Site</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}