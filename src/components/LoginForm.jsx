import React, { Component } from 'react';

export default class LoginForm extends Component {
    render() {
        return(
            
            <form className="d-flex justify-content-center align-items-center text-center border border-light p-5 " action="#!">

                <div className="form-row mb-4">

                    <div className="text-center border border-light p-5">
                        
                        <p className="h4 mb-4">Login</p>
                    <div className="col" style = {{fontFamily: "Century Gothic"}}>

                        <label>Email</label>
                        <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail"/>

                        <label>Password</label>
                        <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
                        
                        <br /> 
                    </div>
                     
                    <button className="btn btn-deep-orange darken-4 btn-block" type="submit">Sign in</button>
                    <br />
                    <p>Don't have an account? <a href='/signup'> Sign Up</a></p>

                    </div>
                </div>

            </form>

            )
        }
    }
