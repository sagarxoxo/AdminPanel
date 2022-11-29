import React, { useEffect,useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DateNoti from '../components/common/DateNoti'
import ContainerSection from '../components/Home/ContainerSection';
import Instagram from "../public/Images/instagram.svg"
import Youtube from "../public/Images/youtube.svg"
import Tiktok from "../public/Images/tiktok.svg"

import {DiscoverInfluencersFilter} from "../components/common/Filters/Filters";

export default function Discoverinfluencers(props) {

  const [OurInflu, setOurInflu] = useState([
    {
      name: "Instagram",
      icon: Instagram,
      rate: 2,
      up: true,
      total: 7552,
    },
    {
      name: "Youtube",
      icon: Youtube,
      rate: 2,
      up: true,
      total: 7552.8,
    },
    {
      name: "Tiktok",
      icon: Tiktok,
      rate: 2,
      up: true,
      total: 7552,
    },
  ]);

  useEffect(() => {
    props.setHead("Discover Influencers")
  },[props.setHead])

  return (
    <Container fluid>
    <Row>
      <Col lg={9} className="px-0">
        <div className='contentContainerInside'>
        <Row>
          <Col lg={12}>
            <ContainerSection data={OurInflu} container={"3"}/>
          </Col>
          <Col lg={12}>
          <div className="filterContainer">
            <DiscoverInfluencersFilter />
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
