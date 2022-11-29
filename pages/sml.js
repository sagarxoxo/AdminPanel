import React, { useEffect,useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DateNoti from '../components/common/DateNoti'
import ToBeCreate from "../public/Images/ToBeCreated.svg"
import OngoingIc from "../public/Images/ongoing.svg"
import FinishedIc from "../public/Images/finished.svg"
import Revenue from "../public/Images/revenue.svg"
import ContainerSection from '../components/Home/ContainerSection'
import { SocialMediaListingFilter } from '../components/common/Filters/Filters'

export default function SML(props) {

  const [SocialMedia, setSocialMedia] = useState([
    {
      name: "Created",
      icon: ToBeCreate,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Ordered",
      icon: OngoingIc,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Delivered",
      icon: FinishedIc,
      rate: 2,
      up: false,
      total: 75,
    },
    {
      name: "Revenue",
      icon: Revenue,
      rate: 2,
      up: true,
      total: 75,
    },
  ]);


  useEffect(() => {
    props.setHead("SML")
  },[props.setHead])

  return (
    <Container fluid>
    <Row>
      <Col lg={9} className="px-0">
        <div className='contentContainerInside'>
        <Row>
          <Col lg={12}>
            <ContainerSection data={SocialMedia} container={"4"}/>
          </Col>
          <Col lg={12}>
          <div className="filterContainer">
            <SocialMediaListingFilter />
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
