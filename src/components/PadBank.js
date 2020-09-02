import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import DrumButton from './DrumButton';
import DrumMachineContext from '../DrumMachineContext';
import { bankOne, bankTwo } from '../bankData';

class PadBank extends Component {
  playAudio = (url) => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.src = url;
    audioEl.volume = this.context.soundLevel / 100; // volume = percentage of 100
    audioEl.play();
  }

  render() {

    // render correct bank items depending on bank state
    let bank = this.context.bank ? bankTwo : bankOne;

    return (
      <Col xs={{span: 12}} md={{span: 6}} className="pad-bank">
        <Row>
          {
            bank.bank.map(item => (
                <Col xs={{span: 4}} className="mt-3" key={`${bank.name}-${item.letter}`}>
                  <DrumButton 
                    letter={item.letter} 
                    sound={item.sound} 
                    url={item.url}
                    playAudio={this.playAudio}
                  />
                </Col>
              )
            )
          }
        </Row>
        <audio className="audio-element">
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio>
      </Col>
    );
  }
  
}

PadBank.contextType = DrumMachineContext;

export default PadBank;