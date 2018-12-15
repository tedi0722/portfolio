import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render () {
        return (
            <footer className="footer">
                <div className="social-links">
                <p>Follow me on social media:</p>
                <a href="https://github.com/tedi0722" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/ted-i-8a9813131/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/tsi.jpg/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                </div>
            </footer>
        )
    }
}