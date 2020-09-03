import React, { useContext, useCallback } from 'react';
import { Row, Col } from 'react-bootstrap';
import DrumButton from './DrumButton';
import { DrumMachineContext } from '../Store';
import { bankOne, bankTwo } from '../bankData';
import useEventListener from '@use-it/event-listener';

export default function PadBank() {
  const { bankSwitch } = useContext(DrumMachineContext)
  let bank = bankSwitch ? bankTwo : bankOne; // render correct bank items depending on bank state

  // Click appropriate button when corresponding key is pressed
  const keydownHandler = useCallback(
    (e) => {
      let regexp = /[a-zA-Z]/;
      if (e.key.match(regexp) && e.key.length === 1) {
        const letter = e.key.toUpperCase();
        const button = document.getElementById(letter);
        button.click();
        button.focus();
      }
    }, []
  )
  useEventListener('keydown', keydownHandler);

  return (
    <Col xs={{span: 12}} md={{span: 6}} className="pad-bank">
      <Row>
        {
          bank.map(item => (
            <Col xs={{span: 4}} className="mt-3" key={`${item.letter}`}>
              <DrumButton 
                letter={item.letter} 
                sound={item.sound} 
                url={item.url}
              />
            </Col>
          ))
        }
      </Row>
    </Col>
  );
}