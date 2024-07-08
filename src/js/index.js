//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

import TrafficLight from "./component/trafficlight.jsx";

//import your own components

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<TrafficLight/>);

