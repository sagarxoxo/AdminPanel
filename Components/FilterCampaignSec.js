import React, { useEffect, useState, useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import FilterDetail from "./FilterDetail";
import { FiFilter } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CampaignTable from "./CampaignTable";
import Modal from "react-bootstrap/Modal";
import { Typeahead } from "react-bootstrap-typeahead";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import {
  addNewCampaignInfo,
  addNewCampaignInstruct,
  addNewCampaignTarget,
} from "../app/store/slices/dashboardSlice";
import ExportModal from "./ExportModal";

export default function FilterCampaignSec() {
  const ref = useRef();
  const dispatch = useDispatch();

  const [showFilter, setShowFilter] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [switchNav, setSwitchNav] = useState("info");

  useEffect(() => {
    setSwitchNav("Default");
  }, []);

  const optionLabel = ["Product Designer", "UI", "App Design", "UX"];
  const options = ["A", "B", "C", "D", "EE", "FFF", "GGG"];

  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;

  const [singleSelections, setSingleSelections] = useState([]);
  const [multiSelections, setMultiSelections] = useState([]);

  const [exportShow, setExportShow] = useState(false);
  const handleExportClose = () => setExportShow(false);
  const handleExportShow = () => setExportShow(true);

  const [newCampInfo, setNewCampInfo] = useState({
    campName: "",
    client: [],
    socialMedia: [],
    product: "",
    productInfo: "",
    date: [],
    package: "",
    report: "",
    amount: "",
    targetAud: "",
  });

  const [newCampTarget, setNewCampTarget] = useState({
    noOfInflu: "",
    infuSize: "",
    diseaseArea: [],
    location: "",
    ageRange: [],
    gender: "",
    targetAud: "",
  });

  const [newCampInstruct, setNewCampInstruct] = useState({
    postType: "",
    image: "",
    textArea: "",
  });

  function handleNewCampInfo(e) {
    const { name, value } = e.target;
    setNewCampInfo((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleNewCampTarget(e) {
    const { name, value } = e.target;
    setNewCampTarget((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleNewCampInstruct(e) {
    const { name, value } = e.target;
    setNewCampInstruct((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  console.log(newCampInfo);
  console.log(newCampTarget);
  console.log(newCampInstruct);

  function submitNewCamp(e) {
    e.preventDefault();
    switchNav === "Info"
      ? dispatch(addNewCampaignInfo(newCampInfo))
      : switchNav === "Target"
      ? dispatch(addNewCampaignTarget(newCampTarget))
      : dispatch(addNewCampaignInstruct(newCampInstruct));
  }

  return (
    <div className="mainFilterSec">
      <Row>
        <Col lg={12}>
          <div className="contentNav">
            <div className="heading">
              <h2>Campaigns</h2>
              <span>20 new Campaigns</span>
            </div>
            <div className="btn-section">
              <Button
                className={
                  showFilter
                    ? "outlinedBtn cmmBtn active"
                    : "outlinedBtn cmmBtn"
                }
                onClick={() => setShowFilter((prevState) => !prevState)}
              >
                <FiFilter size={16} /> Filters
                {!showFilter && (
                  <IoIosArrowDown style={{ marginLeft: "10px" }} size={16} />
                )}
                {showFilter && (
                  <IoIosArrowUp style={{ marginLeft: "10px" }} size={16} />
                )}
              </Button>
              <Button className="ligBtn cmmBtn" onClick={handleExportShow}>
                Export Campaigns{" "}
              </Button>
              <Button className="primBtn cmmBtn" onClick={handleShow}>
                Add new Campaign
              </Button>
            </div>
          </div>
        </Col>
        {showFilter && <FilterDetail />}
        <CampaignTable />
      </Row>

      {/* Add New Campagin Button Modal */}

      <Modal className="campModalAdd" show={show} onHide={handleClose}>
        <h2>Add new Campagin</h2>
        <div className="campModalNav">
          <Button
            style={{
              backgroundColor:
                (switchNav === "Info" || switchNav === "Default") && "#2D3779",
            }}
            onClick={() => setSwitchNav("Info")}
          >
            Info
          </Button>
          <Button
            style={{ backgroundColor: switchNav === "Target" && "#2D3779" }}
            onClick={() => setSwitchNav("Target")}
          >
            Target
          </Button>
          <Button
            style={{ backgroundColor: switchNav === "Inst" && "#2D3779" }}
            onClick={() => setSwitchNav("Inst")}
          >
            Instructions
          </Button>
        </div>
        {(switchNav === "Info" || switchNav === "Default") && (
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Campaign Name</Form.Label>
              <Form.Control
                type="text"
                name="campName"
                value={newCampInfo.campName}
                onChange={handleNewCampInfo}
                placeholder="Enter Campaign Name"
                style={{ backgroundColor: "#fff" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label>Client</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                labelKey="client"
                options={options}
                placeholder="--- Please Select ---"
                onChange={(selected) =>
                  setNewCampInfo((prevData) => ({
                    ...prevData,
                    client: selected,
                  }))
                }
                selected={newCampInfo.client}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label>Social media</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                labelKey="socialMedia"
                options={options}
                placeholder="--- Please Select ---"
                onChange={(selected) =>
                  setNewCampInfo((prevData) => ({
                    ...prevData,
                    socialMedia: selected,
                  }))
                }
                selected={newCampInfo.socialMedia}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Product</Form.Label>
              <Form.Control
                type="text"
                name="product"
                value={newCampInfo.product}
                onChange={handleNewCampInfo}
                placeholder="Enter Product"
                style={{ backgroundColor: "#fff" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Product Info</Form.Label>
              <Form.Control
                type="text"
                name="productInfo"
                value={newCampInfo.productInfo}
                onChange={handleNewCampInfo}
                placeholder="Enter Product"
                style={{ backgroundColor: "#fff" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Start & Finish date</Form.Label>
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update, prevData) => {
                  setDateRange(update);
                  setNewCampInfo((prevData) => ({ ...prevData, date: update }));
                }}
                isClearable={true}
                placeholderText="Select Start & Finish date"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Package</Form.Label>
              <Form.Select
                name="package"
                value={newCampInfo.package}
                onChange={handleNewCampInfo}
                defaultValue="Choose..."
              >
                <option>--- Please Select ---</option>
                <option>Package 1</option>
                <option>Package 2</option>
                <option>Package 3</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Report</Form.Label>
              <Form.Select
                name="report"
                value={newCampInfo.report}
                onChange={handleNewCampInfo}
                defaultValue="Choose..."
              >
                <option>--- Please Select ---</option>
                <option>Report 1</option>
                <option>Report 2</option>
                <option>Report 3</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={newCampInfo.amount}
                onChange={handleNewCampInfo}
                placeholder="Enter Amount"
                style={{ backgroundColor: "#fff" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Target Audience Info</Form.Label>
              <Form.Control
                type="text"
                name="targetAud"
                value={newCampInfo.targetAud}
                onChange={handleNewCampInfo}
                placeholder="Enter Target Audience Info"
                style={{ backgroundColor: "#fff" }}
              />
            </Form.Group>

            <Button
              className="primBtn cmmBtn"
              style={{ width: "100%" }}
              onClick={submitNewCamp}
            >
              Add new Campagin
            </Button>
          </Modal.Body>
        )}
        {switchNav === "Target" && (
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Number of Influencers</Form.Label>
              <Form.Control
                type="number"
                name="noOfInflu"
                value={newCampTarget.noOfInflu}
                onChange={handleNewCampTarget}
                placeholder="Enter Number of Influencers"
                style={{ backgroundColor: "#fff" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Influencer size</Form.Label>
              <Form.Select
                name="infuSize"
                value={newCampTarget.infuSize}
                onChange={handleNewCampTarget}
                defaultValue="Choose..."
              >
                <option>--- Please Select ---</option>
                <option>Size 1</option>
                <option>Size 2</option>
                <option>Size 3</option>
              </Form.Select>
            </Form.Group>

            <Form.Group style={{ marginTop: "20px" }}>
              <Form.Label>Disease area</Form.Label>
              <Typeahead
                id="basic-typeahead-multiple"
                labelKey="diseaseArea"
                multiple
                options={options}
                placeholder="--- Please Select ---"
                onChange={(selected) =>
                  setNewCampTarget((prevData) => ({
                    ...prevData,
                    diseaseArea: selected,
                  }))
                }
                selected={newCampTarget.diseaseArea}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label>Location</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                labelKey="location"
                options={options}
                placeholder="--- Please Select ---"
                onChange={(selected) =>
                  setNewCampTarget((prevData) => ({
                    ...prevData,
                    location: selected,
                  }))
                }
                selected={newCampTarget.location}
              />
            </Form.Group>

            <Form.Group style={{ marginTop: "20px" }}>
              <Form.Label>Age range</Form.Label>
              <Typeahead
                id="basic-typeahead-multiple"
                labelKey="ageRange"
                multiple
                options={options}
                placeholder="--- Please Select ---"
                onChange={(selected) =>
                  setNewCampTarget((prevData) => ({
                    ...prevData,
                    ageRange: selected,
                  }))
                }
                selected={newCampTarget.ageRange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                name="gender"
                value={newCampTarget.gender}
                onChange={handleNewCampTarget}
                defaultValue="Choose..."
              >
                <option>--- Please Select ---</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Target audience info</Form.Label>
              <Form.Control
                type="text"
                name="targetAud"
                value={newCampTarget.targetAud}
                onChange={handleNewCampTarget}
                placeholder="Enter Target audience info"
                style={{ backgroundColor: "#fff" }}
              />
            </Form.Group>

            <Button
              className="primBtn cmmBtn"
              style={{ width: "100%" }}
              onClick={submitNewCamp}
            >
              Add new Campagin
            </Button>
          </Modal.Body>
        )}
        {switchNav === "Inst" && (
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Post type</Form.Label>
              <Form.Select
                name="postType"
                value={newCampInstruct.postType}
                onChange={handleNewCampInstruct}
                defaultValue="Choose..."
              >
                <option>--- Please Select ---</option>
                <option>Reel</option>
                <option>Shorts</option>
                <option>IGTV</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Image:</Form.Label>
              <br />
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setNewCampInstruct({ ...newCampInstruct, image: base64 })
                }
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                name="textArea"
                value={newCampInstruct.textArea}
                onChange={handleNewCampInstruct}
                rows={3}
              />
            </Form.Group>

            <Button
              className="primBtn cmmBtn"
              style={{ width: "100%" }}
              onClick={submitNewCamp}
            >
              Add new Campagin
            </Button>
          </Modal.Body>
        )}
      </Modal>

      {/* export Modal */}
      <ExportModal
        exportShow={exportShow}
        handleExportClose={handleExportClose}
        exportFor={"campaign"}
      />
    </div>
  );
}
