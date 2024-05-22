
import ReactDOM from "react-dom";

import React, { useEffect, useState } from "react";
import "../../styles/trafficlight.css";

const Light = ({}) => {

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

        <div className={`luces-semaforo rojo ${selected === "rojo" ? "encendido" : ""}`}
              onClick={() => setSelected("rojo")}>

        </div>

  );
};

export default Light;