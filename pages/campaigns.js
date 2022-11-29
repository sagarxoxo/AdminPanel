import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DateNoti from '../components/common/DateNoti'
import Inprep from "../public/Images/inprep.svg"
import OngoingIc from "../public/Images/ongoing.svg"
import FinishedIc from "../public/Images/finished.svg"
import ContainerSection from '../components/Home/ContainerSection'
import Revenue from "../public/Images/revenue.svg"
import Industry from "../public/Images/Industry.svg"
import LocationIc from "../public/Images/location.svg"
import DiseaseArea from "../public/Images/DiseaseArea.svg"
import Platform from "../public/Images/platform.svg"
import { AdminCampaignsFilter } from '../components/common/Filters/Filters'

export default function Campaigns(props) {

  const [CampaignOverview, setCampaignOverview] = useState([
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
    props.setHead("Campaigns")
  },[props.setHead])

  return (
    <Container fluid>
    <Row>
      <Col lg={9} className="px-0">
        <div className='contentContainerInside'>
        <Row>
          <Col lg={12}>
            <ContainerSection data={CampaignOverview} container={"4"}/>
          </Col>
          <Col lg={12}>
            <ContainerSection data={CampaignInfo} container={"scroll"} />
          </Col>
          <Col lg={12}>
          <div className="filterContainer">
            <AdminCampaignsFilter />
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
