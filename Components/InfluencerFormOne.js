import React, { useState } from 'react'
import {
  Button,
  Nav,
  Col,
  Pagination,
  Row,
  Form,
  Container,
} from "react-bootstrap";
import { Typeahead } from 'react-bootstrap-typeahead';
import { useDispatch } from 'react-redux';
import { filter, filterBySelect } from '../app/store/slices/dashboardSlice';



export default function  InfluencerOneForm () {

  const dispatch = useDispatch()

  const options =["A","B","C","D","EE","FFF","GGG"]
  const [multiSelections, setMultiSelections] = useState([]);

  const [filterByInfluencer, setFilterByInfluencer] = useState({
    platform: "", diseaseArea: [], location: [], ageMin: "", ageMax: "", followersMin: "", followersMax: "", EngMin: "",EngMax: "",
    avgLikesMin: "", avgLikesMax: "", avgCommMin: "",avgCommMax: "", multiplerMin: "", multiplerMax: "", realFollowersMin: "",
    realFollowersMax: "", interests: [],mentions: [], hashtags: [], brands: [], campaignsMin: "", campaignsMax: "", 
    totalCampaignsMin: "", totalCampaignsMax: ""
  })
  
  function handleFilterByInfluencer(e){
    const {name, value} = e.target
    setFilterByInfluencer(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  function submitFilterByInfluencer(e){
    e.preventDefault();
    dispatch(filterBySelect(filterByInfluencer))
  }

  return (
    <div>
      <div className="input-box">
        <Container>
          <Row>
            <Col>
              <div className="input-con">
                <Form.Label>Select Platform</Form.Label>
                <Form.Select name="platform" value={filterByInfluencer.platform} onChange={handleFilterByInfluencer} aria-label="Default select example">
                  <option>--- Please select ---</option>
                  <option value="Instagram">Instagram</option>
                  <option value="TikTok">TikTok</option>
                  <option value="Youtube">Youtube</option>
                </Form.Select>
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Select Disease Area</Form.Label>
                <Typeahead
                  id="basic-typeahead-single"
                  labelKey="diseaseArea"
                  options={options}
                  placeholder="--- Please Select ---"
                  onChange={(selected) => setFilterByInfluencer(prevData => ({...prevData,diseaseArea: selected,})
                  )}
                  selected={filterByInfluencer.diseaseArea}
                />
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Select Location</Form.Label>
                <Typeahead
                  id="basic-typeahead-single"
                  labelKey="location"
                  options={options}
                  placeholder="--- Please Select ---"
                  onChange={(selected) => setFilterByInfluencer(prevData => ({...prevData,location: selected,})
                  )}
                  selected={filterByInfluencer.location}
                  
                />
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Age</Form.Label>
                <div className="min-max-input">
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Min"
                    name="ageMin" 
                    value={filterByInfluencer.ageMin} 
                    onChange={handleFilterByInfluencer}
                  />
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Max"
                    name="ageMax" 
                    value={filterByInfluencer.ageMax} 
                    onChange={handleFilterByInfluencer}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <div className="input-con">
                <Form.Label>Followers</Form.Label>
                <div className="min-max-input">
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Min"
                    min="0"
                    name="followersMin" 
                    value={filterByInfluencer.followersMin} 
                    onChange={handleFilterByInfluencer}
                  />
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Max"
                    name="followersMax" 
                    value={filterByInfluencer.followersMax} 
                    onChange={handleFilterByInfluencer}
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Engagement</Form.Label>
                <div className="min-max-input">
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Min" 
                    min="0" 
                    name="EngMin" 
                    value={filterByInfluencer.EngMin} 
                    onChange={handleFilterByInfluencer}
                  />
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Max"
                    max="100"
                    name="EngMax" 
                    value={filterByInfluencer.EngMax} 
                    onChange={handleFilterByInfluencer}
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Average Likes</Form.Label>
                <div className="min-max-input">
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Min"
                    min="0" 
                    name="avgLikesMin" 
                    value={filterByInfluencer.avgLikesMin} 
                    onChange={handleFilterByInfluencer}
                  />
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Max"
                    max="100"
                    name="avgLikesMax" 
                    value={filterByInfluencer.avgLikesMax} 
                    onChange={handleFilterByInfluencer}
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Average Comments</Form.Label>
                <div className="min-max-input">
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Min"
                    min="0" 
                    name="avgCommMin" 
                    value={filterByInfluencer.avgCommMin} 
                    onChange={handleFilterByInfluencer}
                  />
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Max"
                    max="100"
                    name="avgCommMax" 
                    value={filterByInfluencer.avgCommMax} 
                    onChange={handleFilterByInfluencer}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <div className="input-con">
                <Form.Label>Reach Multipler</Form.Label>
                <div className="min-max-input">
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Min"
                    min="100"
                    name="multiplerMin" 
                    value={filterByInfluencer.multiplerMin} 
                    onChange={handleFilterByInfluencer}
                  />
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Max"
                    max="100"
                    name="multiplerMax" 
                    value={filterByInfluencer.multiplerMax} 
                    onChange={handleFilterByInfluencer}
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Real Followers</Form.Label>
                <div className="min-max-input">
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Min"
                    name="realFollowersMin" 
                    value={filterByInfluencer.realFollowersMin} 
                    onChange={handleFilterByInfluencer}
                  />
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Max"
                    name="realFollowersMax" 
                    value={filterByInfluencer.realFollowersMax} 
                    onChange={handleFilterByInfluencer}
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Interests</Form.Label>
                <Typeahead
                  id="basic-typeahead-single"
                  labelKey="interests"
                  options={options}
                  placeholder="--- Please Select ---"
                  onChange={(selected) => setFilterByInfluencer(prevData => ({...prevData,interests: selected,})
                  )}
                  selected={filterByInfluencer.interests}
                />
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Mentions</Form.Label>
                <Typeahead
                  id="basic-typeahead-multiple"
                  labelKey="mentions"
                  multiple
                  options={options}
                  placeholder="--- Please Select ---"
                  onChange={(selected) => setFilterByInfluencer(prevData => ({...prevData,mentions: selected,})
                  )}
                  selected={filterByInfluencer.mentions}
                 />
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <div className="input-con">
                <Form.Label>Hashtags</Form.Label>
                <Typeahead
                  id="basic-typeahead-multiple"
                  labelKey="hashtags"
                  multiple
                  options={options}
                  placeholder="Choose several states..."
                  onChange={(selected) => setFilterByInfluencer(prevData => ({...prevData,hashtags: selected,})
                  )}
                  selected={filterByInfluencer.hashtags}
                 />
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Brands</Form.Label>
                <Typeahead
                  id="basic-typeahead-single"
                  labelKey="brands"
                  options={options}
                  placeholder="--- Please Select ---"
                  onChange={(selected) => setFilterByInfluencer(prevData => ({...prevData,brands: selected,})
                  )}
                  selected={filterByInfluencer.brands}
                />
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Campaigns</Form.Label>
                <div className="min-max-input">
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Min"
                    name="campaignsMin" 
                    value={filterByInfluencer.campaignsMin} 
                    onChange={handleFilterByInfluencer}
                  />
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Max"
                    name="campaignsMax" 
                    value={filterByInfluencer.campaignsMax} 
                    onChange={handleFilterByInfluencer}
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Total Campaigns</Form.Label>
                <div className="min-max-input">
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Min"
                    name="totalCampaignsMin" 
                    value={filterByInfluencer.totalCampaignsMin} 
                    onChange={handleFilterByInfluencer}
                  />
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Max"
                    name="totalCampaignsMax" 
                    value={filterByInfluencer.totalCampaignsMax} 
                    onChange={handleFilterByInfluencer}
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
        </Container>
      </div>
    </div>
  );
}
