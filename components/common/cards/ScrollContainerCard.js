import Image from 'next/image'
import React from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap'
import styles from "./Card.module.css"
import { FaUser, FaCaretUp, FaCaretDown } from "react-icons/fa";
import profile1 from "../../../public/Images/profile1.svg" 

export default function ScrollContainerCard(props) {
  return (
    <div style={{marginBottom: "20px"}}>
    <Row>
    {props.data.map((infocard, index) => {
    return (
    <Col lg={3} index={index}>
        <div className={styles.scrollCard}>
            <div className={styles.infoBox}>
                <div className='flexRow' style={{alignItems: 'center'}}>
                    <div className={styles.containerImg}>
                        <Image src={infocard.icon} /> 
                    </div>
                    <span className='containerCardTitle' style={{paddingLeft: "8px"}}>{infocard.name}</span>
                </div>
                
            </div>
            <div className={styles.scrollBox}>
                <div className={styles.progressScrollContainer}>
                {infocard.perData.map((data, index) => {
                return (
                    <div key={index}>
                    <div className={styles.progressBox}>
                        <div style={{marginRight: "9px"}}><Image src={profile1} width="13px" height="14px" /></div>
                        <ProgressBar className={styles.progressBar} now={data.per} />
                        <span className={styles.perProgressBar}>{data.per}%</span>
                    </div>
                    </div>
                );
                })}
            </div>
            </div>
        </div>
    </Col>
    )
        }) }
    </Row>
    </div>
  )
}
