import React from 'react';
import { Col, Form } from 'react-bootstrap';
import DrumMachineContext from '../DrumMachineContext';

export default function ControlsContainer() {
  return (
    <DrumMachineContext.Consumer>
      {
        ({ power, 
          togglePower, 
          bank, 
          toggleBank,
          soundName,
          soundLevel,
          updateSoundLevel,
          updateSoundName }) => (
            <Col xs={{span: 12}} md={{span: 6}} className="controls-container">
              <Form>
                <Form.Row>
                  <Form.Check 
                    type="switch"
                    id="power-switch"
                    label="Power"
                    defaultChecked={power}
                    onChange={() => {
                      togglePower();
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
                      disabled={power === false ? true : false}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Check 
                    type="switch"
                    id="bank-switch"
                    label="Bank"
                    defaultChecked={bank}
                    onChange={() => toggleBank() }
                    disabled={power === false ? true : false}
                  />
                </Form.Row>
              </Form>
            </Col>
          )
      }
      
    </DrumMachineContext.Consumer>
  );
}