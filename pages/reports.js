import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DateNoti from '../components/common/DateNoti'
import ContainerSection from '../components/Home/ContainerSection';
import ToBeCreate from "../public/Images/ToBeCreated.svg"
import TobesendIc from "../public/Images/ToBeSent.svg"
import Approved from "../public/Images/approved.svg"
import Revenue from "../public/Images/revenue.svg"
import { ReportsFilter } from '../components/common/Filters/Filters';

export default function Reports(props) {

  const [ReportOverview, setReportOverview] = useState([
    {
      name: "To Be Created",
      icon: ToBeCreate,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "To Be Sent",
      icon: TobesendIc,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Approved",
      icon: Approved,
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
    props.setHead("Reports")
  },[props.setHead])

  return (
    <Container fluid>
    <Row>
      <Col lg={9} className="px-0">
        <div className='contentContainerInside'>
        <Row>
          <Col lg={12}>
            <ContainerSection data={ReportOverview} container={"4"}/>
          </Col>
          <Col lg={12}>
          <div className="filterContainer">
            <ReportsFilter />
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
