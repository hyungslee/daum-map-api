// import React from "react";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import App from "./App";
import axios from "axios";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    axios
      .get(
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=b49bcb6b071ad1408bb3e00bec24a565"
      )
      .then(res => {
        var container = document.getElementById("map");
        var options = {
          center: new res.daum.maps.LatLng(33.450701, 126.570667),
          level: 3
        };
        new res.daum.maps.Map(container, options);
      });
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
