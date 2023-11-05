import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

function FeedLocation() {
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location/?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
        setTotalPages(data.info.pages);
      })
      .catch((error) => console.log(error));
  }, [currentPage]);

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


      <h2 className="titles">
        - <span className="whiteTitle">Select Location</span> -
      </h2>

      <Row className="feedLocation">
        {results.map((location) => (
          <Col xs={12} md={6} lg={3} key={location.id}>
            <a href={`/location/${location.id}`}>
              <div className="card">
                <p className="titleType">{location.name}</p>
                <p>{location.type}</p>
                <p>{location.dimension}</p>
              </div>
            </a>
          </Col>
        ))}
      </Row>

      <Button className="botonMenu" onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous Page
          </Button>
          <Button className="botonMenu" onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next Page
          </Button>
    </div>
  );
}

export default FeedLocation;
