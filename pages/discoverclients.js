import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DateNoti from '../components/common/DateNoti'
import ContainerSection from '../components/Home/ContainerSection'
import Contacted from "../public/Images/contacted.svg"
import Registered from "../public/Images/registered.svg"
import Total from "../public/Images/total.svg"
import Identified from "../public/Images/Identified.svg"
import { DiscoverClientsFilter } from '../components/common/Filters/Filters'

export default function Discoverclients(props) {

  const [OurClients, setOurClients] = useState([
    {
      name: "Identified",
      icon: Identified,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Contacted",
      icon: Contacted,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Registered",
      icon: Registered,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Total",
      icon: Total,
      rate: 2,
      up: false,
      total: 75,
    },
  ]);


  useEffect(() => {
    props.setHead("Discover Clients")
  },[props.setHead])


  return (
    <Container fluid>
    <Row>
      <Col lg={9} className="px-0">
        <div className='contentContainerInside'>
        <Row>
          <Col lg={12}>
            <ContainerSection data={OurClients} container={"4"}/>
          </Col>
          <Col lg={12}>
          <div className="filterContainer">
            <DiscoverClientsFilter />
          </div>
          </Col>
        </Row>
        </div>
      </Col>
      <Col lg={3} className="px-0">
        <DateNoti />
      </Col>
    </Row>
    </Container>
  )
}
