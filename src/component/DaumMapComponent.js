import React, { Component } from "react";
import "./DaumMapComponent.css";
import loadDaummap from "../util/daummap";

export default class DaumMapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      succese: false
    };
  }

  componentDidMount() {
    loadDaummap();
  }

  render() {
    return <div id="map" />;
  }
}
