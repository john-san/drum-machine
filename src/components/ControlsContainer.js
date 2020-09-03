import React, { useContext } from 'react';
import { Col, Form } from 'react-bootstrap';
import { DrumMachineContext } from '../Store';


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

  const handlePowerSwitchOnChange = () => {
    togglePowerSwitch(!powerSwitch);
    updateSoundName('');
  }

  const handleVolumeOnChange = (e) => {
    updateSoundLevel(e.target.value);
    updateSoundName(`Volume: ${e.target.value}`);
    setTimeout(() => { updateSoundName(''); }, 1000);
  }

  const handleBankSwitchOnChange = () => {
    toggleBankSwitch(!bankSwitch);
  }

  return (
    <Col xs={{span: 12}} md={{span: 6}} className="controls-container">
      <Form id="controls-form">
        <Form.Row>
          <Form.Check 
            type="switch"
            id="power-switch"
            label="Power"
            defaultChecked={powerSwitch}
            onChange={handlePowerSwitchOnChange}
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
              value={soundLevel}
              onChange={handleVolumeOnChange}
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
            onChange={handleBankSwitchOnChange}
            disabled={powerSwitch === false ? true : false}
          />
        </Form.Row>
      </Form>
    </Col>
  );
}