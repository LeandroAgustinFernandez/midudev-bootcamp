import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

const Counter = ({ number }) => {
  return <h2>{number}</h2>;
};

const Type = ({ number }) => {
  const isEven = number % 2 === 0 ? "Es par" : "Es impar";
  return <h3>{isEven}</h3>;
};

const ButtonType = ({ functionClick, type, text }) => {
  return (
    <button onClick={functionClick} data-type={type}>
      {text}
    </button>
  );
};

const App = (props) => {
  const [state, updateState] = useState(0); // Forma corta de declararlo
  // const contadorInicial = useState(0);
  // const contadorValue = contadorInicial[0];
  // const updateContador = contadorInicial[1]; //devuelve un metodo para actualizr el estado.

  const handelClick = (e) => {
    let type = e.target.dataset.type;
    if (type === "reset") {
      updateState(0);
      return;
    }
    type === "+" ? updateState(state + 1) : updateState(state - 1);
    // updateState((prevState) => {
    //   return prevState + 1;
    // });
  };
  return (
    <div>
      <h1>Probando como funcionan los estados</h1>
      <Counter number={state} />
      <Type number={state} />

      <br />
      <ButtonType functionClick={handelClick} type="+" text="Incrementar" />
      <ButtonType functionClick={handelClick} type="-" text="Decrementar" />
      <ButtonType functionClick={handelClick} type="reset" text="Reset" />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App contadorInicial={5} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
