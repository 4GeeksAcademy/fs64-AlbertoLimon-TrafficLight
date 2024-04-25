//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle


//import your own components

import TrafficLight from "./component/trafficlight.jsx";

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
