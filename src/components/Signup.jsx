import React, { Component } from 'react';
import $ from "jquery";

export default class Signup extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
      };
      this.onChangeHandle = this.onChangeHandle.bind(this);
      this.submitHandle = this.submitHandle.bind(this);
    }
    onChangeHandle(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
    submitHandle(firstName, lastName, username, email, password) {
      console.log(this.state.firstName, this.state.lastName);
      var info = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      };
      if (
        info.firstName == "" ||
        info.lastName == "" ||
        info.username == "" ||
        info.email == ""
      ) {
        alert("Please fill in a valid value for all required fields!");
      }
      if (0 < info.password.length && info.password.length < 8) {
        alert("Your password is too short, try to make it 8 chars or more!");
      } else {
        // for hashing the password
        $.ajax({
          url: "/users",
          method: "POST",
          data: JSON.stringify(info),
          contentType: "application/json",
          success: (user) => {
            // if hashing succeded the save the users data
            console.log(user, "hashing successeded from clientside");
            $.ajax({
              url: "/signup",
              method: "POST",
              data: JSON.stringify(user),
              contentType: "application/json",
              success: (data) => {
                console.log(data, "post method successeded ");
                window.location = "http://localhost:3000/login";
              },
              error: (err) => {
                console.log(err, "post method failed");
              },
            });
          },
          error: (err) => {
            console.log(err, "hashing failed");
          },
        });
      }
    }
  
    //render the signup form
    render() {
      return (
          <div>
            <br />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                      
                  <img
                    src="https://scontent.famm5-1.fna.fbcdn.net/v/t1.0-9/128255422_227091088758997_7058702321390752154_n.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_eui2=AeEqFQYaN_ad4f9gK-R_00w0xeq3jpBC8OPF6reOkELw4wT-RH0yveh5W6rCgR4sTojyscWbVB4AC485fRaU9tmG&_nc_ohc=ige5aDJwuj0AX_nHzs2&_nc_oc=AQmh70KqaJc_XuRjsXfrEZ2TFCRNhUgAlWxjabqZ2UOrLvolXf7W1N34wTttPuSPf14&_nc_ht=scontent.famm5-1.fna&oh=aaea198d1eb4f019d2c150895411b2c1&oe=5FE68806"
                    width="150"
                    height="70"></img>
                </div>
                <br />
                <form className="text-center border">
                <h3>Sign Up</h3>
                    <input
                      id="outlined-basic"
                      label="First name"
                      placeholder = "First Name"
                      variant="outlined"
                      name="firstName"
                      onChange={this.onChangeHandle}
                    />
                <br /><br />
                    <input
                      id="outlined-basic"
                      label="Last name"
                      placeholder = "Last Name"
                      variant="outlined"
                      name="lastName"
                      onChange={this.onChangeHandle}
                    />
                <br /><br />
                  <input
                    id="outlined-basic"
                    label="Username"
                    placeholder = "Username"
                    variant="outlined"
                    name="username"
                    onChange={this.onChangeHandle}
                  />
                <br /><br />
                  <input
                    id="outlined-basic"
                    label="Email"
                    placeholder = "Email"
                    variant="outlined"
                    name="email"
                    onChange={this.onChangeHandle}
                  />
                <br /><br />
                  <input
                    id="outlined-basic"
                    label="Password"
                    placeholder = "Password"
                    type="password"
                    variant="outlined"
                    name="password"
                    onChange={this.onChangeHandle}
                  />
                <br /><br />
                  <button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={this.submitHandle}>
                    Sign Up
                  </button>
                </form>
          </div>
      );
    }
  }