import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "./Card.module.css"
import { FaUser, FaCaretUp, FaCaretDown } from "react-icons/fa";
import profile1 from "../../../public/Images/profile1.svg" 
import GraphSec from './GraphSec';

export default function ThreeContainerCards(props) {
  return (
    <div style={{marginBottom: "20px"}}>
    <Row>
    {props.data.map((infocard, index) => {
    return (
    <Col lg={4} index={index}>
        <div className={styles.cardOfThree}>
            <div className={styles.infoBox}>
                <div className='flexRow' style={{alignItems: 'center', width: "100%"}}>
                    <div className={styles.containerImg}>
                        <Image src={infocard.icon} /> 
                    </div>
                    <span className='containerCardTitle' style={{paddingLeft: "8px"}}>{infocard.name}</span>
                </div>
                <span className={infocard.up ? styles.upRate : styles.downRate}>
                    {infocard.up ? <FaCaretUp /> : <FaCaretDown />}
                    {infocard.rate}%
                </span>
            </div>
            <div className={styles.rateBox}>
                <div className={styles.infoTotal}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Image src={profile1} width="15px" height="16px"/>
                    </div>
                    <span>{infocard.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </div>
            </div>
            <div className={styles.graphBox}>
                <GraphSec />
            </div>
        </div>
    </Col>
    )
        }) }
    </Row>
    </div>
  )
}
