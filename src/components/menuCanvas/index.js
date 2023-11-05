import React, { useState} from "react";
import {Offcanvas, Button} from 'react-bootstrap';




function MenuCanvas() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <div>
       <Button variant="primary" onClick={handleShow} className="botonMenu">
       DISCOVER
        </Button>

      <Offcanvas show={show} onHide={handleClose} className="navBar">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>MENU</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body><ul>
           <a href="/location"><li className="buttonNav">Choose by location</li></a>
           <a href="/character"><li className="buttonNav">Choose by Characters</li></a>           
           <a href="/episode"><li className="buttonNav">Choose by episode</li></a>
           </ul>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    )
}

export default MenuCanvas;