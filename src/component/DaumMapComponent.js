import React, { Component } from "react";
import "./DaumMapComponent.css";

export default class DaumMapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const container = document.getElementById("map");
    new window.daum.maps.Map(container, {
      center: new window.daum.maps.LatLng(33.450701, 126.570667),
      zoom: "3"
    });
  };

  render() {
    console.log("이것이 맵이다");
    return <div id="map" />;
  }
}
