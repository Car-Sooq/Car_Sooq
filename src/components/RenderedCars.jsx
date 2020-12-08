import React, { Component } from 'react';
// import $ from "jquery";

  // render cars in stock, remove and uncomment
  //from filtersHandler if it doesn't work here
  
  //const list = (props) => (
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
  
export default class List extends React.Component {
    constructor(props) {
      super(props);
    }
  
    //rendering cars in stock and their info
    render() {
      return (
        <div>
          Rendered Cars Go in Here
        </div>
        // <Grid container item key={this.props.car.id} xs={4}>
        //   <Card>
        //     <CardActionArea>
        //       <CardMedia
        //         component="img"
        //         alt="imageee"
        //         height="200"
        //         image={this.props.car.image}
        //         title="imageee"
        //       />
        //       <CardContent>
        //         <Typography variant="h5" component="h2">
        //           {this.props.car.brand} {" $"}
        //           {this.props.car.price}
        //         </Typography>
        //         <Typography variant="body2" color="textSecondary" component="p">
        //           {this.props.car.description} {". External body colour :"}
        //           {this.props.car.colour}
        //         </Typography>
        //       </CardContent>
        //     </CardActionArea>
        //   </Card>
        // </Grid>
      );
    }
  }
  