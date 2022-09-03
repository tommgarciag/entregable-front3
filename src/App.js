// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import "./index.css";
import { useState } from "react";
import Cabecera from "./Cabecera";
import Listado from "./Listado";

function App() {
  const [count, setCount] = useState(0);

  function comprar() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <Cabecera cantProductos={count} />
      <Listado onComprar={comprar} />
      <footer>Digital House - Frontend 3 | 2022 &copy; Realizado por Tomás Ignacio García</footer>
    </div>
  );
}

export default App;
