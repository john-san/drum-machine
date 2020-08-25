import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PadBank from './components/PadBank';
import ControlsContainer from './components/ControlsContainer';
import './App.css';

function App() {
  return (
    <Container 
      id="drum-machine"
      className="p-3"
    >
      <h1 className="text-center">Drum Machine</h1>
      <Row id="display">
        <PadBank />
        <ControlsContainer />
      </Row>
    </Container>
  );
}

export default App;
