import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import DrumButton from './DrumButton';
import { DrumMachineContext } from '../Store';
import { bankOne, bankTwo } from '../bankData';


export default function PadBank() {
  const { bankSwitch } = useContext(DrumMachineContext)
  let bank = bankSwitch ? bankTwo : bankOne; // render correct bank items depending on bank state

  

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