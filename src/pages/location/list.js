import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';



function LocationList() {

    const { id } = useParams(); // Obtén la 'id' dinámica desde la URL

    const [results, setResults] = useState([]);
    
    useEffect(() => {
      // Utiliza la 'id' en la solicitud a la API
      fetch(`https://rickandmortyapi.com/api/location/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data); // Actualiza los resultados del personaje
        })
        .catch((error) => console.log(error));
    }, [id]); // Asegúrate de incluir 'id' como dependencia

    const residents = results.residents;

    const characterImageElements = [];


    if (results.residents) {
   


    residents.forEach((residentURL) => {
        const parts = residentURL.split('/');
        const characterId = parts[parts.length - 1];
        const characterImageUrl = `https://rickandmortyapi.com/api/character/avatar/${characterId}.jpeg`;
      
        const imgElement = <a href={`/character/${characterId}`}><img key={characterId} src={characterImageUrl} alt={`Character ${characterId}`} /></a>;
        characterImageElements.push(imgElement);
      }); } else {
          console.log("No hay residentes")
      }
    
    
        return(
            
    <div className="characterTable">
            <Row className="ficha"> 
                <Col xs={12} md={12} lg={6}>
                 <p className="titlePrincipalFicha">Location: {results.name}</p>
            </Col>
                <Col xs={12} md={12} lg={6}>
    
                    <div className="fichaRight">

                        <p className="titleFicha">Type:</p>
                        <p>{results.type}</p>
                        <p className="titleFicha">Dimension:</p>
                        <p>{results.dimension}</p>
                      
    
                    </div>
                
                </Col>

    
    
            </Row>


            <Row className="feedLocation">
                <h1 className="titlePrincipalFicha">Characters of location</h1>
                {characterImageElements.map((imgElement, index) => (
                <Col key={index} xs={12} md={6} lg={3}>
                {imgElement}
                </Col>
      ))}


    
            </Row>
             
    
            </div>
        )
    }
    
export default LocationList;