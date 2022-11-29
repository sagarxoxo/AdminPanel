import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DateNoti from '../components/common/DateNoti'
import ContainerSection from '../components/Home/ContainerSection'
import Bino from "../public/Images/Bino.svg"
import Contacted from "../public/Images/contacted.svg"
import Registered from "../public/Images/registered.svg"
import Total from "../public/Images/total.svg"
import Identified from "../public/Images/Identified.svg"
import Approved from "../public/Images/approved.svg"
import CallscheduledIc from "../public/Images/call scheduled.svg"
import Instagram from "../public/Images/instagram.svg"
import Youtube from "../public/Images/youtube.svg"
import Tiktok from "../public/Images/tiktok.svg"
import Inprep from "../public/Images/inprep.svg"
import OngoingIc from "../public/Images/ongoing.svg"
import FinishedIc from "../public/Images/finished.svg"
import MedtechIc from "../public/Images/watch.svg"
import HospitalIc from "../public/Images/hospital.svg"
import WithoutReportIc from "../public/Images/reportwithout.svg"
import TobesendIc from "../public/Images/ToBeSent.svg"
import Revenue from "../public/Images/revenue.svg"
import ToBeCreate from "../public/Images/ToBeCreated.svg"



export default function Home(props) {

  const [DiscInfluencers, setDiscInfluencers] = useState([
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

  const [DiscClients, setDiscClients] = useState([
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
      name: "Call Scheduled",
      icon: CallscheduledIc,
      rate: 2,
      up: true,
      total: 75,
    },
  ]);

  const [OurInflu, setOurInflu] = useState([
    {
      name: "Instagram",
      icon: Instagram,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Youtube",
      icon: Youtube,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Tiktok",
      icon: Tiktok,
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

  const [OurClient, setOurClient] = useState([
    {
      name: "Biotech",
      icon: Bino,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "In Preparation",
      icon: Inprep,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Meditech",
      icon: MedtechIc,
      rate: 2,
      up: false,
      total: 75,
    },
    {
      name: "Hospitals",
      icon: HospitalIc,
      rate: 2,
      up: false,
      total: 75,
    },
  ]);

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
      icon: ToBeCreate,
      rate: 2,
      up: true,
      total: 75,
    },
    {
      name: "Delivered",
      icon: Inprep,
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

  useEffect(() => {
    props.setHead("Dashboard")
  },[props.setHead])

  return (
    <Container fluid>
    <Row>
      <Col lg={9} className="px-0">
        <div className="contentContainerInside">
          <Row>
            <Col lg={12}>
              <ContainerSection title={"Discover Influencers"} data={DiscInfluencers} container={"4"}/>
            </Col>
            <Col lg={12}>
              <ContainerSection title={"Discover Clients"} data={DiscClients} container={"4"} />
            </Col>
            <Col lg={12}>
              <ContainerSection title={"Influencers"} data={OurInflu} container={"4"} />
            </Col>
            <Col lg={12}>
              <ContainerSection title={"Clients"} data={OurClient} container={"4"} />
            </Col>
            <Col lg={12}>
              <ContainerSection title={"Campaigns"} data={CampaignOverview} container={"4"} />
            </Col>
            <Col lg={12}>
              <ContainerSection title={"Reports"} data={ReportOverview} container={"4"} />
            </Col>
            <Col lg={12}>
              <ContainerSection title={"Social Media Listening"} data={SocialMedia} container={"4"} />
            </Col>
            <Col lg={12}>
              <ContainerSection title={"Surveys"} data={Surveys} container={"4"} />
            </Col>
            <Col lg={12}>
              <ContainerSection title={"Finance"} data={Finance} container={"4"} />
            </Col>
            {/* <Col lg={12}>
              <ContainerSection title={"Discover Influencers"} data={SmallConatiner} container={"6"} />
            </Col> */}
             {/* <Col lg={12}>
              <ContainerSection title={"Campaign Overview"} data={CampaignOverview} container={"scroll"} />
            </Col> */}
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
