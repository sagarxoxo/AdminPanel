import React, { useRef, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useDispatch } from 'react-redux';
import { filter, filterBySelect } from '../app/store/slices/dashboardSlice';

export default function DiscoverInfluencerFilterDetail() {

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const ref = useRef();
    const dispatch = useDispatch()
    const options =["A","B","C","D","EE","FFF","GGG"]
    const optionLabel = ["Product Designer", "UI", "App Design", "UX"]

    const [filterData, setFilterData] = useState({
      platform: "", diseaseArea: [], location: [], followersMin: "",followersMax: "", ageMin: "",  ageMax: "", statusMin: "", 
      statusMax: "",addLabel: [], thoseWithTask: false, 
    })
    
    function handleFilter(e){
      const {type, name, checked, value} = e.target;
      setFilterData(prevData => {
        return {
          ...prevData,
          [name]:type === "checkbox" ? checked : value,
        }
        
      })
    }

    function submitFilter(e){
      e.preventDefault();
      dispatch(filterBySelect(filterData))
    }
    console.log(filterData)

    
  return (
    <Row>

    <Col>
    <div className='filterContainer'>
    <Form>
    <Row className="mb-3">
        <Form.Group as={Col} >
            <Form.Label>Platform</Form.Label>
            <Form.Select name="platform" value={filterData.platform} onChange={handleFilter} defaultValue="Choose...">
                <option>--- Please Select ---</option>
                <option>Instagram</option>
                <option>Youtube</option>
                <option>Tiktok</option>
            </Form.Select>
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>Disease Area</Form.Label>
          <Typeahead
            id="basic-typeahead-single"
            labelKey="diseaseArea"
            options={options}
            placeholder="--- Please Select ---"
            name="diseaseArea"
            onChange={(selected) => setFilterData(prevData => ({...prevData,diseaseArea: selected,})
              )}
            selected={filterData.diseaseArea}
            />
          
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>Location</Form.Label>
          <Typeahead
            id="basic-typeahead-single"
            labelKey="location"
            options={options}
            placeholder="--- Please Select ---"
            name="location"
            onChange={(selected) => setFilterData(prevData => ({...prevData,location: selected,})
              )}
            selected={filterData.location}

            />
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>Followers</Form.Label>
          <Row className="mb-6">
            <Form.Group as={Col} >
            <Form.Control type="number" name="followersMin" value={filterData.followersMin} onChange={handleFilter} placeholder="Min" />
            </Form.Group>
            <Form.Group as={Col} >
            <Form.Control type="number" name="followersMax" value={filterData.followersMax} onChange={handleFilter} placeholder="Max" />
            </Form.Group>
          </Row>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} >
          <Form.Label>Age</Form.Label>
          <Row className="mb-6">
            <Form.Group as={Col} >
            <Form.Control type="number" name="ageMin" value={filterData.ageMin} onChange={handleFilter} placeholder="Min" />
            </Form.Group>
            <Form.Group as={Col} >
            <Form.Control type="number" name="ageMax" value={filterData.ageMax} onChange={handleFilter} placeholder="Max" />
            </Form.Group>
          </Row>
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>Status</Form.Label>
          <Row className="mb-6">
            <Form.Group as={Col} >
            <Form.Control type="text" name="statusMin"  value={filterData.statusMin} onChange={handleFilter} placeholder="Min" />
            </Form.Group>
            <Form.Group as={Col} >
            <Form.Control type="text" name="statusMax" value={filterData.statusMax} onChange={handleFilter} placeholder="Max" />
            </Form.Group>
          </Row>
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>Add Label</Form.Label>
            <Typeahead
              defaultSelected={optionLabel.slice(0, 1)}
              id="public-methods-example"
              labelKey="addLabel"
              multiple
              options={optionLabel}
              placeholder="Add Label"
              ref={ref}
              onChange={(selected) => setFilterClientData(prevData => ({...prevData,addLabel: selected,})
              )}
              selected={filterData.addLabel}
          />
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Check type="checkbox" name="thoseWithTask" value={filterData.thoseWithTask} onChange={handleFilter} label="Only those with task" />
        </Form.Group>
      </Row>
    </Form>
    <div className='btnCont' style={{justifyContent: "space-between", }}>
    <div>
       
    </div>
    <div>
        <Button className='primBtn cmmBtn' onClick={submitFilter}>Filter</Button>
        <Button className='ligBtn cmmBtn'><span className='clrBtn' style={{backgroundColor: "#2D3779"}}>00</span>Clear all filter</Button>
    </div>
    </div>
    </div>

    </Col>
    </Row>
  )
}
