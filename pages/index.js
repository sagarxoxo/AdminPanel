import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import DiscoverInfluencer from '../Components/DiscoverInfluencer';

import DiscoverClients from "../Components/DiscoverClients";
import OurInfluencers from "../Components/OurInfluencers";
import OurClient from "../Components/OurClient";
import CampaignsOverview from "../Components/CampaignsOverview";
import ReportsOverview from "../Components/ReportsOverview";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

export default function Home(props) {

    const scoialData = [{
        socialName: "Instagram",
        imgSocial: <AiOutlineInstagram color="#fff" size={30}/>,
        bg: "instaBg",
        },
        {
        socialName: "Youtube",
        imgSocial: <BsPlay color="#fff" size={30} />,
        bg: "ytBg",
        },
        {
        socialName: "Tiktok",
        imgSocial: <FaTiktok color="#fff" size={30}/>,
        bg: "tikBg",
        },
    ]

    useEffect(() => {
      props.setHead("Admin Panel")
    },[props.setHead])
  

  return (
    <div className='bg'>
      <Container fluid>
          <Row>
            <Col lg={12}>
            <div className="adminContainer">
              <h2 className="adminHeading">Discover Influencers</h2>
              <Row>
                {[
                  { name: "Identified", bg: "bgOrange cmbg" },
                  { name: "Contacted", bg: "bgGreen cmbg" },
                  { name: "Registered", bg: "bgDblue cmbg" },
                ].map((data, index) => {
                  return (
                    <Col lg={4} key={index}>
                      <DiscoverInfluencer hName={data.name} bg={data.bg} />
                    </Col>
                  );
                })}
              </Row>
              <h2 className="adminHeading">Discover Clients</h2>
              <Row>
                {[
                  { name: "Identified", bg: "bgOrange cmbg" },
                  { name: "Contacted", bg: "bgGreen cmbg" },
                  { name: "Registered", bg: "bgDblue cmbg" },
                  { name: "Scheduled a call", bg: "bgYellow cmbg" },
                ].map((data, index) => {
                  return (
                    <Col lg={3} key={index}>
                      <DiscoverClients hName={data.name} bg={data.bg} />
                    </Col>
                  );
                })}
              </Row>
              <h2 className="adminHeading">Our Influencers</h2>
              <Row>
                {scoialData.map((data, index) => {
                  return (
                    <Col lg={4} key={index}>
                      <OurInfluencers
                        hName={data.socialName}
                        bg={data.bg}
                        iconSocail={data.imgSocial}
                      />
                    </Col>
                  );
                })}
              </Row>
              <h2 className="adminHeading">Our Clients</h2>
              <Row>
                <Col>
                  <OurClient />
                </Col>
              </Row>
              <h2 className="adminHeading">Campaigns overview</h2>
              <Row>
                {[
                  { name: "In preperations", bg: "bgOrange cmbg" },
                  { name: "Ongoing", bg: "bgGreen cmbg" },
                  { name: "Finished", bg: "bgDblue cmbg" },
                  { name: "Total", bg: "bgYellow cmbg" },
                ].map((data, index) => {
                  return (
                    <Col lg={3} key={index}>
                      <CampaignsOverview hName={data.name} bg={data.bg} />
                    </Col>
                  );
                })}
              </Row>
              <h2 className="adminHeading">Reports overview</h2>
              <Row>
                {[
                  { name: "To be created", bg: "bgOrange cmbg" },
                  { name: "To be sent", bg: "bgGreen cmbg" },
                  { name: "Awaiting feedback", bg: "bgDblue cmbg" },
                  { name: "Approved", bg: "bgYellow cmbg" },
                ].map((data, index) => {
                  return (
                    <Col lg={3} key={index}>
                      <ReportsOverview hName={data.name} bg={data.bg} />
                    </Col>
                  );
                })}
              </Row>
            </div>
            </Col>
          </Row>
          </Container>
    </div>
  )
}
