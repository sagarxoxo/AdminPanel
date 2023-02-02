import Image from 'next/image';
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { RiTimerFill } from "react-icons/ri";
import Graph from "../public/Images/Vector 3.2.png"

export default function OurInfluencers(props) {
  return (
    <div className='cardCm'>   
    <Row>
        <Col lg={7}>
        <div className='csHeading'>
            <span className={props.bg}>{props.iconSocail}</span>
            <span>{props.hName}</span>
        </div>
        <div className='infoInflu' style={{marginTop: "20px"}}>
            <div>
                <span>Total</span>
                <span>8,589.8</span>
            </div>
            <div>
                <Image src={Graph} className='graph'/>
                <p><b>+5%</b> Since last <br />month</p>
            </div>
        </div>
        </Col>
        <Col lg={5}>
        <div className='infoInfuinnerCard'>
        <div>
            <span>In campaigns:</span>
            <span>80%</span>
        </div>
        <div>
            <span>Available:</span>
            <span>40%</span>
        </div>
        </div>
        </Col>
    </Row>
    </div>
  )
}
