import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

function FeedCharacters() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (searchText) {
      fetch(`https://rickandmortyapi.com/api/character/?name=${searchText}&page=${currentPage}`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data.results);
          setTotalPages(data.info.pages);
        })
        .catch((error) => console.log(error));
    } else {
      fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data.results);
          setTotalPages(data.info.pages);
        })
        .catch((error) => console.log(error));
    }
  }, [searchText, currentPage]);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Row className="justify-content-md-left">
       
      </Row>
        
      <h2 className="titles">
        - <span className="whiteTitle">Select your character</span> -
      </h2>

      <Row>
         <center> <input
            type="text"
            placeholder="Choose your favourite Character"
            className="Buscador"
            value={searchText}
            onChange={handleInputChange}
          />
         </center>
        </Row>
      
       <Row className="feedlocation">
        {results.map((character) => (
          <Col xs={12} md={6} lg={3} key={character.id}>
            <a href={`/character/${character.id}`}>
              <div className="card">
                <img src={character.image} alt={character.name} />
                <p>
                  <div className="StatusGreen"> </div>
                  {character.name}
                </p>
              </div>
            </a>
          </Col>
        ))}
      </Row>
      <Row className="botonsBottom">
          <Col>
         <p className="botonLeft"> <Button className="botonMenu" onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous Page
          </Button></p>
        </Col>
          <Col></Col>
          <Col>
         <p className="botonRight"> <Button className="botonMenu" onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next Page
          </Button></p>
          </Col>


      </Row>
      
          
    </div>
  );
}

export default FeedCharacters;
