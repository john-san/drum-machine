import React from 'react';
import { Button } from 'react-bootstrap';
import DrumMachineContext from '../DrumMachineContext';

export default function DrumButton(props) {
  return (
    <DrumMachineContext.Consumer>
      {({updateSoundName}) => (
        <Button
          variant="outline-secondary"
          className="drum-pad"  
          id={props.sound}
          onClick={() => {
            updateSoundName(props.sound);
            props.playAudio(props.url);
          }}
        >
          { props.letter }
        </Button>
      )}
     
    </DrumMachineContext.Consumer>
  )
}