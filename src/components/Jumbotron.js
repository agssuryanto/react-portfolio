import React, { Component } from 'react';

export default class Index extends Component {
    render() {
        return (
        <div className="jumbotron jumbotron-fluid my-5 py-5">
            <div className="container text-center">
                <img className="rounded-circle img-thumbnail" src="img/foto1.jpg" alt="" style={mystyle} />   
                <h1 className="display-4">Agus Suryanto</h1>
                <h4>Web Developer</h4>
                <p className="lead">PHP, Laravel, CodeIgniter, React, Vue, Wordpress</p>
            </div>
        </div>
        );
    }
}

const mystyle = {
    width: "250px"
};