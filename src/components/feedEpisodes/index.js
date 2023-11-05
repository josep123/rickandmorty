import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

function FeedEpisodes() {
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/?page=${currentPage}`)
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
    <Row className="justify-content-md-left">

    </Row>

    <h2 className="titles">
      - <span className="whiteTitle">Select Episode</span> -
    </h2>

    <Row className="feedLocation">
        {results.map((episode) => (
          <Col xs={12} md={6} lg={3} key={episode.id}>
            <a href={`/episode/${episode.id}`}>
              <div className="card">
                <p className="titleType">{episode.episode}</p>
                <p>{episode.name}</p>
              </div>
            </a>
          </Col>
        ))}
      </Row>

      <Row className="justify-content-md-left">
        <Col>
          <Button className="botonMenu" onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous Page
          </Button>
          <Button className="botonMenu" onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next Page
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default FeedEpisodes;
