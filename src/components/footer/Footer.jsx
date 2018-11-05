import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Footer.css';

export default class Footer extends Component {
    render () {
        return (
            <footer>
                <div className="social-links">
                <p>Follow me on social media:</p>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                </div>
            </footer>
        )
    }
}