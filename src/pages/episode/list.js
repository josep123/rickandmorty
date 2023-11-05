import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';




function EpisodeList() {

    const { id } = useParams(); // Obtén la 'id' dinámica desde la URL

const [results, setResults] = useState([]);

useEffect(() => {
  // Utiliza la 'id' en la solicitud a la API
  fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setResults(data); // Actualiza los resultados del personaje
    })
    .catch((error) => console.log(error));
}, [id]); 

const characters = results.characters;

const characterImageElements = [];


if (results.characters) {


characters.forEach((characterURL) => {
    const parts = characterURL.split('/');
    const characterId = parts[parts.length - 1];
    const characterImageUrl = `https://rickandmortyapi.com/api/character/avatar/${characterId}.jpeg`;
  
    const imgElement = <a href={`/character/${characterId}`}><img key={characterId} src={characterImageUrl} alt={`Character ${characterId}`} /></a>;
    characterImageElements.push(imgElement);
  }); } else {
      console.log("No hay personajes")
  }



    return(
        
<div className="characterTable">
        <Row className="ficha">  
            <Col xs={12} md={12} lg={6} className="ficha">
            <p className="titlePrincipalFicha">Episode: {results.name}</p>
            </Col>
            <Col xs={12} md={12} lg={6}>

                <div className="fichaRight">
        
                    <p className="titleFicha">Air date:</p>
                    <p>{results.air_date}</p>
                    <p className="titleFicha">Episode:</p>
                    <p>{results.episode}</p>
                  

                </div>
            
            </Col>


        </Row>


        <Row className="feedLocation">
                <h1 className="titlePrincipalFicha">Characters of episode</h1>
                {characterImageElements.map((imgElement, index) => (
                <Col key={index} xs={12} md={6} lg={3} >
                {imgElement}
                </Col>
      ))}

        </Row>
         

        </div>
    )
}

export default EpisodeList;