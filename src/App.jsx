import { useState } from "react";
import Card from "./Card";
import Form from "./Form";
import "./App.css";

function App() {
  const [canciones, setCanciones] = useState([]);

  const agregarCancion = (cancion) => {
    setCanciones([...canciones, cancion]);
  };

  return (
    <div className="app">
      <h1>
        Armá una playlist con<br></br> tus canciones favoritas
      </h1>

      <Form onAgregarCancion={agregarCancion} />

      <div className="align-cards">
        <Card canciones={canciones} />
      </div>
    </div>
  );
}

export default App;
