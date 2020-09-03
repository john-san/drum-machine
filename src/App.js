import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import PadBank from './components/PadBank';
import ControlsContainer from './components/ControlsContainer';
import {DrumMachineContext} from './Store';
import './App.css';

export default function App() {
  const {powerSwitch, bankSwitch} = useContext(DrumMachineContext);

  return (
      <Container 
        id="drum-machine"
        className="p-3"
      >
        <h1 className="text-center">Drum Machine</h1>
        <h2>powerSwitch: {powerSwitch ? "true" : "false" }</h2>
        <h2>bankSwitch: {bankSwitch ? "true" : "false" }</h2>
        <Row id="display">
          <PadBank />
          <ControlsContainer />
        </Row>
      </Container>
  );

}
