import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PadBank from './components/PadBank';
import ControlsContainer from './components/ControlsContainer';

export default function App() {

  return (
      <>
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
        <p id="byLine" className="text-center mt-3">Created by <a href="https://github.com/john-san" target="_blank" rel="noopener noreferrer">John Nguyen</a></p>
      </>
  );

}
