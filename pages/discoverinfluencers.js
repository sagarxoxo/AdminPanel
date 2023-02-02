
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineInstagram } from "react-icons/ai";
import { BsPlay } from 'react-icons/bs';
import { FaTiktok } from "react-icons/fa";
import graph from "../public/Images/Vector 3.2.png"
import DashboardContent from '../Components/DashboardContent';
import DateNoti from '../Components/DateNoti';
import { useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

export default function DiscoverInfluencers(props) {

    const dispatch = useDispatch()

    useEffect(() =>{
        
    },[])


    const scoialData = [{
        socialName: "Instagram",
        imgSocial: <AiOutlineInstagram size={30}/>,
        bg: "instaBg",
        data: "9,89670",
        desc: "Influencers since last month",
        },
        {
        socialName: "Youtube",
        imgSocial: <BsPlay size={30} />,
        bg: "ytBg",
        data: "9,89670",
        desc: "Influencers since last month",
        },
        {
        socialName: "Tiktok",
        imgSocial: <FaTiktok size={30}/>,
        bg: "tikBg",
        data: "9,89670",
        desc: "Influencers since last month",
        },
    ]

    useEffect(() => {
        props.setHead("Discover Influencers")
    },[props.setHead])
    
  return (
    <div className="bg">
        <Row>
        <Col lg={9}>
            <Row>
            {scoialData.map((data, index) => {
                return (
                <Col lg={4} key={index}>
                <div className='socialCard'>
                    <div className='scoialNa'>
                    <span className={data.bg}>{data.imgSocial}</span>
                    <span>{data.socialName}</span>
                    </div>
                    <div className='socialData'>
                    <span>{data.data}</span>
                    <Image src={graph} />
                    </div>
                    <span className='desc'>{data.desc}</span>
                </div>
                </Col>
            )
            })}
            </Row>
            <Col lg={12}><DashboardContent /></Col>
                </Col>
                <Col lg={3}>
                    <DateNoti />
                </Col>
            </Row>
    </div>
  )
}
