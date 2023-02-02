import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BiLoaderCircle } from "react-icons/bi";
import { BsGraphUp } from 'react-icons/bs';
import { RiTimerFill } from "react-icons/ri";
import { HiDatabase } from "react-icons/hi";
import Graph from "../public/Images/Vector 3.2.png"
import { MdArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
import ProgressBar from 'react-bootstrap/ProgressBar';
import USAFlag from "../public/Images/usaFlag.png";
import UKFlag from "../public/Images/ukFlag.png";
import arabFlag from "../public/Images/arabFlag.png";
import ProgressBarFrame from '../Components/ProgressBarFrame';
import FilterCampaignSec from '../Components/FilterCampaignSec';
import Image from 'next/image';
import DateNoti from '../Components/DateNoti';

export default function Campaigns(props) {

    const status =[{
        statusName: "In preperations",
        iconsStatus: <BiLoaderCircle color="#fff" size={30}/>,
        bg: "cmbg inPrepBg",
        revenue: 3,
    },
    {
        statusName: "Ongoing",
        iconsStatus: <BsGraphUp color="#fff" size={30}/>,
        bg: "cmbg onGoingBg",
        revenue: 3,
    },
    {
        statusName: "Finished",
        iconsStatus: <RiTimerFill color="#fff" size={30}/>,
        bg: "cmbg finishedBg",
        revenue: 3,
    },
    {
        statusName: "Total",
        iconsStatus: <HiDatabase color="#fff" size={30}/>,
        bg: "cmbg totalBg",
        revenue: 3,
    }
]

const innerContentData = [{
    name: "Biotech",
    trendUp: <MdArrowDropUp size={16}/>,
    trendSt: "up",
}, {
    name: "Healthtech",
    trendUp: <MdOutlineArrowDropDown size={16}/>,
    trendSt: "down",
},
{
    name: "Meditech",
    trendUp: <MdArrowDropUp size={16}/>,
    trendSt: "up",
},
{
    name: "Hospitals",
    trendUp: <MdArrowDropUp size={16}/>,
    trendSt: "up",
}]

const countrySocialInfo = ["Platform", "Location", "Disease area"]

const now = 60;

useEffect(() => {
    props.setHead("Campaigns")
},[props.setHead])

  return (
    <div className='bg'>
        <Row>
        <Col lg={9}>
        <Container className="campSection">
        <h2 className="heading">Campaigns Breakdown</h2>
        <Row>
        { status.map((st, index) => {
            return (
            <Col lg={3} key={index}>
            <div className='CardStatus'>
                <div className='csHeading'>
                    <span className={st.bg}>{st.iconsStatus}</span>
                    <span>{st.statusName}</span>
                </div>
                <div className='csInfo'>
                    <div className='csRv'>
                        <span>Revenue</span>
                        <span>{st.revenue}</span>
                    </div>
                    <div className='csGr'>
                        <Image src={Graph} className='graph'/>
                        <span className='infoText'><b>+5%</b> Since last month</span>
                    </div>
                </div>
            </div>
            </Col>
            )
        })}
        </Row>
        <Row>
        <Col lg={3}>
            <div className='cardIndustry'>
                <span className='ciHeading'>Industry</span>
                <div className='ciInnerContent'>
                    {innerContentData.map((data, index) => {
                        return(
                        <div key={index}>
                        <span className='ciInnerHeading'>{data.name}</span>
                        <div className='ciInnerInfo'>
                            <div >
                                <span>2</span>
                                <span className={data.trendSt}>{data.trendUp}2%</span>
                            </div>
                            <p className='infoSp'>Since last month</p>
                        </div>
                        </div>
                        )
                    })
                        }
                </div>
            </div>
        </Col>
        {countrySocialInfo.map((data, index) => {
            return (
            <Col lg={3} key={index}>
            <div className='cardIndustry sliderIndustry' style={{overflowY: data === "Platform" ? "hidden" : "auto"}}>
                <h3 className='ci2Heading'>{data}</h3>
                <div className='slides' >
                    <ProgressBarFrame img={USAFlag} now={80}/>
                    <ProgressBarFrame img={UKFlag} now={60}/>
                    <ProgressBarFrame img={arabFlag} now={50}/>
                    {data !== "Platform" && <ProgressBarFrame img={USAFlag} now={80}/>}
                </div>
            </div>
            </Col>
            )
        })
        }
        </Row>

        <FilterCampaignSec />
    </Container>
    </Col>
    <Col lg={3}>
        <DateNoti />
    </Col>
    </Row>
    </div>
  )
}
