import React, { useRef, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { DrumMachineContext } from '../Store';

export default function DrumButton(props) {
  const { 
    powerSwitch,
    updateSoundName, 
    soundLevel 
  } = useContext(DrumMachineContext);
  let audioRef = useRef(null);

  const handleClick = () => {
    if (powerSwitch) { // only run if powerSwitch is on
      audioRef.current.volume = soundLevel / 100; // volume = percentage of 100
      audioRef.current.play();
      updateSoundName(props.sound);
    }
  }
  
  

  return (
    <>
      <Button
        variant="outline-secondary"
        className="drum-pad"  
        id={ props.letter }
        onClick={handleClick}
      >
        <span>{ props.letter } </span>
      </Button>

      <audio 
        className="audio-element"
        src={ props.url } 
        ref={ audioRef }
      />
      
    </>
  )
}