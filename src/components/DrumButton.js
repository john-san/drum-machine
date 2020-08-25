import React from 'react';
import { Button } from 'react-bootstrap';

export default function DrumButton(props) {
  return (
    <Button
      variant="outline-secondary"
      className="drum-pad"  
      id={props.sound}
      onClick={() => props.playAudio(props.url)}
    >
      { props.letter }
    </Button>
  )
}