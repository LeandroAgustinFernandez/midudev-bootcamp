import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const App = () => {
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);
  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    mensaje: "Mensaje del estado",
  });
  const handelClickLeft = () => {
    setCounters({
      ...counters, //Recupero todos los estados previos para no perderlos en el renderizado.
      left: counters.left + 1,
    });
  };
  const handelClickRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1,
    });
  };
  return (
    <div>
      <h1>Probando como funcionan los estados (Parte 2)</h1>
      {counters.left}
      <button onClick={handelClickLeft}>Left</button>
      <button onClick={handelClickRight}>Right</button>
      {counters.right}
      <p>Cantidad de clicks dados: {counters.left + counters.right}</p>
      <p>{counters.mensaje}</p>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
