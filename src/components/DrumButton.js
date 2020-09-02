import React from 'react';
import { Button } from 'react-bootstrap';
import DrumMachineContext from '../DrumMachineContext';

export default function DrumButton(props) {
  return (
    <DrumMachineContext.Consumer>
      {({ power, updateSoundName }) => (
        <Button
          variant="outline-secondary"
          className="drum-pad"  
          id={props.sound}
          onClick={() => {
            if (power) { // only play if power is on
              updateSoundName(props.sound);
              props.playAudio(props.url);
            }
          }}
          // onKeyDown={(e) => console.log(e)}
        >
          { props.letter }
        </Button>
      )}
     
    </DrumMachineContext.Consumer>
  )
}