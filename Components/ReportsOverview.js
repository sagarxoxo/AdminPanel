import Image from 'next/image';
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { RiTimerFill } from "react-icons/ri";
import Graph from "../public/Images/Vector 3.2.png"


export default function ReportsOverview(props) {
  return (
    <div className='cardCm' style={{marginBottom: "20px"}}>
        <Row>
            <div className='csHeading'>
                <span className={props.bg}><RiTimerFill color="#fff" size={16}/></span>
                <span>{props.hName}</span>
                
            </div>
            <Col lg={6}>
            <div className='infoClient' style={{marginTop: "20px"}}>
                <div>
                    <span>Total</span>
                    <span>8,589.8</span>
                </div>
                <div style={{marginTop: "20px"}}>
                    <Image src={Graph} className='graph'/>
                    <p><b>+5%</b> Since last <br />month</p>
                </div>
            </div>
            </Col>
            <Col lg={6}>
            <div className='infoReportsinnerCard' style={{marginTop: "20px"}}>
                <div>
                    <span>Basic</span>
                    <span>8</span>
                </div>
                <div>
                    <span>Mid</span>
                    <span>1</span>
                </div>
                <div>
                    <span>Pro</span>
                    <span>6</span>
                </div>
            </div>
            </Col>
        </Row>
    </div>
  )
}
