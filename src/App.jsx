import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/about/About';
import Work from './components/work/Work';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import NavBar from './components/navbar/NavBar';
import GRN from './components/GRN/GRN';
import TriviaGame from './components/triviagame/TriviaGame';
import Footer from './components/footer/Footer';

const App = () => (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <NavBar />
          <Route exact path="/" component={Work} />
          <Route path="/About" component={About} />
          <Route path="/Resume" component={Resume} />
          <Route path="/Contact" component={Contact} />
          <Route path="/GingerRedNaturals" component={GRN} />
          <Route path="/TriviaGame" component={TriviaGame} />
          <Footer />
        </div>
      </Router>
    );

export default App;

