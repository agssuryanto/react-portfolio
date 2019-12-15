import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Posts from '../pages/Posts';
import Gallery from '../pages/Gallery';
import Login from '../pages/Login';

export default class Index extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar fixed-top navbar-expand-lg">
                        <div className="container">
                            <a className="navbar-brand" href="/">Doing Fun</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fas fa-cog"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/posts">Posts</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/gallery">Gallery</Link>
                                    </li>                                
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>                     
                                </ul>
                                <div>
                                    <Link to="/login"><i className="fas fa-sign-in-alt"></i></Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                    
                    <Link to="/login"></Link>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/posts" component={Posts} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path="/login" component={Login} />
                </div>
            </Router>
        );
    }
}

