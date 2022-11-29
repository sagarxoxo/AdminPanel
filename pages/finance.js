import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DateNoti from '../components/common/DateNoti'
import Revenue from "../public/Images/revenue.svg"
import Approved from "../public/Images/approved.svg"
import ContainerSection from '../components/Home/ContainerSection'
import Industry from "../public/Images/Industry.svg"
import LocationIc from "../public/Images/location.svg"
import DiseaseArea from "../public/Images/DiseaseArea.svg"
import Platform from "../public/Images/platform.svg"
import { FinanceFilter } from '../components/common/Filters/Filters'

export default function Finance(props) {

  const [Finance, setFinance] = useState([
    {
      name: "Revenue",
      icon: Revenue,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Cost",
      icon: Approved,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Profit",
      icon: Approved,
      rate: 2,
      up: false,
      total: 75,
    },
    {
      name: "Margin",
      icon: Approved,
      rate: 2,
      up: true,
      total: 75,
    },
  ]);

  const [CampaignInfo, setCampaignInfo] = useState([
    {
      name: "Industry",
      icon: Industry,
      perData: [
        { name: "u1", per: 80 },
        { name: "u1", per: 80 },
        { name: "u1", per: 80 },
        { name: "u1", per: 80 },
      ],
    },
    {
      name: "Location",
      icon: LocationIc,
      perData: [
        { name: "u1", per: 80 },
        { name: "u1", per: 80 },
        { name: "u1", per: 80 },
        { name: "u1", per: 80 },
      ],
    },
    {
      name: "Disease Area",
      icon: DiseaseArea,
      perData: [
        { name: "u1", per: 80 },
        { name: "u1", per: 80 },
        { name: "u1", per: 80 },
        { name: "u1", per: 80 },
      ],
    },
    {
      name: "Platform",
      icon: Platform,
      perData: [
        { name: "u1", per: 80 },
        { name: "u1", per: 80 },
        { name: "u1", per: 80 },
        { name: "u1", per: 80 },
      ],
    },
  ]);


    useEffect(() => {
        props.setHead("Finance")
      },[props.setHead])

  return (
    <Container fluid>
    <Row>
      <Col lg={9} className="px-0">
        <div className='contentContainerInside'>
        <Row>
          <Col lg={12}>
            <ContainerSection data={Finance} container={"4"}/>
          </Col>
          <Col lg={12}>
            <ContainerSection data={CampaignInfo} container={"scroll"} />
          </Col>
          <Col lg={12}>
          <div className="filterContainer">
            <FinanceFilter />
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
