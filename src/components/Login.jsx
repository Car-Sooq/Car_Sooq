import React, { Component } from 'react';
import $ from "jquery";
// import { Link } from 'react-router-dom';
// import axios from 'axios';

let formUsernameIsValid = false;
let formPasswordIsValid = false;

export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = { username: "", password: "" };
    }
  
    //method to prevent users from login if they didn't write their username
    handleUsername(event) {
      this.setState({ username: event.target.value });
      if (this.state.username !== undefined) formUsernameIsValid = true;
    }
  
    //method to prevent users from login if they didn't write their password
    handlePassword(event) {
      this.setState({ password: event.target.value });
      if (this.state.password !== undefined) formPasswordIsValid = true;
    }
  
    //getting (retrieving) user's data from the server (token)
    loginHandler(token) {
      $.ajax({
        url: "/posts",
        method: "GET",
        data: { token },
        contentType: "application/json",
        success: function (data) {
          console.log("get req/login sent successfully!");
          if (formUsernameIsValid && formPasswordIsValid) {
            window.location = "http://localhost:3000/profile";
          }
        },
        error: function (err) {
          console.log(err, "get req/login failed!");
        },
      });
    }
  
    //send user's data along with the request to the server where we can verify users ans store tokens in their local storage
    handleClick() {
      var cred = { username: this.state.username, password: this.state.password };
      var that = this;
      $.ajax({
        url: "/login",
        method: "POST",
        data: JSON.stringify(cred),
        contentType: "application/json",
        success: function (data) {
          console.log("POST req/handleClick sent successfully!");
          localStorage.setItem("token", data);
          that.loginHandler(data);
        },
        error: function (err) {
          console.log(err, "POST req/handleClick failed!");
        },
      });
    }
  
    //render the login form
    render() {
      return (
        <div>
        <br />
        
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                  <img
                    src="https://scontent.famm5-1.fna.fbcdn.net/v/t1.0-9/128255422_227091088758997_7058702321390752154_n.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_eui2=AeEqFQYaN_ad4f9gK-R_00w0xeq3jpBC8OPF6reOkELw4wT-RH0yveh5W6rCgR4sTojyscWbVB4AC485fRaU9tmG&_nc_ohc=ige5aDJwuj0AX_nHzs2&_nc_oc=AQmh70KqaJc_XuRjsXfrEZ2TFCRNhUgAlWxjabqZ2UOrLvolXf7W1N34wTttPuSPf14&_nc_ht=scontent.famm5-1.fna&oh=aaea198d1eb4f019d2c150895411b2c1&oe=5FE68806"
                    width="150"
                    height="70"/>
                </div>

                <form className="text-center border">

                <h3> Login </h3>

                    <br />

                        <input
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Username"
                            placeholder = "Please enter username"
                            autoFocus
                            value={this.state.username}
                            onChange={this.handleUsername.bind(this)}
                        />
                    <br /><br />
                        <input
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            placeholder = "Please enter password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handlePassword.bind(this)}
                        />

                        <br /><br />
                        {/* <Link href="/signup">
                            {" "}
                        </Link> */}
                        <button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={this.handleClick.bind(this)}>
                            Log In
                        </button> 
                        <br></br>
                </form>
          </div>

      );
    }
  }

//   render() {
//     return (
//       <div>
//         <br />
//         <div className = "container">
       
//           <form className="text-center border border-light p-9" action="#!" onSubmit = {this.onSubmit} >

//             <h3> "Only by giving are you able to receive more than you already have." -Jim Rohn </h3>

//             <p className="h4 mb-4">Donate Your Item</p>

//                 <div className="col">
//                 <label>Item Name</label>
//                 <input 
//                 required="true"
//                   type = "text" 
//                   className = "form-control" 
//                   value = {this.state.itemName} 
//                   onChange = {this.onChangeItemName}
//                   text-align = "center"
//                   placeholder = "Insert Item Name"/>
//                 </div>

//                 <br />

//                 <div className="col">
//                   <label>Select Category  </label>
//                   <select
//                     ref = "userInput"
//                     required="true"
//                     className = "form-control"
//                     value = {this.state.category}
//                     onChange = {this.onChangeCategory}
//                     >
//                     <option value = "Women">Women</option>
//                     <option value = "Men">Men</option>
//                     <option value = "Kids">Kids</option>
//                   </select>
//                 </div>

//                 <br />

//                 <div className = "col">
//                   <label>Select Type  </label>
//                   <select
//                     ref = "userInput"
//                     required="true"
//                     className = "form-control"
//                     value = {this.state.type}
//                     onChange = {this.onChangetype}
//                     >
//                     <option value = "Shoes">Shoes</option>
//                     <option value = "Dress">Dress</option>
//                     <option value = "Jacket">Jacket</option>
//                     <option value = "Blouse">Blouse</option>
//                     <option value = "Gloves">Gloves</option>
//                     <option value = "Hat">Hat</option>
//                     <option value = "Scarf">Scarf</option>

//                   </select>
//                 </div> 

//                 <br />

//                 <div className = "col">
//                   <label>Description  </label>
//                   <input 
//                     type = "text" 
//                     required="true"
//                     className = "form-control" 
//                     value = {this.state.description} 
//                     onChange = {this.onChangeDescription}
//                     placeholder = "Please insert a description of your item and add its current condition"/>
//                 </div>

//                 <br />
                
//                 <div className = "col">
//                     <label>Add Image as URL</label>
//                     <input 
//                       type = "text" 
//                       required="true"
//                       className = "form-control" 
//                       value = {this.state.image} 
//                       onChange = {this.onChangeimg}/>
//                   </div>  

//                   <br />

//                 <div>
//                 <button type="submit" value = "Submit" className="btn btn-deep-orange darken-4">Submit</button>
//                 </div>

//           </form>
//         </div>
//         <Footer />
//       </div>
        
//     )
//   }
// }
