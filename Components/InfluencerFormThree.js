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
import { useDispatch } from "react-redux";
import { filterBySelect } from "../app/store/slices/dashboardSlice";

export default function InfluencerFormThree() {

  const dispatch = useDispatch()

  const [filterByPerformance, setFilterByPerformance] = useState({
    cpcMin: "",cpcMax: "", cptMin: "", cptMax: "", postType: "", priceMin:"", priceMax:""
  })

  function handleFilterByPerformace(e){
    const {name, value} = e.target
    setFilterByPerformance(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }
  function submitFilterByInfluencer(e){
    e.preventDefault();
    dispatch(filterBySelect(filterByPerformance))
  }


  return (
    <div className="third-form-con">
      <Row>
        <Col>
          <div className="input-con">
            <Form.Label>Cost per click</Form.Label>
            <div className="min-max-input">
              <Form.Control
                style={{ width: "92px" }}
                type="number"
                placeholder="Min"
                name="cpcMin"
                value={filterByPerformance.cpcMin}
                onChange={handleFilterByPerformace}
              />
              <Form.Control
                style={{ width: "92px" }}
                type="number"
                placeholder="Max"
                name="cpcMax"
                value={filterByPerformance.cpcMax}
                onChange={handleFilterByPerformace}
              />
            </div>
          </div>
        </Col>
        <Col>
          <div className="input-con">
            <Form.Label>Cost per target</Form.Label>
            <div className="min-max-input">
              <Form.Control
                style={{ width: "92px" }}
                type="number"
                placeholder="Min"
                name="cptMin"
                value={filterByPerformance.cptMin}
                onChange={handleFilterByPerformace}
              />
              <Form.Control
                style={{ width: "92px" }}
                type="number"
                placeholder="Max"
                name="cptMax"
                value={filterByPerformance.cptMax}
                onChange={handleFilterByPerformace}
              />
            </div>
          </div>
        </Col>
        <Col>
          <div className="input-con">
            <Form.Label>Post type</Form.Label>
            <Form.Select 
              aria-label="Default select example"
              name="postType"
              value={filterByPerformance.postType}
              onChange={handleFilterByPerformace}
            >
              <option>--- Please select ---</option>
              <option value="Instagram Post">Instagram Post</option>
              <option value="Instagram Reel">Instagram Reel</option>
              <option value="Instagram Story">Instagram Story</option>
              <option value="TikTok Post">TikTok Post</option>
              <option value="Youtube 10 Sec video">Youtube 10 Sec video</option>
              <option value="Youtube 30 Sec video">Youtube 30 Sec video</option>
              <option value="Youtube 60 Sec video">Youtube 60 Sec video</option>
            </Form.Select>
          </div>
        </Col>
        <Col>
          <div className="input-con">
            <Form.Label>Price</Form.Label>
            <div className="min-max-input">
              <Form.Control
                style={{ width: "92px" }}
                type="number"
                placeholder="Min"
                name="priceMin"
                value={filterByPerformance.priceMin}
                onChange={handleFilterByPerformace}
              />
              <Form.Control
                style={{ width: "92px" }}
                type="number"
                placeholder="Max"
                name="priceMax"
                value={filterByPerformance.priceMax}
                onChange={handleFilterByPerformace}
              />
            </div>
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
