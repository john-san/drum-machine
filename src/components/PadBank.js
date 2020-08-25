import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import DrumButton from './DrumButton';

export default class PadBank extends Component {
  
  playAudio = (url) => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.src = url;
    audioEl.play();
  }

  render() {
    const bankOne = [
      {
        letter: "Q",
        sound: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      },
      {
        letter: "W",
        sound: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
      },
      {
        letter: "E",
        sound: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      },
      {
        letter: "A",
        sound: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      },
      {
        letter: "S",
        sound: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      },
      {
        letter: "D",
        sound: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      },
      {
        letter: "Z",
        sound: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      },
      {
        letter: "X",
        sound: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      },
      {
        letter: "C",
        sound: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      }
    ];
    return (

        <Col xs={{span: 12}} md={{span: 6}} className="pad-bank">
          <Row>
          {
            bankOne.map(item => {
              return (
                <Col xs={{span: 4}} className="mt-3">
                  <DrumButton 
                    letter={item.letter} 
                    sound={item.sound} 
                    url={item.url}
                    playAudio={this.playAudio}
                  />
                </Col>
              )
            })
          }
          </Row>
          <audio className="audio-element">
            <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
          </audio>
        </Col>
    );
  }
  
}