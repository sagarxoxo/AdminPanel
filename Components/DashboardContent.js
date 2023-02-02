import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Modal,
  Pagination,
  Row,
} from "react-bootstrap";
import filter from "../public/Images/SlidersHorizontal.png";
import profilePic from "../public/Images/profile-circle-2 1.png";
import { BsInstagram, BsThreeDotsVertical } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import DiscoverInfluencerFilterDetail from "./DiscoverInfluencerFilterDetail";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { Typeahead } from "react-bootstrap-typeahead";
import moment from "moment";
import USAFlag from "../public/Images/usaFlag.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import ActionModal from "./ActionModal";
import {
  addNewInfuencer,
  editInfuencer,
} from "../app/store/slices/dashboardSlice";
import PaginationConatiner from "./PaginationConatiner";
import ExportModal from "./ExportModal";

export default function DashboardContent() {
  const ref = useRef();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editShow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const options = ["A", "B", "C", "D", "EE", "FFF", "GGG"];

  const [showFilter, setShowFilter] = useState(false);

  const [action, setAction] = useState();

  const [actionShow, setActionShow] = useState(false);
  const handleActionClose = () => setActionShow(false);
  const handleActionShow = () => setActionShow(true);

  const [exportShow, setExportShow] = useState(false);
  const handleExportClose = () => setExportShow(false);
  const handleExportShow = () => setExportShow(true);

  const [actionContChoose, setActionContChoose] = useState("Default");

  const optionLabel = ["Product Designer", "UI", "App Design", "UX"];
  const [multiSelections, setMultiSelections] = useState([]);

  const data = [
    {
      headingInner: "Identified",
      num: "89670",
    },
    {
      headingInner: "Contacted",
      num: "79660",
    },
    {
      headingInner: "Registered",
      num: "29670",
    },
  ];

  const [startDate, setStartDate] = useState(new Date());

  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  useEffect(() => {
    const draggables = document.querySelectorAll(".draggable");
    const containers = document.querySelectorAll(".dataCard");
    draggables.forEach((draggable) => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
      });

      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
      });
    });

    containers.forEach((container) => {
      container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector(".dragging");
        if (afterElement == null) {
          container.appendChild(draggable);
        } else {
          container.insertBefore(draggable, afterElement);
        }
      });
    }, []);

    function getDragAfterElement(container, y) {
      const draggableElements = [
        ...container.querySelectorAll(".draggable:not(.dragging)"),
      ];

      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
    }
  }, []);

  const [editDisable, setEditDisable] = useState(true);

  function handleEdit() {
    setEditDisable((prevState) => !prevState);
  }

  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    platform: "",
    email: "",
    diseaseArea: [],
    location: [],
    comments: "",
    labels: [],
    meeting: "",
    reminders: "",
    tasks: "",
    status: "",
  });

  const [newFormData, setNewFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    platform: "",
    email: "",
    diseaseArea: [],
    location: [],
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setEditFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleNewInfluencer(e) {
    const { name, value } = e.target;
    setNewFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleAction(actionType) {
    handleActionShow();
    setAction(actionType);
  }

  function submitNewInfu(e) {
    e.preventDefault();
    dispatch(addNewInfuencer(newFormData));
  }

  function submitEditInfu(e) {
    e.preventDefault();
    dispatch(editInfuencer(editFormData));
  }

  return (
    <div className="mainContent">
      <div className="contentNav">
        <div className="heading">
          <h2>All Influencers</h2>
          <span>More than 290+ new Influencers</span>
        </div>
        <div className="btn-section">
          <Button
            className={
              showFilter ? "outlinedBtn cmmBtn active" : "outlinedBtn cmmBtn"
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
            Export Report
          </Button>
          <Button className="primBtn cmmBtn" onClick={handleShow}>
            Add new Influencer
          </Button>
        </div>
      </div>
      {showFilter && <DiscoverInfluencerFilterDetail />}
      <Row>
        {data.map((d, index) => {
          return (
            <Col lg={4} key={index}>
              <div className="dataCard">
                <span className="s1">
                  {d.headingInner}: <span className="s2">{d.num}</span>
                </span>
                {[1, 2, 3, 4, 5, 6].map((a, index) => {
                  return (
                    <div
                      key={index}
                      draggable="true"
                      className="singleData draggable"
                    >
                      <Image
                        src={profilePic}
                        width="50px"
                        onClick={handleEditShow}
                      />
                      <div className="innerDataCard">
                        <div className="user" onClick={handleEditShow}>
                          <span>
                            <BsInstagram color="#2D3779" size={14} /> Username
                            {a}
                          </span>
                          <span
                            style={{
                              color: "#B5B5C3",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Image src={USAFlag} width="15px" height="15px" />{" "}
                            &nbsp; Heart Disease
                          </span>
                        </div>
                        <div
                          className="info"
                          onClick={handleEditClose}
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <DropdownButton
                            variant="link"
                            id="dropdown-basic-button"
                            title={<BsThreeDotsVertical />}
                          >
                            <Dropdown.Item
                              onClick={() => handleAction("Contact")}
                            >
                              Contact
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleAction("Note")}>
                              Note
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => handleAction("Schedule")}
                            >
                              Schedule
                            </Dropdown.Item>
                          </DropdownButton>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <PaginationConatiner />
            </Col>
          );
        })}
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="campModal">
          <h2>Add New Influencer</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={handleNewInfluencer}
                name="userName"
                value={newFormData.userName}
                type="text"
                placeholder="Enter Username"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={handleNewInfluencer}
                name="firstName"
                value={newFormData.firstName}
                type="text"
                placeholder="Enter First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={handleNewInfluencer}
                name="lastName"
                value={newFormData.lastName}
                type="text"
                placeholder="Last Name"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Platform</Form.Label>
              <Form.Select
                onChange={handleNewInfluencer}
                name="platform"
                value={newFormData.platform}
                defaultValue="Choose..."
              >
                <option>--- Please Select ---</option>
                <option>Instagram</option>
                <option>Tiktok</option>
                <option>Youtube</option>
              </Form.Select>
            </Form.Group>
            <br />
            <Form.Group className="mb-3">
              <Form.Label>Disease area</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                labelKey="diseaseArea"
                options={options}
                placeholder="--- Please Select ---"
                onChange={(selected) =>
                  setNewFormData((prevData) => ({
                    ...prevData,
                    diseaseArea: selected,
                  }))
                }
                selected={newFormData.diseaseArea}
                name="diseaseArea"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleNewInfluencer}
                name="email"
                value={newFormData.email}
                type="email"
                placeholder="Enter Email address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                labelKey="location"
                options={options}
                placeholder="--- Please Select ---"
                onChange={(selected) =>
                  setNewFormData((prevData) => ({
                    ...prevData,
                    location: selected,
                  }))
                }
                selected={newFormData.location}
                name="location"
              />
            </Form.Group>
          </Form>
          <Button
            className="primBtn cmmBtn"
            onClick={submitNewInfu}
            style={{ width: "100%" }}
          >
            Add New Influencer
          </Button>
        </Modal.Body>
      </Modal>

      {/* Edit Modal */}

      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Body className="campModal">
          <h2>Edit Influencer</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                disabled={editDisable}
                name="firstName"
                value={editFormData.firstName}
                onChange={handleChange}
                type="text"
                placeholder="Enter First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                disabled={editDisable}
                name="lastName"
                value={editFormData.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Enter Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                disabled={editDisable}
                name="userName"
                value={editFormData.userName}
                onChange={handleChange}
                type="text"
                placeholder="Enter Username"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label>Platform</Form.Label>
              <Form.Select
                disabled={editDisable}
                name="platform"
                value={editFormData.platform}
                onChange={handleChange}
                defaultValue="Choose..."
              >
                <option>--- Please Select ---</option>
                <option>Instagram</option>
                <option>Tiktok</option>
                <option>Youtube</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                disabled={editDisable}
                name="email"
                value={editFormData.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter Email address"
                style={{ backgroundColor: "#fff" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Disease area</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                labelKey="diseaseArea"
                options={options}
                placeholder="--- Please Select ---"
                disabled={editDisable}
                onChange={(selected) =>
                  setEditFormData((prevData) => ({
                    ...prevData,
                    diseaseArea: selected,
                  }))
                }
                selected={editFormData.diseaseArea}
                name="diseaseArea"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                labelKey="location"
                options={options}
                placeholder="--- Please Select ---"
                onChange={(selected) =>
                  setEditFormData((prevData) => ({
                    ...prevData,
                    location: selected,
                  }))
                }
                selected={editFormData.location}
                name="location"
                disabled={editDisable}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Comments</Form.Label>
              <Form.Control
                disabled={editDisable}
                name="comments"
                value={editFormData.comments}
                onChange={handleChange}
                as="textarea"
                rows={2}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Label</Form.Label>
              <Typeahead
                defaultSelected={optionLabel.slice(0, 1)}
                id="public-methods-example"
                labelKey="labels"
                multiple
                options={optionLabel}
                placeholder="Add Label"
                ref={ref}
                onChange={(selected) =>
                  setEditFormData((prevData) => ({
                    ...prevData,
                    labels: selected,
                  }))
                }
                selected={editFormData.labels}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Meetings</Form.Label>
              <Form.Control
                disabled={editDisable}
                name="meeting"
                value={editFormData.meeting}
                onChange={handleChange}
                type="text"
                placeholder="Enter Meetings"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Reminders</Form.Label>
              <Form.Control
                disabled={editDisable}
                name="reminders"
                value={editFormData.reminders}
                onChange={handleChange}
                type="text"
                placeholder="Enter Reminders"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tasks </Form.Label>
              <Form.Control
                disabled={editDisable}
                name="tasks"
                value={editFormData.tasks}
                onChange={handleChange}
                type="text"
                placeholder="Enter Tasks"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label>Status </Form.Label>
              <Form.Select
                disabled={editDisable}
                name="status"
                value={editFormData.status}
                onChange={handleChange}
                defaultValue="Choose..."
              >
                <option>--- Please Select ---</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Done">Done</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label>Date Added </Form.Label>
              <Form.Control
                disabled
                readOnly
                name="tasks"
                value={moment(dateRange[0]).format("LL")}
                type="text"
                style={{ backgroundColor: "#F8FAFB" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label>Date Status Changed </Form.Label>
              <Form.Control
                disabled
                readOnly
                name="tasks"
                value={moment(dateRange[1]).format("LL")}
                type="text"
                style={{ backgroundColor: "#F8FAFB" }}
              />
            </Form.Group>
          </Form>
          {editDisable && (
            <Button
              className="primBtn cmmBtn"
              onClick={handleEdit}
              style={{ width: "100%" }}
            >
              Edit
            </Button>
          )}
          {!editDisable && (
            <Button
              className="primBtn cmmBtn"
              onClick={submitEditInfu}
              style={{ width: "100%" }}
            >
              Save
            </Button>
          )}
        </Modal.Body>
      </Modal>

      {/* actionModal */}

      <ActionModal
        actionShow={actionShow}
        handleActionClose={handleActionClose}
        action={action}
        actionContChoose={actionContChoose}
        setActionContChoose={setActionContChoose}
        client={true}
      />

      <ExportModal
        exportShow={exportShow}
        handleExportClose={handleExportClose}
        exportFor={"discoverInflu"}
      />
    </div>
  );
}
