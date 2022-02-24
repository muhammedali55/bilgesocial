import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className='row'>
        <div id="lp-register">
            <div className="container wrapper">
                
                <div className="row">
                    <div className="col-sm-5">
                        <div className="intro-texts">
                            <h1 className="text-white">Make Cool Friends !!!</h1>
                            <p>Friend Finder is a social network template that can be used to connect people. The template offers Landing pages, News Feed, Image/Video Feed, Chat Box, Timeline and lot more. <br /> <br />Why are you waiting for? Buy it now.</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                    <div className="col-sm-6 col-sm-offset-1">
                        <div className="reg-form-container">

                            <div className="reg-options">
                                <ul className="nav nav-tabs">

                                    <li className="active"><a href="#login" data-toggle="tab">Login</a></li>
                                </ul>
                            </div>

                        
                            <div className="tab-content">

                            
                                <div className="tab-pane active" id="login">
                                    <h3>Login</h3>
                                    <p className="text-muted">Log into your account</p>

                                
                                    <form name="Login_form" id='Login_form' action="/login"
                                    method="post">
                                        <div className="row">
                                            <div className="form-group col-xs-12">
                                                <label htmlFor="my-email" className="sr-only">Email</label>
                                                <input id="my-email"
                                                    className="form-control input-group-lg"
                                                    type="text" name="username" title="Enter Email"
                                                    placeholder="Your Email"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-xs-12">
                                                <label htmlFor="my-password" className="sr-only">Password</label>
                                                <input id="my-password"
                                                    className="form-control input-group-lg"
                                                    type="password" name="password"
                                                    title="Enter password" placeholder="Password"/>
                                            </div>
                                        </div>
                                    
                                        <p><a href="#">Forgot Password?</a></p>
                                        <button className="btn btn-primary" type="submit">Login Now</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </ div>
    )
  }
}
