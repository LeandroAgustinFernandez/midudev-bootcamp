import "./App.css";
import Message from "./Message.js";
import Description from "./Description.js";

function App() {
  // const mensaje = "Retornando un mensaje desde la variable";
  return (
    <div className="App">
      <p>Siempre se deben cerrar las etiquetas</p>
      <br />
      <Message color='red' message='Estamos trabajando'/>
      <Message color='yellow' message='En un curso'/>
      <Message color='blue' message='De react'/>
      {/* <h2>{mensaje + " con concatenacion"}</h2> */}
      <Description />
    </div>
  );
}
// OTRA FORMA VALIDA DE CREAR LA FUNCION.
// const App = () => {
//   return (
//     <div className="App">
//       <h1>Hola Mundo</h1>
//     </div>
//   );
// };

export default App;
