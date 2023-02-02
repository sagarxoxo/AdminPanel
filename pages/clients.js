import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Graph from "../public/Images/Vector 3.2.png"
import ClientsBreakdown from '../Components/ClientsBreakdown'
import FilterClients from '../Components/FilterClients'
import ClientTable from '../Components/ClientTable'
import DateNoti from '../Components/DateNoti'
import Image from 'next/image'

export default function Clients(props) {

    useEffect(() => {
        props.setHead("Clients")
    },[props.setHead])
    
  return (
    <div className='bg'>
        <Row>
        <Col lg={9}>
        <div className='clientContainer'>
        <h2 className='clientHeading'>Our Client Network Summary</h2>
        <Row>
            <Col lg={6}>
                <div className='cardCm' style={{padding: "30px"}}>
                <div className='infoCli'>
                    <div>
                        <span>Total Clients</span>
                        <span>889</span>
                    </div>
                    <div>
                        <div className='graph'><Image src={Graph}/></div>
                        <p><b>+5%</b> Since last month</p>
                    </div>
                </div>
                </div>
            </Col>
            <Col lg={6}>
            <div className='cardCm' style={{padding: "30px"}}>
                <div className='infoCli'>
                    <div>
                        <span>Total Revenue</span>
                        <span>CHF545</span>
                    </div>
                    <div>
                        <Image src={Graph} className='graph'/>
                        <p><b>+5%</b> Since last month</p>
                    </div>
                </div>
            </div>
            </Col>
            <Col lg={6}>
            </Col>
        </Row>
        <h2 className='clientHeading'>Clients industry breakdown</h2>
        <ClientsBreakdown />
        <FilterClients />
        </div>
        </Col>
            <Col lg={3}>
            <DateNoti />
            </Col>
        </Row>
    </div>
  )
}
