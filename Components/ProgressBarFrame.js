import Image from 'next/image'
import React from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap'

export default function ProgressBarFrame(props) {
  return (
    <div className='ciSingleSec'>
        <Row>
        <Col lg={2}><div className='flagImg'><Image src={props.img} /></div></Col>
        <Col lg={7}><ProgressBar now={props.now} /></Col>
        <Col lg={3}><span className='perProgressBar'>{props.now}%</span></Col>
        </Row>
        <hr className='hrNew1'/>
    </div>
  )
}
