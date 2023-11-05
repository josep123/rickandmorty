import React from 'react';
import {Row} from 'react-bootstrap';
import logo from '../../media/logo.png';
import MenuCanvas from '../menuCanvas';




function Header(){


    return(
        <Row>
        <a href="/"> <img src={logo} alt="Logo" /></a>
        <MenuCanvas />
       </Row>

    )

}

export default Header;