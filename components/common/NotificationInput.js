import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export default function NotificationInput(props) {
  return (
    <Row>
    <Form.Label className='label'>{props.notiLabel}</Form.Label>
        { !props.showSwitch && <Col>
        <Form.Control placeholder="Days" />
        </Col>}
         { !props.showSwitch && <Col>
        <Form.Control placeholder="Hours" />
        </Col>}

        { props.showSwitch && 
        <>
        <Col>
        <Form.Check 
            type="switch"
            label="Identified"
        />
        </Col>
        <Col>
        <Form.Check 
            type="switch"
            label="Contacted"
        />
        </Col>
        <Col>
        <Form.Check 
            type="switch"
            label="Registered"
        />
        </Col>
        </>
        }
    </Row>
  )
}
