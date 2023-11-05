import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Table, Row, Col} from 'react-bootstrap';
import FeedCharacters from '../../components/feedCharacters';

function Character() {
  const { id } = useParams(); // Obtén la 'id' dinámica desde la URL

  const [results, setResults] = useState([]);

  useEffect(() => {
    // Utiliza la 'id' en la solicitud a la API
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data); // Actualiza los resultados del personaje
      })
      .catch((error) => console.log(error));
  }, [id]); // Asegúrate de incluir 'id' como dependencia

  return (
    <div>
      <FeedCharacters />
    </div>
  );
}

export default Character;
