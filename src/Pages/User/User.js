import React from 'react';
import Accordion  from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';

// import API from "../utils/api"
// import { ListGroup } from "./src/Components/ListGroup/index.js";



    // //   <div className="users-container">
    //     <ListGroup>
    //       <ListGroup.Item>User1</ListGroup.Item>
    //       <ListGroup.Item>User2</ListGroup.Item>
    //       <ListGroup.Item>User3</ListGroup.Item>
    //     </ListGroup>
    //   </div>

    function User() {
        // alert('Online Users');
      
      
      return(
           <Row>
        <Accordion>
        <Card>
        
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
              John Smith
            </Accordion.Toggle>
        
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm available for debate.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
              Phoebe Buffet
            </Accordion.Toggle>
          
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! Maybe next time.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </Row>
      );
    }
  
    
  export default User;