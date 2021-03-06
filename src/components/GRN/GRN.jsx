import React, { Component } from 'react';
import { Carousel, Grid, Row, Col, Button } from 'react-bootstrap';
import './GRN.css';
import GRNHome from '../../assets/images/GRNHome.jpg';
import GRNOrder from '../../assets/images/GRNOrder.jpg';
import GRNWeatherNews from '../../assets/images/GRNWeatherNews.jpg';

export default class GRN extends Component {
    render () {
        return (
            <div>
                <h2 className="text-center">GingerRed Naturals</h2>
                <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={ GRNHome } />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={ GRNOrder } />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={ GRNWeatherNews } />
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