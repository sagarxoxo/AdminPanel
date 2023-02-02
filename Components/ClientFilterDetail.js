import React, { useRef, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useDispatch } from 'react-redux';
import { filter, filterBySelect } from '../app/store/slices/dashboardSlice';

export default function ClientFilterDetail() {
    const [dateRange, setDateRange] = useState([null, null]);
    const dispatch = useDispatch()
    const [startDate, endDate] = dateRange;
    const ref = useRef();
    const options =["A","B","C","D","EE","FFF","GGG"]
    const optionLabel = ["Product Designer", "UI", "App Design", "UX"]

    const [filterClientData, setFilterClientData] = useState({
      industry: "",company: "", diseaseArea: [], location: [], campaignStatus: "", dateJoined: [], noOfCampMin: "", noOfCampMax: "",
      revenueMin: "", revenueMax: "", locationOfInterest: [], addLabel: [], taskCheckbox1: false,taskCheckbox2: false
    })

    function handleClientFilter(e){
      const {type,name,value, checked} = e.target;
      console.log(name)
      setFilterClientData(prevData => {
       return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
       }
      })
    }

    function submitFilter(e){
      e.preventDefault();
      dispatch(filterBySelect(filterClientData))
    }
  

  return (
    <Col>
    <div className='filterContainer'>
    <Form>
    <Row className="mb-3">
        <Form.Group as={Col}>
            <Form.Label>Industry</Form.Label>
            <Form.Select name="industry" value={filterClientData.industry} onChange={handleClientFilter} defaultValue="Choose...">
                <option>--- Please Select ---</option>
                <option>...</option>
            </Form.Select>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Company</Form.Label>
          <Form.Select name="company" value={filterClientData.company} onChange={handleClientFilter} defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Disease Area</Form.Label>
          <Typeahead
            id="basic-typeahead-single"
            labelKey="diseaseArea"
            options={options}
            placeholder="--- Please Select ---"
            onChange={(selected) => setFilterClientData(prevData => ({...prevData,diseaseArea: selected,})
            )}
            selected={filterClientData.diseaseArea}
            />
          
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Select Location</Form.Label>
          <Typeahead
            id="basic-typeahead-single"
            labelKey="location"
            options={options}
            placeholder="--- Please Select ---"
            onChange={(selected) => setFilterClientData(prevData => ({...prevData,location: selected,})
            )}
            selected={filterClientData.location}
            />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
            <Form.Label>Campaign Status</Form.Label>
            <Form.Select name="campaignStatus" value={filterClientData.campaignStatus} onChange={handleClientFilter} defaultValue="Choose...">
                <option>--- Please Select ---</option>
                <option>...</option>
            </Form.Select>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Date Joined</Form.Label>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update, prevData) => {
              setDateRange(update);
              setFilterClientData(prevData => ({...prevData, dateJoined: update}))
            }}
            isClearable={true}
            placeholderText="Select Start & End Date"
            />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Numbers of Campaign</Form.Label>
          <Row className="mb-6">
            <Form.Group as={Col}>
            <Form.Control type="number" name="noOfCampMin" value={filterClientData.noOfCampMin} onChange={handleClientFilter} placeholder="Min" />
            </Form.Group>
            <Form.Group as={Col}>
            <Form.Control type="number" name="noOfCampMax" value={filterClientData.noOfCampMax} onChange={handleClientFilter} placeholder="Max" />
            </Form.Group>
          </Row>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Revenue</Form.Label>
          <Row className="mb-6">
            <Form.Group as={Col}>
            <Form.Control type="number" name="revenueMin" value={filterClientData.revenueMin} onChange={handleClientFilter} placeholder="Min" />
            </Form.Group>
            <Form.Group as={Col}>
            <Form.Control type="number" name="revenueMax" value={filterClientData.revenueMax} onChange={handleClientFilter} placeholder="Max" />
            </Form.Group>
          </Row>
        </Form.Group>
      </Row>
      <Row>
        <Col xs={3}>
        <Form.Group as={Col}>
            <Form.Label>Location of Interest</Form.Label>
            <Typeahead
                id="basic-typeahead-single"
                labelKey="locationOfInterest"
                options={options}
                placeholder="--- Please Select ---"
                onChange={(selected) => setFilterClientData(prevData => ({...prevData,locationOfInterest: selected,})
                )}
                selected={filterClientData.locationOfInterest}
            />
        </Form.Group>
        </Col>
        <Col xs={6}>
        <Form.Group as={Col}>
          <Form.Label>Add Label</Form.Label>
          <Typeahead
            defaultSelected={optionLabel.slice(0, 2)}
            id="public-methods-example"
            labelKey="addLabel"
            multiple
            options={optionLabel}
            placeholder="Add Label"
            ref={ref}
            onChange={(selected) => setFilterClientData(prevData => ({...prevData,addLabel: selected,})
            )}
            selected={filterClientData.addLabel}
        />
        </Form.Group>
        </Col>
        <Col xs={3}>
        <Form.Group as={Col}>
            <Form.Check type="checkbox" name="taskCheckbox1" value={filterClientData.taskCheckbox1} onChange={handleClientFilter} label="Only those with task" />
        </Form.Group>
        </Col>
      </Row>
    </Form>
    <div className='btnCont' style={{justifyContent: "space-between", }}>
    <div>
        <Form>
            <Form.Group as={Col} className='checkB'>
                <Form.Check type="checkbox" name="taskCheckbox2" value={filterClientData.taskCheckbox2} onChange={handleClientFilter} label="Only those with task" />
            </Form.Group>
        </Form>
    </div>
    <div>
        <Button className='primBtn cmmBtn' onClick={submitFilter}>Filter</Button>
        <Button className='ligBtn cmmBtn'><span className='clrBtn' style={{backgroundColor: "#2D3779"}}>00</span>Clear all filter</Button>
    </div>
    </div>
    </div>

    </Col>
  )
}
