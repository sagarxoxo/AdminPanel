import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useDispatch } from 'react-redux';
import { filterBySelect } from '../app/store/slices/dashboardSlice';


export default function FilterDetail() {

  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const options =["A","B","C","D","EE","FFF","GGG"]

  const [filterData, setFilterData] = useState({
    company: "", client: "", location: [],diseaseArea: [], platform: "", noOfInfuMin: "", noOfInfuMax:"", influSize: "", prompType: "", 
    startDate: "", endDate: "", budgetMin: "", budgetMax: ""
  })
  
  function handleFilter(e){
    const {name, value} = e.target
    setFilterData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  function submitFilter(e){
    e.preventDefault();
    dispatch(filterBySelect(filterData))
  }
  return (
    <Col>
    <div className='filterContainer'>
    <Form>
    <Row className="mb-3">
        <Form.Group as={Col} >
            <Form.Label>Company</Form.Label>
            <Form.Select name="company" value={filterData.company} onChange={handleFilter} defaultValue="Choose...">
                <option>--- Please Select ---</option>
                <option>...</option>
            </Form.Select>
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>Client</Form.Label>
          <Form.Select  name="client" value={filterData.client} onChange={handleFilter} defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>Location</Form.Label>
          <Typeahead
            id="basic-typeahead-single"
            labelKey="location"
            options={options}
            placeholder="--- Please Select ---"
            onChange={(selected) => setFilterData(prevData => ({...prevData,location: selected,})
            )}
            selected={filterData.location}
            />
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>Disease Area</Form.Label>
          <Typeahead
            id="basic-typeahead-single"
            labelKey="diseaseArea"
            options={options}
            placeholder="--- Please Select ---"
            onChange={(selected) => setFilterData(prevData => ({...prevData,diseaseArea: selected,})
            )}
            selected={filterData.diseaseArea}
            />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} >
            <Form.Label>Platform</Form.Label>
            <Form.Select  name="platform" value={filterData.platform} onChange={handleFilter} defaultValue="Choose...">
                <option>--- Please Select ---</option>
                <option>...</option>
            </Form.Select>
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>Numbers of Influencer</Form.Label>
          <Row className="mb-6">
            <Form.Group as={Col} >
            <Form.Control type="number"  name="noOfInfuMin" value={filterData.noOfInfuMin} onChange={handleFilter} placeholder="Min" InputProps={{ inputProps: { min: 0, max: 10 } }} />
            </Form.Group>
            <Form.Group as={Col} >
            <Form.Control type="number"  name="noOfInfuMax" value={filterData.noOfInfuMax} onChange={handleFilter} placeholder="Max" />
            </Form.Group>
          </Row>
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>Influencer Size</Form.Label>
          <Form.Select  name="influSize" value={filterData.influSize} onChange={handleFilter} defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>Promotion Type</Form.Label>
          <Form.Select  name="prompType" value={filterData.prompType} onChange={handleFilter} defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} >
            <Form.Label>Start</Form.Label>
            <DatePicker
              selected={startDate}
              onChange={(date, prevData) =>  {
                setStartDate(date)
                setFilterData(prevData => ({...prevData, startDate: date}))}}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              isClearable={true}
              placeholderText="Entry date range"
            />
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>End</Form.Label>
          <DatePicker
              selected={endDate}
              onChange={(date, prevData) =>  {
                setEndDate(date)
                setFilterData(prevData => ({...prevData, endDate: date}))}}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              isClearable={true}
              placeholderText="Entry date range"
              value={filterData.endDate}
            />
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>Budget</Form.Label>
          <Row className="mb-3">
            <Form.Group as={Col} >
            <Form.Control type="number"  name="budgetMin" value={filterData.budgetMin} onChange={handleFilter} placeholder="Min" />
            </Form.Group>
            <Form.Group as={Col} >
            <Form.Control type="number"  name="budgetMax" value={filterData.budgetMax} onChange={handleFilter} placeholder="Max" />
            </Form.Group>
          </Row>
        </Form.Group>
        <Form.Group as={Col} >
          
        </Form.Group>
      </Row>
    </Form>
    <div className='btnCont'>
        <Button className='primBtn cmmBtn' onClick={submitFilter}>Filter</Button>
        <Button className='ligBtn cmmBtn'><span className='clrBtn'>00</span>Clear all filter</Button>
    </div>
    </div>
    </Col>
  )
}
