import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "./Card.module.css"
import { FaUser, FaCaretUp, FaCaretDown } from "react-icons/fa";
import profile1 from "../../../public/Images/profile1.svg" 

export default function SmallContainerCard(props) {
  return (
    <div style={{marginBottom: "20px"}}>
    <Row className='sixContainerScroll'>
    {props.data.map((infocard, index) => {
    return (
    <Col lg={2} index={index}>
        <div className={styles.cardOfSix}>
            <div className={styles.infoBox}>
                <div className='flexRow' style={{alignItems: 'center', width: "100%"}}>
                    <div className={styles.containerImg}>
                        <Image src={infocard.icon} /> 
                    </div>
                    <span className='containerCardTitle' style={{paddingLeft: "8px", fontSize: "14px",}}>{infocard.name}</span>
                </div>
            </div>
            <div className={styles.rateBox}>
                <div className={styles.infoTotal}>
                    <span>{infocard.total}</span>
                </div>
                <span className={infocard.up ? styles.upRate : styles.downRate}>
                    {infocard.up ? <FaCaretUp /> : <FaCaretDown />}
                    {infocard.rate}%
                </span>
            </div>
        </div>
    </Col>
    )
        }) }
    </Row>
    </div>
  )
}
