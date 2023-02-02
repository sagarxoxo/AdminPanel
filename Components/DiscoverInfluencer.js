import React from 'react'
import { RiTimerFill } from "react-icons/ri";
import Graph from "../public/Images/Vector 3.2.png"
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import Image from 'next/image';

export default function DiscoverInfluencer(props) {
  return (
    <div className='cardCm'>
    <Row>
        <Col lg={7}>
        <div className='csHeading'>
            <span className={props.bg}><RiTimerFill color="#fff" size={16}/></span>
            <span>{props.hName}</span>
        </div>
        <div className='infoInflu'>
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
            <div className='infoInfluinnerCard'>
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
