import React, { useRef, useContext, useCallback, useState } from 'react';
import { Button } from 'react-bootstrap';
import { DrumMachineContext } from '../Store';
import useEventListener from '@use-it/event-listener';

export default function DrumButton(props) {
  const { 
    powerSwitch,
    updateSoundName, 
    soundLevel 
  } = useContext(DrumMachineContext);
  const [isPlaying, updateIsPlaying] = useState(false);

  let audioRef = useRef(null);
  let buttonRef = useRef(null);

  const handleClick = () => {
    if (powerSwitch) { // only run if powerSwitch is on
      updateIsPlaying(true);

      audioRef.current.volume = soundLevel / 100; // volume = percentage of 100
      audioRef.current.pause(); // https://stackoverflow.com/questions/14834520/html5-audio-stop-function
      audioRef.current.currentTime = 0; // allows for interrupts
      audioRef.current.play();
      updateSoundName(props.sound);
    }

    setTimeout(() => {
      buttonRef.current.blur();
      updateIsPlaying(false);
    }, 200);
  }
  
  // Click appropriate button when corresponding key is pressed
  const keypressHandler = useCallback(
    (e) => {
      const letter = e.key.toUpperCase();
      
      if (letter.length === 1 && letter === props.letter) {
        buttonRef.current.click();
        buttonRef.current.focus();
      }
    }, [props.letter]
  )
  useEventListener('keypress', keypressHandler);

  return (
    <>
      <Button
        variant="outline-secondary"
        className={`drum-pad ${isPlaying ? "active" : ""}`}
        id={ props.sound }
        onClick={handleClick}
        ref={ buttonRef }
      >
        <span>{ props.letter } </span>
      </Button>

      <audio 
        id={ props.letter }
        className="clip"
        src={ props.url } 
        ref={ audioRef }
      />
      
    </>
  )
}