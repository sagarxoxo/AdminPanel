import React, { useState } from "react";
import {
  Button,
  Nav,
  Col,
  Pagination,
  Row,
  Form,
  Container,
} from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { useDispatch } from "react-redux";
import {  filterBySelect } from "../app/store/slices/dashboardSlice";

export default function InfluencerFormTwo() {
  
  const dispatch = useDispatch()

  const options =["A","B","C","D","EE","FFF","GGG"]

  const [filterByAudience, setFilterByAudience] = useState({
    ageMin: "", ageMax: "", agePercentage: "", gender: "", genderPercentage: "", country: [], countryPercentage: "",
    country2: [],countryPercentage2: "", city: "",cityPercentage: "", lang: "", langPercentage: "",
    ethnicity: [], ethnicityPercentage: "", patients: [],patientsPercentage: "", affinity: "", affinityPercentage:"",
    symptoms: "", symptomsPercentage: "",
  })

  function handleFilterByAudience(e){
    const {name, value} = e.target
    setFilterByAudience(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  function submitFilterByInfluencer(e){
    e.preventDefault();
    dispatch(filterBySelect(filterByAudience))
  }


  return (
    <div className="second-form-con">
      <Row>
        <Col>
          <div className="input-con">
            <Form.Label>Age</Form.Label>
            <div className="min-max-input">
              <Form.Control
                style={{ width: "92px" }}
                type="number"
                placeholder="Min"
                name="ageMin"
                value={filterByAudience.ageMin}
                onChange={handleFilterByAudience}
              />
              <Form.Control
                style={{ width: "92px" }}
                type="number"
                placeholder="Max"
                name="ageMax"
                value={filterByAudience.ageMax}
                onChange={handleFilterByAudience}
              />
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <Form.Label>Min</Form.Label>
            <div className="min-max-input">
              <Form.Control
                style={{ width: "92px" }}
                type="number"
                placeholder="0%"
                min="0"
                max="100"
                name="agePercentage"
                value={filterByAudience.agePercentage}
                onChange={handleFilterByAudience}
              />
            </div>
          </div>
        </Col>
        <Col>
          <div className="input-con1">
            <Form.Label>Gender</Form.Label>
            <div className="min-max-input">
              <Form.Select
                style={{ width: "194px" }}
                aria-label="Default select example"
                name="gender"
                value={filterByAudience.gender}
                onChange={handleFilterByAudience}
              >
                <option>--- Please select ---</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
              <Form.Control
                style={{ width: "74px" }}
                type="number"
                placeholder="0%"
                name="genderPercentage"
                value={filterByAudience.genderPercentage}
                onChange={handleFilterByAudience}
              />
            </div>
          </div>
        </Col>
        <Col>
          <div className="input-con1">
            <Form.Label>Country</Form.Label>
            <div className="min-max-input">
              <Typeahead
                  id="basic-typeahead-single"
                  labelKey="country"
                  options={options}
                  placeholder="--- Please Select ---"
                  onChange={(selected) => setFilterByAudience(prevData => ({...prevData,country: selected,})
                  )}
                  selected={filterByAudience.country}
                />
              <Form.Control
                style={{ width: "74px" }}
                type="number"
                placeholder="0%"
                name="countryPercentage"
                value={filterByAudience.countryPercentage}
                onChange={handleFilterByAudience}
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{marginTop: '20px'}}>
      <Col>
        <div className="input-con1">
          <Form.Label>Country</Form.Label>
          <div className="min-max-input">
          <Typeahead
              id="basic-typeahead-single"
              labelKey="country2"
              options={options}
              placeholder="--- Please Select ---"
              onChange={(selected) => setFilterByAudience(prevData => ({...prevData,country2: selected,})
              )}
              selected={filterByAudience.country2}
            />
            <Form.Control
              style={{ width: "74px" }}
              type="number"
              placeholder="0%"
              min="0"
              max="100"
              name="countryPercentage2"
              value={filterByAudience.countryPercentage2}
              onChange={handleFilterByAudience}
            />
          </div>
        </div>
      </Col>
        <Col>
          <div className="input-con1">
            <Form.Label>City</Form.Label>
            <div className="min-max-input">
              <Form.Select
                style={{ width: "194px" }}
                aria-label="Default select example"
                name="city"
                value={filterByAudience.city}
                onChange={handleFilterByAudience}
              >
                <option>--- Please select ---</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Control
                style={{ width: "74px" }}
                type="number"
                placeholder="0%"
                min="0"
                max="100"
                name="cityPercentage"
                value={filterByAudience.cityPercentage}
                onChange={handleFilterByAudience}
              />
            </div>
          </div>
        </Col>
        <Col>
          <div className="input-con1">
            <Form.Label>Language</Form.Label>
            <div className="min-max-input">
              <Form.Select
                style={{ width: "194px" }}
                aria-label="Default select example"
                name="lang"
                value={filterByAudience.lang}
                onChange={handleFilterByAudience}
              >
                <option>--- Please select ---</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Control
                style={{ width: "74px" }}
                type="number"
                placeholder="0%"
                min="0"
                max="100"
                name="langPercentage"
                value={filterByAudience.langPercentage}
                onChange={handleFilterByAudience}
              />
            </div>
          </div>
        </Col>
        </Row>
        <Row style={{marginTop: '20px'}}>
        <Col>
          <div className="input-con1">
            <Form.Label>Ethnicity</Form.Label>
            <div className="min-max-input">
                <Typeahead
                  id="basic-typeahead-single"
                  labelKey="ethnicity"
                  options={options}
                  placeholder="--- Please Select ---"
                  onChange={(selected) => setFilterByAudience(prevData => ({...prevData,ethnicity: selected,})
                  )}
                  selected={filterByAudience.ethnicity}
                />
              <Form.Control
                style={{ width: "74px" }}
                type="number"
                placeholder="0%"
                min="0"
                max="100"
                name="ethnicityPercentage"
                value={filterByAudience.ethnicityPercentage}
                onChange={handleFilterByAudience}
              />
            </div>
          </div>
        </Col>
      <Col>
        <div className="input-con1">
          <Form.Label>Patients</Form.Label>
          <div className="min-max-input">
          <Typeahead
              id="basic-typeahead-single"
              labelKey="patients"
              options={options}
              placeholder="--- Please Select ---"
              onChange={(selected) => setFilterByAudience(prevData => ({...prevData,patients: selected,})
              )}
              selected={filterByAudience.patients}
            />
            <Form.Control
              style={{ width: "74px" }}
              type="number"
              placeholder="0%"
              min="0"
              max="100"
              name="patientsPercentage"
              value={filterByAudience.patientsPercentage}
              onChange={handleFilterByAudience}
            />
          </div>
        </div>
      </Col>
      <Col>
        <div className="input-con1">
          <Form.Label>Brand affinity</Form.Label>
          <div className="min-max-input">
            <Form.Select
              style={{ width: "194px" }}
              aria-label="Default select example"
              name="affinity"
              value={filterByAudience.affinity}
              onChange={handleFilterByAudience}
            >
              <option>Free text entry</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Control
              style={{ width: "74px" }}
              type="number"
              placeholder="0%"
              min="0"
              max="100"
              name="affinityPercentage"
              value={filterByAudience.affinityPercentage}
              onChange={handleFilterByAudience}
            />
          </div>
        </div>
      </Col>
      </Row>
      <Col style={{marginTop: '20px'}}>
        <div className="input-con1">
          <Form.Label>Symptoms</Form.Label>
          <div className="min-max-input">
            <Form.Select
              style={{ width: "194px" }}
              aria-label="Default select example"
              name="symptoms"
              value={filterByAudience.symptoms}
              onChange={handleFilterByAudience}
            >
              <option>Enter to select from entry</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Control
              style={{ width: "74px" }}
              type="number"
              placeholder="0%"
              min="0"
              max="100"
              name="symptomsPercentage"
              value={filterByAudience.symptomsPercentage}
              onChange={handleFilterByAudience}
            />
          </div>
        </div>
      </Col>
      <div className="influencer-buttons-con">
            <div className="influencer-buttons">
              <Button className="filter-button" onClick={submitFilterByInfluencer}>Filter</Button>
              <Button className="clear-filter-button">
                <div className="clear-button">04</div> Clear all filter
              </Button>
            </div>
          </div>
    </div>
  );
}
