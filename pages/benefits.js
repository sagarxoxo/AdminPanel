import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DateNoti from '../components/common/DateNoti'

export default function Benefits(props) {

  useEffect(() => {
    props.setHead("Benefits")
  },[props.setHead])

  return (
    <Container fluid>
    <Row>
      <Col lg={9} className="px-0">
        <div className='contentContainerInside'>
        Benefits
        </div>
      </Col>
      <Col lg={3} className="px-0">
        <DateNoti />
      </Col>
    </Row>
    </Container>
  )
}
