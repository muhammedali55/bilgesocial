import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <>
        <div id="lp-register">
    <div class="container wrapper">
        <div class="row">
            <div class="col-sm-5">
                <div class="intro-texts">
                    <h1 class="text-white">Make Cool Friends !!!</h1>
                    <p>Friend Finder is a social network template that can be used to connect people. The template offers Landing pages, News Feed, Image/Video Feed, Chat Box, Timeline and lot more. <br /> <br />Why are you waiting for? Buy it now.</p>
                    <button class="btn btn-primary">Learn More</button>
                </div>
            </div>
            <div class="col-sm-6 col-sm-offset-1">
                <div class="reg-form-container">

                    <div class="reg-options">
                        <ul class="nav nav-tabs">

                            <li class="active"><a href="#login" data-toggle="tab">Login</a></li>
                        </ul>
                    </div>

                 
                    <div class="tab-content">

                    
                        <div class="tab-pane active" id="login">
                            <h3>Login</h3>
                            <p class="text-muted">Log into your account</p>

                          
                            <form name="Login_form" id='Login_form' action="/login"
                            method="post">
                                <div class="row">
                                    <div class="form-group col-xs-12">
                                        <label for="my-email" class="sr-only">Email</label>
                                        <input id="my-email"
                                               class="form-control input-group-lg"
                                               type="text" name="username" title="Enter Email"
                                               placeholder="Your Email"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-xs-12">
                                        <label for="my-password" class="sr-only">Password</label>
                                        <input id="my-password"
                                               class="form-control input-group-lg"
                                               type="password" name="password"
                                               title="Enter password" placeholder="Password"/>
                                    </div>
                                </div>
                                <label style="color: red" ></label>
                                <p><a href="#">Forgot Password?</a></p>
                                <button class="btn btn-primary" type="submit">Login Now</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

      </>
    )
  }
}
