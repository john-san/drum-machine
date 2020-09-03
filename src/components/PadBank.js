import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import DrumButton from './DrumButton';
import DrumMachineContext from '../DrumMachineContext';
import { bankOne, bankTwo } from '../bankData';

export default function PadBank() {
  const { bankSwitch } = useContext(DrumMachineContext)
  // render correct bank items depending on bank state
  let bank = bankSwitch ? bankTwo : bankOne;

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
                />
              </Col>
            )
          )
        }
      </Row>
    </Col>
  );
}