import React, { Component } from 'react';
import $ from "jquery";

export default class FiltersHandler extends Component {
    constructor(props) {
      super(props);
      this.state = { brand: "", year: "", colour: "", price: "" };
    }
  
    onChangeBrandHandler(event) {
      this.setState(
        {
          brand: event.target.value,
        },
        () => {
          this.props.onSubmit(this.state);
        },
      );
    }
  
    onChangeYearHandler(event) {
      this.setState(
        {
          year: event.target.value,
        },
        () => {
          this.props.onSubmit(this.state);
        },
      );
    }
  
    onChangeColourHandler(event) {
      this.setState(
        {
          colour: event.target.value,
        },
        () => {
          this.props.onSubmit(this.state);
        },
      );
    }
  
    onChangePriceHandler(event) {
      this.setState(
        {
          price: event.target.value,
        },
        () => {
          this.props.onSubmit(this.state);
        },
      );
    }
  
    //search by using filters with the options in stock
    render() {
      return (
        <div>
          <br></br>
          <br></br>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <form variant="filled">
            <input
              htmlFor="filled-age-native-simple"
              style={{ margin: "50px 10px 10px 10px" }}>
              Brand
            </input>
            <select
              style={{ margin: "50px 10px 10px 10px" }}
              native
              value={this.state.value}
              onChange={this.onChangeBrandHandler.bind(this)}
              inputProps={{
                name: "Select brand",
                id: "filled-age-native-simple",
              }}>
              <option aria-label="None" value="" />
              <option value="all">Select All</option>
              <option value="BMW">BMW</option>
              <option value="Ford">Ford</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Dodge">Dodge</option>
            </select>
          </form>{" "}
          <form variant="filled">
            <input
              htmlFor="filled-age-native-simple"
              style={{ margin: "50px 10px 10px 0px" }}>
              Year
            </input>
            <select
              style={{ margin: "50px 10px 10px 0px" }}
              native
              value={this.state.value}
              onChange={this.onChangeYearHandler.bind(this)}
              inputProps={{
                name: "Select year",
                id: "filled-age-native-simple",
              }}>
              <option aria-label="None" value="" />
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2017">2017</option>
              <option value="2020">2020</option>
            </select>
          </form>{" "}
          <form variant="filled">
            <input
              htmlFor="filled-age-native-simple"
              style={{ margin: "50px 10px 10px 0px" }}>
              Colour
            </input>
            <select
              style={{ margin: "50px 10px 10px 0px" }}
              native
              value={this.state.value}
              onChange={this.onChangeColourHandler.bind(this)}
              inputProps={{
                name: "Select colour",
                id: "filled-age-native-simple",
              }}>
              <option aria-label="None" value="" />
              <option value="black">Black</option>
              <option value="gray">Gray</option>
              <option value="white">White</option>
              <option value="blue">Blue</option>
              <option value="orange">Orange</option>
            </select>
          </form>{" "}
          <form variant="filled">
            <input
              htmlFor="filled-age-native-simple"
              style={{ margin: "50px 10px 10px 0px" }}>
              Price
            </input>
            <select
              style={{ margin: "50px 10px 10px 0px" }}
              native
              value={this.state.value}
              onChange={this.onChangePriceHandler.bind(this)}
              inputProps={{
                name: "Select price",
                id: "filled-age-native-simple",
              }}>
              <option aria-label="None" value="" />
              <option value="highestToLowest">Highest to lowest</option>
              <option value="lowestToHighest">Lowest to highest</option>
            </select>
          </form>
          </div>
          {list(this.props)}

        </div>
      );
    }
  }
  
  // render cars in stock
  // const list = (props) => (
  //   <Grid
  //     container
  //     spacing={3}
  //     justify="flex-start"
  //     alignItems="flex-start"
  //     direction="row">
  //     {props.cars.map((car, id) => (
  //       <List key={id} car={car} />
  //     ))}
  //   </Grid>
  // );
  