
import ReactDOM from "react-dom";

import React, { useEffect, useState } from "react";
import "../../styles/trafficlight.css";

const TrafficLight = () => {

  const [currentColor, setCurrentColor] = useState("red");
  const [selected, setSelected] = useState("true");

  function handleLight(color){
    setCurrentColor(color);
    setSelected(true);
  }
 
  return (
    <div className="container" id="app">
      <h1>Traffic Light</h1>
      <div className="semaforo">
        <div className="luces-circulo rojo" onClick={handleLight()}>

        </div>
        <div className="luces-circulo amarillo">
          
        </div>
        <div className="luces-circulo verde">
          
        </div>
      </div>
    </div>
  );
};

export default TrafficLight;