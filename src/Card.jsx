function Card({ canciones }) {
  return (
    <>
      {canciones.map((cancion, index) => (
        <div key={index} className="card">
          <h4>Artista: {cancion.artista}</h4>
          <p> Canción: {cancion.nombreCancion}</p>
        </div>
      ))}
    </>
  );
}

export default Card;
