import React, { Component } from 'react';
import Slideshow from './Carousel';
import { MDBContainer, MDBFooter } from "mdbreact";


export default class Homepage extends Component {
    render() {
        return (
            
        <div>
            {/* <h3>Welcome to CarSooq</h3> */}
            <Slideshow />
            <MDBFooter>
          <MDBContainer fluid className = "footer-copyright text-center py-3 bg-#1c2a48 mdb-color darken-3 ">
            &copy; {new Date().getFullYear()} Car Sooq - All Rights Reserved
          </MDBContainer>
        </MDBFooter>
        </div>

        )
    }
};
  