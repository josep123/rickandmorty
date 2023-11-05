import React from 'react';
import {Row, Col} from 'react-bootstrap';
import logo from '../../media/logo.png';
import MenuCanvas from '../menuCanvas';




function Header(){


    return(
        <Row className="header">
            <Col xs={12} md={9} lg={9}>
            <p className="logoSup"><a href="/"> <img className="logo" src={logo} alt="Logo" /></a></p>
            </Col>
            
            <Col xs={12} md={3} lg={3}>
            <MenuCanvas />
            </Col>

       </Row>

    )

}

export default Header;