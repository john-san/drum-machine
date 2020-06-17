import React from 'react';
import { Container, Row, Col, Button, Form  } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container id="drum-machine">
      <h1 className="text-center">Drum Machine</h1>
      <Row>
        <Col xs={{span: 12}} md={{span: 6}} className="pad-bank">
          <Row>
            <Button variant="outline-secondary" className="drum-pad">Q</Button> 
            <Button variant="outline-secondary" className="drum-pad">W</Button>
            <Button variant="outline-secondary" className="drum-pad">E</Button>
          </Row>
          <Row>
            <Button variant="outline-secondary" className="drum-pad">A</Button> 
            <Button variant="outline-secondary" className="drum-pad">S</Button>
            <Button variant="outline-secondary" className="drum-pad">D</Button>
          </Row>
          <Row>
            <Button variant="outline-secondary" className="drum-pad">Z</Button> 
            <Button variant="outline-secondary" className="drum-pad">X</Button>
            <Button variant="outline-secondary" className="drum-pad">C</Button>
          </Row>
        </Col>
        <Col xs={{span: 12}} md={{span: 6}} className="controls-container">
          <Row>
            <Form.Check 
              type="switch"
              id="power-switch"
              label="Power"
            />
          </Row>
          <Row>
            <div id="sound-name">
              <span>Sound Name</span>
            </div>
          </Row>
          <Row>
            <Form.Group controlId="formBasicRangeCustom">
              <Form.Label>Volume</Form.Label>
              <Form.Control type="range" custom />
            </Form.Group>
          </Row>
          <Row>
            <Form.Check 
              type="switch"
              id="bank-switch"
              label="Bank"
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
