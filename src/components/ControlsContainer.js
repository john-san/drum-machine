import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

export default function ControlsContainer() {
  return (
    <Col xs={{span: 12}} md={{span: 6}} className="controls-container">
      <Row>
        <Form.Check 
          type="switch"
          id="power-switch"
          label="Power"
        />
      </Row>
      <Row>
        <div id="sound-name">
          <span>Sound Name</span>
        </div>
      </Row>
      <Row>
        <Form.Group controlId="formBasicRangeCustom">
          <Form.Label>Volume</Form.Label>
          <Form.Control type="range" custom />
        </Form.Group>
      </Row>
      <Row>
        <Form.Check 
          type="switch"
          id="bank-switch"
          label="Bank"
        />
      </Row>
    </Col>
  );
}