import { useState } from "react";

function Form({ onAgregarCancion }) {
  const [artista, setArtista] = useState("");
  const [nombre, setNombre] = useState("");
  const [nombreCancion, setNombreCancion] = useState("");
  const [error, setError] = useState('');
  const [tituloLista, setTituloLista] = useState("");

  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangeCancion = (e) => setNombreCancion(e.target.value);
  const onChangeArtista = (e) => setArtista(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let validarLongitudNombre = /^.{3,}$/;

    let validarLongitudNombreCancion = /^.{6,}$/;

    let validarEspacioEnBlanco = /^[^\s].*$/;

    if (
      validarEspacioEnBlanco.test(nombre) &&
      validarLongitudNombre.test(nombre) &&
      validarEspacioEnBlanco.test(artista) &&
      validarLongitudNombre.test(artista) &&
      validarEspacioEnBlanco.test(nombreCancion) &&
      validarLongitudNombreCancion.test(nombreCancion)
    ) {
      onAgregarCancion({ artista, nombreCancion });
      setTituloLista(`Tu lista de reproducción ${nombre} ↓`);
      setNombreCancion("");
      setArtista("");
      setError("");
    } else {
      setError("Por favor chequea que la información sea correcta");
      setNombreCancion("");
      setNombre("");
      setArtista("");
    }
  };

  return (
    <>
      <div className="input-nombre">
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={onChangeNombre}
        />
      </div>

      <div className="form-align">
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Artista"
            value={artista}
            onChange={onChangeArtista}
          />
          <input
            type="text"
            placeholder="Canción"
            value={nombreCancion}
            onChange={onChangeCancion}
          />

          <button type="submit"> Crear </button>
          <p className="error">{error}</p>
        </form>
      </div>
      <h3> {tituloLista} </h3>
    </>
  );
}

export default Form;
