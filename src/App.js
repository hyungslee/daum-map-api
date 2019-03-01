import React, { Component } from "react";
import DaumMapComponent from "./component/DaumMapComponent";
import Marker from "./component/tools/Marker";
import Polygon from "./component/tools/Polygon";
import MapControlPanel from "./component/tools/MapControlPanel";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <h1>App</h1>
        <DaumMapComponent position={{ lat: 37.54841, lng: 126.98068 }} zoom="6">
          <Marker position={{ lat: 37.54841, lng: 126.98068 }} />
          <Marker position={{ lat: 37.55469, lng: 126.97075 }} />
          <Polygon
            path={[
              { lat: 37.54601, lng: 126.97843 },
              { lat: 37.55319, lng: 126.97637 },
              { lat: 37.55428, lng: 126.97253 },
              { lat: 37.54936, lng: 126.97158 },
              { lat: 37.54507, lng: 126.97186 },
              { lat: 37.54043, lng: 126.97319 },
              { lat: 37.54063, lng: 126.97467 },
              { lat: 37.54527, lng: 126.97356 }
            ]}
          />
        </DaumMapComponent>
        <MapControlPanel />
      </React.Fragment>
    );
  }
}
