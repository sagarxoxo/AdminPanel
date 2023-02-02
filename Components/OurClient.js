import Image from 'next/image';
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { RiTimerFill } from "react-icons/ri";
import Graph from "../public/Images/Vector 3.2.png"

export default function OurClient() {
  return (
    <div className='cardCm'> 
        <Row>
            <Col lg={1}>
            <div className='infoOClient'>
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
            <Col lg={11}>
                <div className='infoOClintinnerCard'>
                    <Row>
                        {[{name: "Biotech",bg: "bgOrange cmbg"},{name:  "Healthtech",bg: "bgGreen cmbg"}, {name: "Meditech",bg: "bgDblue cmbg"}, {name: "Hospitals",bg: "bgYellow cmbg"}].map((data, index) => {
                            return (
                            <Col lg={3} key={index}>
                                <div className='innerContainer'>
                                <div className='csHeading'>
                                    <span className={data.bg}><RiTimerFill color="#fff" size={16}/></span>
                                    <span>{data.name}</span>
                                </div>  
                                <div style={{display:"flex", flexDirection: "row"}}>
                                    <div className='OclientInfo'>
                                        <span>Clients</span>
                                        <span>90</span>
                                        <Image src={Graph} className='graph'/>
                                        <p><b>+5%</b> Since last <br />month</p>
                                    </div>
                                    <div className='OclientInfo'>
                                        <span>Revenue</span>
                                        <span>CHF8,974</span>
                                        <Image src={Graph} className='graph'/>
                                        <p><b>+5%</b> Since last <br />month</p>
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>                        
                                </div>
                            </Col>
                            )
                        })}
                    </Row>
                </div>
            </Col>
        </Row>
    </div>
  )
}
