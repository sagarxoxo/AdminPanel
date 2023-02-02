import React, {useState, useRef, useEffect} from 'react'
import { Button, Col, Dropdown, DropdownButton, Form, Modal, Pagination, Row } from 'react-bootstrap'
import profilePic from "../public/Images/profile-circle-2 1.png"
import { BsInstagram, BsThreeDotsVertical } from 'react-icons/bs'
import { HiLocationMarker } from "react-icons/hi";
import { Typeahead } from 'react-bootstrap-typeahead'
import moment from 'moment'
import USAFlag from "../public/Images/usaFlag.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import ActionModal from './ActionModal';
import { editClient } from '../app/store/slices/dashboardSlice';
import PaginationConatiner from './PaginationConatiner';

export default function DSclientDaashboard() {

  const ref = useRef();
  const dispatch = useDispatch()

  const [action, setAction] = useState();

  const [actionShow, setActionShow] = useState(false);
  const handleActionClose = () => setActionShow(false);
  const handleActionShow = () => setActionShow(true);
  
  const [editShow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const [actionContChoose, setActionContChoose] = useState("Default");
  const [multiSelections, setMultiSelections] = useState([]);
const data = [{
    headingInner: "Identified",
    num: "89670"
    },
    {
    headingInner: "Contacted",
    num: "79660"
    },
    {
    headingInner: "Registered",
    num: "29670"
    },
    {
    headingInner: "Scheduled Call",
    num: "100"
    },
]

const optionLabel = ["Product Designer", "UI", "App Design", "UX"]
const options =["A","B","C","D","EE","FFF","GGG"]

const [startDate, setStartDate] = useState(new Date());

const [dateRange, setDateRange] = useState([new Date(), new Date()]);

useEffect(() => {
  const draggables = document.querySelectorAll('.draggable')
  const containers = document.querySelectorAll('.dataCard')
  
  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging')
    })
  
    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging')
    })
  })
  
  containers.forEach(container => {
    container.addEventListener('dragover', e => {
      e.preventDefault()
      const afterElement = getDragAfterElement(container, e.clientY)
      const draggable = document.querySelector('.dragging')
      if (afterElement == null) {
        container.appendChild(draggable)
      } else {
        container.insertBefore(draggable, afterElement)
      }
    })
  })
  
  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
  
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
  }
},[])


const [editDisable, setEditDisable] = useState(true);

const [editInfluData, setEditInfuData] = useState({
  clientName: "", role: "", industry: "", company: "", location:"", product: "",diseaseArea: "", email: "", phoneNum: "",
  comments: "",labels: "",meeting: "",reminders: "",tasks: "", status: "",dateAdded: "", dateStatusChanged: "",
})

const [actionEmailData, setActionEmailData] = useState({
  subject: "", receiver: "", message: "",
})

const [commentData, setCommentData] = useState("")
const [labelData, setLabelData] = useState([])

const [scheduleData, setScheduleData] = useState({
  subject: "", type: "", time: "",addClients: [], addDescription: "",
})


function handleEdit(){
  setEditDisable(prevState => !prevState)
}

function handleEditInflu(e){
  const {name,value} = e.target;
  setEditInfuData(prevData => {
   return {
    ...prevData,
    [name] : value,
   }
  })
}

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


function handleAction(actionType){
  handleActionShow()
  setAction(actionType)
}

