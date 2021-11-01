import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


class GoogleMap extends Component {
  constructor(props){
    super(props);
    this.state={
        center: {lat: 35.748237, lng: 51.449814},
        zoom: 17
    }
  }

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.state.center}
        defaultZoom={this.state.zoom}
        style={{width:'400' , height: '300px'}}
      >
      </GoogleMapReact>
    );
  }
}

export default GoogleMap;