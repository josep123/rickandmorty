import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';






function Home() {
  return (
    <div>
      <Row>
        <h1 className="titles"> - <span className="whiteTitle">Rick & Morty API</span> - </h1>
        <p className="descriptionHome">Are you a fan of Rick and Morty? Now you can discover everything about the show's locations, characters, and episodes.</p>
        <p className="buttonDown"><a href="#services"><Button variant="primary"className="botonMenu">v</Button></a></p>
      </Row>

      <Row className="services" id="services">
          <h2 className="subtitleHome">Which one do you choose?</h2>
      <Col xs={12} md={12} lg={4} className="bYellow">
        <a href="/location" className="textBlack"> <p>Location</p>
        <p className="buttonArrow">→</p></a>
       </Col>

       <Col xs={12} md={12} lg={4} className="bGrey">
       <a href="/character" className="textWhite"> <p>Characters</p>
        <p className="buttonArrowYellow">→</p></a>
       </Col> 

       <Col xs={12} md={12} lg={4}  className="bYellow">
     <a href="/episode" className="textBlack">  <p>Episode</p>
        <p className="buttonArrow">→</p></a>
       </Col>
      </Row>



    


   
   
    </div>
  );
}

export default Home;
