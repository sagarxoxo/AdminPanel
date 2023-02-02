import Image from 'next/image';
import React from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap'
import { RiTimerFill } from "react-icons/ri";
import Graph from "../public/Images/Vector 3.2.png"

export default function CampaignsOverview(props) {
  return (
    <div className='cardCm'>
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
            <div className='infoInfluinnerCard' style={{marginTop: "20px"}}>
                {[{name: "Instagram", now: 80},{name: "Youtube", now: 60},{name: "Tiktok", now: 40},].map((data, index) => {
                    return(
                    <div key={index}>
                        <span className='sociN'>{data.name}</span>
                        <Row>
                            <Col lg={8}><ProgressBar now={data.now} /></Col>
                            <Col lg={4}><span className='perProgressBar'>{data.now}%</span></Col>
                        </Row>
                    </div>
                    )
                })}
            </div>
            </Col>
        </Row>
    </div>
  )
}
