
import React, { useEffect } from "react";

import {
  Button,
  Nav,
  Col,
  Pagination,
  Row,
  Form,
  Container,
} from "react-bootstrap";
import graph from "../public/Images/Vector 3.2.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import ToBeCreatedIcon from "../public/Images/createdIcon.png";
import SentIcon from "../public/Images/sentIcon.png";
import TimeIcon from "../public/Images/timeIcon.png";
import ApprovedIcon from "../public/Images/verifyIcon.png";
import ReportTable from "../Components/ReportTable";
import DateNoti from '../Components/DateNoti';
import Image from "next/image";

export default function Reports(props) {

    const reportData = [
        {
          socialName: "To be created",
          imgSocial: ToBeCreatedIcon,
          data: "3",
          desc: "Revenue",
          increamentRate: "+5% Since last month",
        },
        {
          socialName: "To be sent",
          imgSocial: SentIcon,
          data: "3",
          desc: "Revenue",
          increamentRate: "+5% Since last month",
        },
        {
          socialName: "Awaiting feedback ",
          imgSocial: TimeIcon,
          data: "3",
          desc: "Revenue",
          increamentRate: "+5% Since last month",
        },
        {
          socialName: "Approved",
          imgSocial: ApprovedIcon,
          data: "3",
          desc: "Revenue",
          increamentRate: "+5% Since last month",
        },
      ];

  useEffect(() => {
        props.setHead("Reports")
    },[props.setHead])
    
      
  return (
    <div className='bg'>
    <Row>
    <Col lg={9}>
    <div className="report-Con">
    <div className="report-sec-1">
    <p>Reports Breakdown</p>
    <div className="report-card-con">
    <Row>
    {reportData.map((data, index) => {
        return (
        <Col lg={3} key={index}>
            <div className="reportCard">
            <div className="reportNa">
                <Image src={data.imgSocial} />
                <span className="report-title">{data.socialName}</span>
            </div>
            <div className="reportData">
                <div className="report-card-content">
                <span className="report-desc">{data.desc}</span>
                <span className="report-data">{data.data}</span>
                </div>
                <div className="graph-sec">
                <Image src={graph} />
                <span>{data.increamentRate}</span>
                </div>
            </div>
            </div>
        </Col>
        );
    })}
    </Row>
    
    </div>
    </div>
    <div className="report-table-con">
    <div className="report-header">
        <div className="report-header-sec1">
            <h3>Reports</h3>
            <p>20 new reports</p>
        </div>
        <Button className="report-header-button">Export data</Button>
    </div>
    <ReportTable />
    </div>
    </div>
    </Col>
    <Col lg={3}>
    <DateNoti />        
    </Col>
    </Row>
    </div>
  )
}
