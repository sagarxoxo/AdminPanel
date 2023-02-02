import React from 'react'
import { RiTimerFill } from "react-icons/ri";
import Graph from "../public/Images/Vector 3.2.png"
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import Image from "next/image";

export default function DiscoverClients(props) {
  return (
    <div className='cardCm'>
    <Row>
        <Col lg={6}>
        <div className='csHeading'>
            <span className={props.bg}><RiTimerFill color="#fff" size={16}/></span>
            <span style={{lineHeight: "20px",}}>{props.hName}</span>
        </div>
        <div className='infoClient'>
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

        <Col lg={6}>
        <div className='infoClientinnerCard'>
            {["Biotech", "Healthtech", "Medtech", "Hospitals"].map((data, index) => {
                return (
                    <div key={index}>
                        <span>{data}</span>
                        <span>80%</span>
                    </div>
                )
            })}
        </div>
        </Col>
    </Row>
</div>
  )
}
