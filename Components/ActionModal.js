import React, { useRef, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import { useDispatch } from 'react-redux'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { comment, email, label, message, schedule } from '../app/store/slices/dashboardSlice';

export default function ActionModal(props) {

    const dispatch = useDispatch()
    const ref = useRef();

    const optionLabel = ["Product Designer", "UI", "App Design", "UX"]
    const options =["A","B","C","D","EE","FFF","GGG"]

    const [actionEmailData, setActionEmailData] = useState({
        subject: "", receiver: "", message: "",
    })
    
    const [dmData, setDmData] = useState("")
    const [commentData, setCommentData] = useState("")
    const [labelData, setLabelData] = useState([])
    
    const [scheduleData, setScheduleData] = useState({
        subject: "", type: "", time: "",addInfluencers: [], addDescription: "",
    })

    function handleEmail(e){
    const {name,value} = e.target;
    setActionEmailData(prevData => {
        return {
        ...prevData,
        [name] : value,
        }
    })
    }
    
    function handleSchedule(e){
    const {name,value} = e.target;
    setScheduleData(prevData => {
        return {
        ...prevData,
        [name] : value,
        }
    })
    }

    function allSubmitAction(e, name){
        e.preventDefault();
        if(name=== "message"){
          dispatch(message(dmData))
        } else if(name=== "email"){
          dispatch(email(actionEmailData))
        } else if(name=== "comment"){
          dispatch(comment(commentData))
        } else if(name=== "label"){
          dispatch(label(labelData))
        } else if(name=== "schedule"){
          dispatch(schedule(scheduleData))
        }
      }
  return (
    <Modal show={props.actionShow} onHide={props.handleActionClose}>
      { props.action === "Contact" && 
      <Modal.Body className='actdionModal'>
       <h2>Contact</h2>
       {props.client && <Form.Select onChange={(e) => props.setActionContChoose(e.target.value)} defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>DM</option>
            <option>Email</option>
        </Form.Select>}
        {props.client && (props.actionContChoose === "DM") && 
        <div className='actionDm'>
          <Form.Group className="mb-3" >
            <Form.Label>Message</Form.Label>
            <Form.Control type="text"  name="message" value={dmData} onChange={(e) => setDmData(e.target.value)}  placeholder="Enter message" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn" onClick={(e) => allSubmitAction(e, "message")}>Send</Button>
        </div>
        </div>}
        {(props.actionContChoose === "Default" || props.actionContChoose === "Email") && 
         <div className='actionDm'>
          <Form.Group className="mb-3" >
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" name="subject" value={actionEmailData.subject} onChange={handleEmail}  placeholder="Enter subject" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Receiver</Form.Label>
            <Form.Control type="text" name="receiver" value={actionEmailData.receiver} onChange={handleEmail} placeholder="Enter message" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name="message" value={actionEmailData.message} onChange={handleEmail} rows={4} style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn" onClick={(e) => allSubmitAction(e, "email")}>Send</Button>
        </div>
        </div>}
      </Modal.Body> }
      
      { props.action === "Note" && 
      <Modal.Body className='actdionModal'>
       <h2>Note</h2>
       <Form.Select onChange={(e) => props.setActionContChoose(e.target.value)} defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>Comment</option>
            <option>Label</option>
        </Form.Select>
        {(props.actionContChoose === "Default" || props.actionContChoose === "Comment") && 
        <div className='actionDm'>
          <Form.Group className="mb-3" >
            <Form.Control as="textarea" name="comment" value={commentData} onChange={(e) => setCommentData(e.target.value)} rows={4} style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn" onClick={(e) => allSubmitAction(e, "comment")}>Add Text</Button>
        </div>
        </div>}
        {props.actionContChoose === "Label" && 
         <div className='actionLabel'>
          <Form.Group className="mb-3" controlId="formGridState">
            <Form.Label>Add Label</Form.Label>
            <Typeahead
              defaultSelected={optionLabel.slice(0, 1)}
              id="public-methods-example"
              labelKey="labelData"
              multiple
              options={optionLabel}
              placeholder="Add Label"
              ref={ref}
              onChange={setLabelData}
              selected={labelData}

          />
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn" onClick={(e) => allSubmitAction(e, "label")}>Save</Button>
        </div>
        </div>}
      </Modal.Body> }
     
      { props.action === "Schedule" && 
      <Modal.Body className='actdionModal'>
       <h2>Schedule</h2>
       <Form.Group className="mb-3" >
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" name="subject" value={scheduleData.subject} onChange={handleSchedule} placeholder="Enter message" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Type</Form.Label>
        <Form.Select  name="type" value={scheduleData.type} onChange={handleSchedule} defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>Meeting</option>
            <option>Task</option>
            <option>Reminder</option>
        </Form.Select>
        </Form.Group>
       <Form.Group className="mb-3" >
       <Form.Label>Time</Form.Label>
       <DatePicker
          selected={scheduleData.time}
          onChange={(date) => setScheduleData(prevData => ({...prevData,time: date,}))}
          showTimeSelect
          timeFormat="p"
          timeIntervals={15}
          dateFormat="Pp"
          name="time" 
          value={scheduleData.time}
        />
       </Form.Group>
       <Form.Group className="mb-3" >
       <Form.Label>Add Influencers</Form.Label>
       <Typeahead
          id="basic-typeahead-multiple"
          labelKey="addInfluencers"
          multiple
          options={options}
          placeholder="--- Please Select ---"
          onChange={(selected) => setScheduleData(prevData => ({...prevData, addInfluencers: selected}))}
          selected={scheduleData.addInfluencers}
        />

       </Form.Group>
       <Form.Group className="mb-3" >
            <Form.Label>Add Description</Form.Label>
            <Form.Control as="textarea"  name="addDescription" value={scheduleData.addDescription} onChange={handleSchedule} rows={3} style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn" onClick={(e) => allSubmitAction(e, "schedule")}>Schedule</Button>
        </div>
      </Modal.Body> }
      
      </Modal>

      
  )
}
