import React, { Component } from 'react';

export default class SignUpForm extends Component {
    render() {
        return(
            
            <form className="d-flex justify-content-center align-items-center text-center border border-light p-5 " action="#!">

                <div className="form-row mb-4">

                    <div className="text-center border border-light p-5">
                        
                        <p className="h4 mb-4">Sign up</p>
                    <div className="col" style = {{fontFamily: "Century Gothic"}}>
                        <label>First Name</label>
                        <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="First name"/>
                        <br />
                        <label>Last Name</label> 
                        <input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name"/>
                        <br /> 
                        <label>Email</label>
                        <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail"/>
                        
                        <label>Password</label>
                        <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
                        <br /> 
                        <label>Phone Number</label>
                        <input type="text" id="defaultRegisterPhonePassword" className="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock"/>
                        <br /> 
                    </div>
                     
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="defaultRegisterFormNewsletter"/>
                        <label className="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
                    </div>
                    <br />  
                    <button className="btn btn-deep-orange darken-4 btn-block" type="submit">Sign in</button>
                    
                    <hr/>

                    <p>By clicking
                        <em> Sign up</em> you agree to our
                        <a href="" target="_blank"> terms of service</a>
                    </p>
                    </div>
                </div>

            </form>

            )
        }
    }
