import React, { useEffect,useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DateNoti from '../components/common/DateNoti'
import ContainerSection from '../components/Home/ContainerSection'
import Inprep from "../public/Images/inprep.svg"
import OngoingIc from "../public/Images/ongoing.svg"
import FinishedIc from "../public/Images/finished.svg"
import Revenue from "../public/Images/revenue.svg"
import { ServeysFilter } from '../components/common/Filters/Filters'

export default function Surveys(props) {

  const [Surveys, setSurveys] = useState([
    {
      name: "In Preparation",
      icon: Inprep,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Ongoing",
      icon: OngoingIc,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Finished",
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
    props.setHead("Surveys")
  },[props.setHead])

  return (
    <Container fluid>
    <Row>
      <Col lg={9} className="px-0">
        <div className='contentContainerInside'>
        <Row>
          <Col lg={12}>
            <ContainerSection data={Surveys} container={"4"}/>
          </Col>
          <Col lg={12}>
          <div className="filterContainer">
            <ServeysFilter />
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
