import Image from 'next/image';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RiTimerFill } from "react-icons/ri";
import Graph from "../public/Images/Vector 3.2.png";

export default function DSclientSummaryCard(props) {
  return (
    
    <div className='cardCm'>
    <div className='csHeading'>
        <span className={props.bg}><RiTimerFill color="#fff" size={16}/></span>
        <span>{props.hName}</span>
    </div>
    <div className='infoInflu' style={{marginTop: "20px"}}>
        <div>
            <span>Clients</span>
            <span>90</span>
        </div>
        <div>
            <Image src={Graph} className='graph'/>
            <p><b>+5%</b> Since last <br />month</p>
        </div>
    </div>
    </div>
    
  )
}
