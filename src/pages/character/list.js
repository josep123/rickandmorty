import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Table, Row, Col} from 'react-bootstrap';

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
    <div className="characterTable">
         <Row className="ficha">   
            <Col xs={12} md={12} lg={6}>
                <div className="picFicha">
               <center> <img src={results.image} alt={results.name} height="450px" /></center></div>
            
            </Col>
            <Col xs={12} md={12} lg={6}>

            <div className="fichaRight">
                    <p className="titleFicha">Name:</p>
                    <p>{results.name}</p>
                    <p className="titleFicha">Status:</p>
                    <p>{results.status}</p>
                    <p className="titleFicha">Species:</p>
                    <p>{results.species}</p>
                    <p className="titleFicha">Gender:</p>
                    <p>{results.gender}</p>
                    <p className="titleFicha">Origin:</p>
                    {results.origin && results.origin.name ? (
                        <p>{results.origin.name}</p>
                    ) : (
                        <p>-</p>
                    )}
                    <p className="titleFicha">Location:</p>
                    {results.location && results.location.name ? (
                        <p>{results.location.name}</p>
                    ) : (
                        <p>-</p>
                    )}


                </div>
            
            </Col>


        </Row>
        <Col>

        </Col>
        <Col>
        </Col>


    </div>
  );
}

export default Character;
