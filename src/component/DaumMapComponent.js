import React, { Component } from "react";
import "./DaumMapComponent.css";

export default class DaumMapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("디드마운트");

    const container = document.getElementById("map");
    const options = {
      center: new window.daum.maps.LatLng(
        this.props.position.lat,
        this.props.position.lng
      ),
      zoom: this.props.zoom
    };

    new window.daum.maps.Map(container, options);
  }

  render() {
    console.log(this.props.position.lat);
    console.log("이것이 맵이다");
    return <div id="map" />;
  }
}