function submitEditClient(e){
  e.preventDefault();
  dispatch(editClient(editInfluData))
}



  return (
    <div className='dataConatiner'>
    <Row>
        { data.map((d, index) => {
          return (
        <Col lg={3} key={index}>
          <div className='dataCard' style={{padding: "10px"}}>
            <span className='s1'>{d.headingInner}: <span className='s2'>{d.num}</span></span>
         { [1,2,3,4,5,6].map((a,index) => {
          return (
            <div key={index} draggable="true" className='singleData draggable' style={{padding: "8px",}}>
              <Image src={profilePic} width="50px" onClick={handleEditShow} />
              <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
              <div className='innerDataCard' onClick={handleEditShow} style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <div className='user'>
                  <span style={{fontSize:"13px",}}>Product Name {a}</span>
                </div>
                <div className='info'>
                  <span style={{fontSize:"13px", color: "#A7A9B6"}}><HiLocationMarker color="#2D3779"/> London</span>
                </div>
              </div>
              <div>
              <DropdownButton variant="link"id="dropdown-basic-button" title={<BsThreeDotsVertical />}>
                <Dropdown.Item onClick={() => handleAction('Contact')}>Contact</Dropdown.Item>
                <Dropdown.Item onClick={() => handleAction('Note')}>Note</Dropdown.Item>
                <Dropdown.Item onClick={() => handleAction('Schedule')}>Schedule</Dropdown.Item>
            </DropdownButton>
              </div>
            </div>
          </div>
          )
         }) }
          </div>
          <PaginationConatiner />
        </Col>
          )
        })
        }
      </Row>
      
      
    {/* Edit Modal */}


    <Modal show={editShow} onHide={handleEditClose}>
      <Modal.Body className='campModal'>
        <h2>Edit Influencer</h2>
        <Form>
        <Form.Group className="mb-3" >
            <Form.Label>Client Name</Form.Label>
            <Form.Control disabled={editDisable} name="clientName" value={editInfluData.clientName} onChange={handleEditInflu} type="text" placeholder="Enter Client Name" />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Role</Form.Label>
            <Form.Control disabled={editDisable} name="role" value={editInfluData.role} onChange={handleEditInflu} type="text" placeholder="Enter Role" />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Industry</Form.Label>
            <Form.Select disabled={editDisable} name="industry" value={editInfluData.industry} onChange={handleEditInflu} defaultValue="Choose...">
              <option>--- Please Select ---</option>
              <option>Tech</option>
              <option>Bio</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Company</Form.Label>
            <Form.Control disabled={editDisable} name="company" value={editInfluData.company} onChange={handleEditInflu} type="text" placeholder="Enter Industry" />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Location</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="location"
              options={options}
              placeholder="--- Please Select ---"
              disabled={editDisable} 
              name="location" 
              onChange={(selected) => setEditInfuData(prevData => ({...prevData,location: selected,})
              )}
              selected={editInfluData.location}
            />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Product</Form.Label>
            <Form.Control disabled={editDisable} name="product" value={editInfluData.product}  onChange={handleEditInflu} type="text" placeholder="Enter Product" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        
        <Form.Group className="mb-3" >
            <Form.Label>Disease area</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="diseaseArea"
              options={options}
              placeholder="--- Please Select ---"
              disabled={editDisable} 
              name="diseaseArea" 
              onChange={(selected) => setEditInfuData(prevData => ({...prevData,diseaseArea: selected,})
              )}
              selected={editInfluData.diseaseArea}
            />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control disabled={editDisable} name="email" value={editInfluData.email}  onChange={handleEditInflu} type="email" placeholder="Enter Email address" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Phone number</Form.Label>
            <Form.Control disabled={editDisable} name="phoneNum" value={editInfluData.phoneNum}  onChange={handleEditInflu} type="number" placeholder="Enter Phone number" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Comments</Form.Label>
          <Form.Control disabled={editDisable} name="comments" value={editInfluData.comments}  onChange={handleEditInflu} as="textarea" rows={2} />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Label</Form.Label>
            <Form.Control disabled={editDisable} name="labels" value={editInfluData.labels}  onChange={handleEditInflu} type="text" placeholder="Enter Label" />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Meetings</Form.Label>
            <Form.Control disabled={editDisable} name="meeting" value={editInfluData.meeting}  onChange={handleEditInflu} type="text" placeholder="Enter Meetings" />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Reminders</Form.Label>
            <Form.Control disabled={editDisable} name="reminders" value={editInfluData.reminders}  onChange={handleEditInflu} type="text" placeholder="Enter Reminders" />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Tasks </Form.Label>
            <Form.Control disabled={editDisable} name="tasks" value={editInfluData.tasks}  onChange={handleEditInflu} type="text" placeholder="Enter Tasks" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridState">
          <Form.Label>Status </Form.Label>
          <Form.Select disabled={editDisable} name="status" value={editInfluData.status}  onChange={handleEditInflu} defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>Ongoing</option>
            <option>Done</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridState">
          <Form.Label>Date Added </Form.Label>
          <Form.Control disabled readOnly  value={moment(dateRange[0]).format('LL')} type="text" style={{backgroundColor: "#F8FAFB"}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridState">
          <Form.Label>Date Status Changed </Form.Label>
          <Form.Control disabled readOnly  value={moment(dateRange[1]).format('LL')} type="text" style={{backgroundColor: "#F8FAFB"}} />
        </Form.Group>
        </Form>
        {editDisable && <Button className='primBtn cmmBtn' onClick={handleEdit}style={{width: "100%"}}>Edit</Button>}
        {!editDisable && <Button className='primBtn cmmBtn' style={{width: "100%"}} onClick={submitEditClient}>Save</Button>}
      </Modal.Body>
    </Modal>


    {/* actionModal */}

    <ActionModal
      actionShow={actionShow} 
      handleActionClose={handleActionClose}
      action={action}
      actionContChoose={actionContChoose}
      setActionContChoose={setActionContChoose}
      client={false}
      />

    
    </div>
  )
}
