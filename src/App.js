import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import PadBank from './components/PadBank';
import ControlsContainer from './components/ControlsContainer';
import DrumMachineContext from './DrumMachineContext';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      bank: false,
      soundName: "",
      soundLevel: 66,
      togglePower: () => {
        this.setState(({ power }) => ({
          power: power === true ? false : true
        }));
      },
      toggleBank: () => {
        this.setState(({ bank }) => ({
          bank: bank === true ? false : true
        }));
      },
      updateSoundName: (soundName) => {
        this.setState({ soundName });
      },
      updateSoundLevel: (soundLevel) => {
        this.setState({ soundLevel });
      }
    }
  }

  render() {
    return (
      <DrumMachineContext.Provider
        value = {this.state}   
      >
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
      </DrumMachineContext.Provider>
    );
  }
}

export default App;
