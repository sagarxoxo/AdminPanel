import Image from 'next/image'
import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import NotificationInput from './NotificationInput'

export default function NotificationModal(props) {
  return (
    <Modal centered show={props.showNotiRule} onHide={props.handleNotiClose} >
      <div className='crossBtn'>
        <div style={{margin: "15px 12px 0px 0px"}} onClick={props.handleNotiClose}>
            <Image src="/Images/XCircle.svg" width="12" height="12"  /> 
        </div>
      </div>
       <Modal.Body className="modalNoti">
        <h2 className='textH2'>Notifications Settings</h2>
        <Form>
            <NotificationInput 
            notiLabel={"Notify me before Meeting"}
            showSwitch={false}
            />
            <NotificationInput 
            notiLabel={"Notify me before Task"}
            showSwitch={false}
            />
            <NotificationInput 
            notiLabel={"Notify me before Reminder"}
            showSwitch={false}
            />
            <NotificationInput 
            notiLabel={"Notify me when Status Unchanged more than"}
            showSwitch={false}
            />
            <NotificationInput 
            notiLabel={"Notify me when Status Change from"}
            showSwitch={true}
            />
        </Form>
        <Button variant="primary" className="commonBtn btnColor" style={{width: "100%", height: "48px", marginTop: "20px"}} >
            Save
          </Button>
        </Modal.Body>
      </Modal>
  )
}
