import React from 'react';
import { Container, Row, Col  } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Drum Machine</h1>
      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <Row>Q W E</Row>
            <Row>A S D</Row>
            <Row>Z X C</Row>
          </Col>
          <Col xs={12} sm={6}>
            <Row>Power Toggle</Row>
            <Row>Sound Name</Row>
            <Row>Sound Dial</Row>
            <Row>Bank Toggle</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
