import React, { Component } from "react";
import "./DaumMapComponent.css";
import axios from "axios";

export default class DaumMapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    var container = document.getElementById("map");
    var options = {
      center: new window.daum.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    new window.daum.maps.Map(container, options);
  };

  // makeMap = () => {
  //   var container = document.getElementById("map");
  //   var options = {
  //     center: new window.daum.maps.LatLng(33.450701, 126.570667),
  //     level: 3
  //   };
  //   new window.daum.maps.Map(container, options);
  // };

  render() {
    return <div id="map" />;
  }
}
