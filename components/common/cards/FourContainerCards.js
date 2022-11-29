import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "./Card.module.css"
import { FaUser, FaCaretUp, FaCaretDown } from "react-icons/fa";
import profile2 from "../../../public/Images/profile2.svg" 
import GraphSec from './GraphSec';

export default function FourContainerCards(props) {
  return (
    <div style={{marginBottom: "20px"}}>
    <Row>
    {props.data.map((infocard, index) => {
    return (
    <Col lg={3} index={index}>
        <div className={styles.cardOfFour}>
            <div className={styles.infoBox}>
                <div className='flexRow' style={{alignItems: 'center'}}>
                    <div className={styles.containerImg}>
                        <Image src={infocard.icon} /> 
                    </div>
                    <span className='containerCardTitle' style={{paddingLeft: "8px"}}>{infocard.name}</span>
                </div>
                
            </div>
            <div className={styles.rateBox}>
                <div className={styles.infoTotal}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Image src={profile2} width="13px" height="14px"/>
                    </div>
                    <span>{infocard.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </div>
                <span className={infocard.up ? styles.upRate : styles.downRate}>
                    {infocard.up ? <FaCaretUp /> : <FaCaretDown />}
                    {infocard.rate}%
                </span>
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
