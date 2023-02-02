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
import { filterBySelect } from "../app/store/slices/dashboardSlice";


export default function InfluencerFormFour() {

  const dispatch = useDispatch()

  const options =["A","B","C","D","EE","FFF","GGG"]

  const [filterByCampaign, setFilterByCampaign] = useState({
    influencersNeeded: "", audienceMin: "", audienceMax: "", priorize: []
  })

  
  function handleFilterByCampaign(e){
    const {name, value} = e.target
    setFilterByCampaign(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }
  function submitFilterByInfluencer(e){
    e.preventDefault();
    dispatch(filterBySelect(filterByCampaign))
  }

  return (
    <div className="input-box">
      <Row>
        <Col>
          <div className="input-con">
            <Form.Label>Influencers needed</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="Influencers needed"
              name="influencersNeeded"
              value={filterByCampaign.influencersNeeded}
              onChange={handleFilterByCampaign}
                 />
          </div>
        </Col>
        <Col>
          <div className="input-con">
            <Form.Label>Audience overlap</Form.Label>
            <div className="min-max-input">
              <Form.Control
                style={{ width: "92px" }}
                type="number"
                placeholder="Min"
                min="0"
                name="audienceMin"
                value={filterByCampaign.audienceMin}
                onChange={handleFilterByCampaign}
              />
              <Form.Control
                style={{ width: "92px" }}
                type="number"
                placeholder="Max"
                max="0"
                name="audienceMax"
                value={filterByCampaign.audienceMax}
                onChange={handleFilterByCampaign}
              />
            </div>
          </div>
        </Col>
        <Col>
          <div className="input-con">
            <Form.Label>Priorize by</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="priorize"
              options={options}
              placeholder="--- Please Select ---"
              onChange={(selected) => setFilterByCampaign(prevData => ({...prevData,priorize: selected,})
              )}
              selected={filterByCampaign.priorize}
            />
          </div>
        </Col>
      </Row>
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
