import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export default function ExportModal(props) {
  return (
    <Modal show={props.exportShow} onHide={props.handleExportClose} className="expoModalOuter">
        <Modal.Body>
           <b>Do you want to export:</b><br />
          <div className='expoModalCOnt'>
           <Form.Check type="checkbox" label="All" />
           <Form.Check type="checkbox" label="Identified" />
           <Form.Check type="checkbox" label="Contacted" />
           <Form.Check type="checkbox" label="Registered" />
           <Form.Check type="checkbox" label="Scheduled" />
          </div>
          <div className='btnCenCont'>
            <Button className="primBtn cmmBtn expoBtn">Export</Button>
          </div>
        </Modal.Body> 
      </Modal>
  )
}
