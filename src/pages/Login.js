import React, { Component } from 'react';


export default class Login extends Component {
    render() {
        return (
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img className="rounded-circle img-thumbnail" src="img/foto1.jpg" alt="" style={mystyle} /> 
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h4>Login Form</h4>
                        </div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

const mystyle = {
    width: "250px"
};