import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function ClientDetailsPopUp(props) {

    const [switchNav, setSwitchNav] = useState();

    useEffect(() => {
        setSwitchNav("Default")
    },[])

  return (
    <Modal  className='clientModal' size="md" show={props.clientDetailShow} onHide={props.handleClientDetailClose}>
        <Modal.Header closeButton>
          <Modal.Title>
          <div className='clientModalNav'>
                <Button style={{backgroundColor: (switchNav === "Info" || switchNav === "Default")  && "#2D3779"}}  onClick={() => setSwitchNav("Info")}>Info</Button>
                <Button style={{backgroundColor: switchNav === "Camp" && "#2D3779"}} onClick={() => setSwitchNav("Camp")}>Campaigns</Button>
                <Button style={{backgroundColor: switchNav === "Cli" && "#2D3779"}} onClick={() => setSwitchNav("Cli")}>Client Management</Button>
            </div>
          </Modal.Title>
        </Modal.Header>
        { (switchNav === "Info" || switchNav === "Default")  && <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>}
        { switchNav === "Camp"  && <Modal.Body>Woohoo, you're reading this text in a !</Modal.Body>}
        { switchNav === "Cli"  && <Modal.Body>Woohoo, you're reading this text in!</Modal.Body>}
    </Modal>

  )
}
