
import ReactDOM from "react-dom";

import React, { useEffect, useState } from "react";
import "../../styles/trafficlight.css";

const TrafficLight = () => {

  //hook useState
  const [selected, setSelected] = useState("rojo");
  const [active, setActive] = useState(false);


  useEffect(() => {
    
    if(active){
      const interval = setInterval(() => {
        if(selected == "rojo"){
          setSelected("amarillo")
        }else if(selected == "amarillo"){
          setSelected("verde")
        }else if(selected == "verde"){
          setSelected("rojo")
        }
         
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [active, selected]);
  
  return (
    <div className="container">
      <h1>Traffic Light</h1>
      <div className="semaforo">
        <div className={`luces-semaforo rojo ${selected === "rojo" ? "encendido" : ""}`}
              onClick={() => setSelected("rojo")}>

        </div>
        <div className={`luces-semaforo amarillo ${selected === "amarillo" ? "encendido" : ""}`}
              onClick={() => setSelected("amarillo")}>
          
        </div>
        <div className={`luces-semaforo verde ${selected === "verde" ? "encendido" : ""}`}
              onClick={() => setSelected("verde")}>
          
        </div>
      </div>
      <button className="btn btn-success mt-3" onClick={() => setActive(!active)}>Activar</button>
    </div>
  );
};

export default TrafficLight;