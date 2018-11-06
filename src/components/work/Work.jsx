import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import './Work.css'


export default class Work extends Component {
    render () {
        return (
            <Grid className="work-wrapper">
            <Row>
            <Col xs={12} md={4}>
            <Thumbnail componentClass={Link} href="/" to="/GingerRedNaturals" className="project-card" src="assets/images/GRNLogo.jpg" alt="242x200">
              <h3 className="text-center">GingerRed Naturals</h3>
              <p className="text-center">WordPress</p>
            </Thumbnail>
            </Col>
            <Col xs={12} md={4}>
            <Thumbnail componentClass={Link} href="/" to="/TriviaGame" className="project-card" src="assets/images/TGLogo.jpg" alt="242x200">
              <h3 className="text-center">GingerRed Naturals</h3>
              <p className="text-center">JavaScript</p>
            </Thumbnail>
            </Col>
            <Col xs={12} md={4}>
            <Thumbnail componentClass={Link} href="/" to="/GingerRedNaturals" className="project-card" src="assets/images/GRNLogo.jpg" alt="242x200">
              <h3 className="text-center">GingerRed Naturals</h3>
              <p className="text-center">WordPress</p>
            </Thumbnail>
            </Col>
            </Row>
          </Grid>
        )
    }
}