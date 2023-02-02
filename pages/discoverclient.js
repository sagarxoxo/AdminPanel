import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RiTimerFill } from "react-icons/ri";
import Graph from "../public/Images/Vector 3.2.png"
import DSclientSummaryCard from '../Components/DSclientSummaryCard';
import FiltersDSClients from '../Components/FiltersDSClients';
import DSclientDaashboard from '../Components/DSclientDaashboard';
import DateNoti from '../Components/DateNoti';
import Image from "next/image";

export default function DiscoverClient(props) {

    useEffect(() => {
        props.setHead("Discover Clients")
    },[props.setHead])
    
  return (
    <div className='bg'>
    <Row>
        <Col lg={9}>
        <Container fluid className="disClientConatiner">
        <h2 className='dsclientHeading'>Clients Summary</h2>
        <Row>
            {[{name: "Biotech", bg: "bgOrange cmbg"}, {name: "Healthtech", bg: "bgGreen cmbg"}, {name: "Meditech", bg: "bgYellow cmbg"},  {name: "Hospitals", bg: "bgDblue cmbg"}].map((data, index) => {
                return (
                <Col lg={3} key={index}>
                    <DSclientSummaryCard hName={data.name} bg={data.bg}/>
                </Col>
                )
            })
            }
        </Row>
        <FiltersDSClients /> 
        
        </Container>
        </Col>
        <Col lg={3}>
            <DateNoti />
        </Col>
    </Row>

        
    </div>
  )
}
