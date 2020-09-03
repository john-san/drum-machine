import React, { useContext } from 'react';
import { Col, Form } from 'react-bootstrap';
import DrumMachineContext from '../DrumMachineContext';

export default function ControlsContainer() {
  const { 
    powerSwitch, 
    togglePowerSwitch, 
    bankSwitch, 
    toggleBankSwitch,
    soundName,
    soundLevel,
    updateSoundLevel,
    updateSoundName 
  } = useContext(DrumMachineContext);


  return (
    <Col xs={{span: 12}} md={{span: 6}} className="controls-container">
      <Form>
        <Form.Row>
          <Form.Check 
            type="switch"
            id="power-switch"
            label="Power"
            defaultChecked={powerSwitch}
            onChange={() => {
              togglePowerSwitch();
              updateSoundName('');
            }}
          />
        </Form.Row>

        <Form.Row>
          <div id="sound-name">
            <span>{soundName}</span>
          </div>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formBasicRangeCustom">
            <Form.Label>Volume</Form.Label>
            <Form.Control 
              type="range" 
              custom 
              value = { soundLevel }
              onChange={(e) => { 
                updateSoundLevel(e.target.value);
                updateSoundName(`Volume: ${e.target.value}`);
                setTimeout(() => { updateSoundName(''); }, 1000);
              }}
              disabled={powerSwitch === false ? true : false}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Check 
            type="switch"
            id="bank-switch"
            label="Bank"
            defaultChecked={bankSwitch}
            onChange={() => toggleBankSwitch() }
            disabled={powerSwitch === false ? true : false}
          />
        </Form.Row>
      </Form>
    </Col>
  );
}