import React, { useRef, useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import moment from "moment/moment";
import ProfilePic from "../public/Images/profile-circle-2 1profil.png";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import DateNoti from "../Components/DateNoti";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SingleCampaignsTable() {
  const ref = useRef();
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const [action, setAction] = useState();

  const [actionShow, setActionShow] = useState(false);
  const handleActionClose = () => setActionShow(false);
  const handleActionShow = () => setActionShow(true);

  const optionLabel = ["Product Designer", "UI", "App Design", "UX"];
  const options = ["A", "B", "C", "D", "EE", "FFF", "GGG"];

  const [actionContChoose, setActionContChoose] = useState("Default");
  const [multiSelections, setMultiSelections] = useState([]);

  const [startDate, setStartDate] = useState(new Date());

  function handleAction(actionType) {
    handleActionShow();
    setAction(actionType);
  }
  return (
    <Row>
      <Col lg={9} className="TableCol">
        <h2 className="heading">Single Campagain Table</h2>
        <Table className="singleCampTable" style={{ overflowX: "auto" }}>
          <thead className="custTableHead">
            <tr>
              <th>Campagin</th>
              <th>Campaign status</th>
              <th>Status Change</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((num, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="userinfo">
                      <div style={{ margin: "0px 10px" }}>
                        <Image src={ProfilePic} width="50px" height="50px" />
                      </div>
                      <div>
                        <span>Minhas Asif</span>
                        <span>Multiple Sclerosis</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    Depression App <p style={{ fontSize: "12px" }}></p>
                  </td>
                  <td>
                    <div className="dateBox">
                      {`${moment(dateRange[0]).format("LL")} - ${moment(
                        dateRange[1]
                      ).format("LL")}`}{" "}
                      <MdOutlineDateRange
                        style={{ marginLeft: "5px" }}
                        size={20}
                      />
                    </div>
                  </td>
                  <td>$700</td>
                  <td>
                    <DropdownButton
                      variant="link"
                      id="dropdown-basic-button"
                      title={<BsThreeDotsVertical />}
                    >
                      <Dropdown.Item onClick={() => handleAction("Contact")}>
                        Contact
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleAction("Note")}>
                        Note
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleAction("Schedule")}>
                        Schedule
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleAction("Remove")}>
                        Remove
                      </Dropdown.Item>
                    </DropdownButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
      <Col lg={3}>
        <DateNoti />
      </Col>

      {/* actionModal */}

      <Modal show={actionShow} onHide={handleActionClose}>
        {action === "StartCamp" && (
          <Modal.Body className="actdionModal">
            <h2>Start campaign</h2>

            <div className="actionDm">
              <div className="mvBtnSec">
                <Button>Campaigns in preparation</Button> to{" "}
                <Button>Ongoing campaigns</Button>
              </div>
              <div className="btnRightCont">
                <Button
                  className="primBtn cmmBtn sendBtn"
                  onClick={handleAlertShow}
                >
                  Move
                </Button>
              </div>
            </div>
          </Modal.Body>
        )}

        {action === "Contact" && (
          <Modal.Body className="actdionModal">
            <h2>Contact</h2>

            <div className="actionDm">
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter message"
                  style={{ backgroundColor: "#fff" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Receiver</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter message"
                  style={{ backgroundColor: "#fff" }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  style={{ backgroundColor: "#fff" }}
                />
              </Form.Group>
              <div className="btnRightCont">
                <Button className="primBtn cmmBtn sendBtn">Send</Button>
              </div>
            </div>
          </Modal.Body>
        )}

        {action === "Note" && (
          <Modal.Body className="actdionModal">
            <h2>Note</h2>
            <Form.Select
              onChange={(e) => setActionContChoose(e.target.value)}
              defaultValue="Choose..."
            >
              <option>--- Please Select ---</option>
              <option>Comment</option>
              <option>Label</option>
            </Form.Select>
            {(actionContChoose === "Default" ||
              actionContChoose === "Comment") && (
              <div className="actionDm">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    style={{ backgroundColor: "#fff" }}
                  />
                </Form.Group>
                <div className="btnRightCont">
                  <Button className="primBtn cmmBtn sendBtn">Add Text</Button>
                </div>
              </div>
            )}
            {actionContChoose === "Label" && (
              <div className="actionLabel">
                <Form.Group className="mb-3" controlId="formGridState">
                  <Form.Label>Add Label</Form.Label>
                  <Typeahead
                    defaultSelected={optionLabel.slice(0, 1)}
                    id="public-methods-example"
                    labelKey="name"
                    multiple
                    options={optionLabel}
                    placeholder="Add Label"
                    ref={ref}
                  />
                </Form.Group>
                <div className="btnRightCont">
                  <Button className="primBtn cmmBtn sendBtn">Save</Button>
                </div>
              </div>
            )}
          </Modal.Body>
        )}

        {action === "Schedule" && (
          <Modal.Body className="actdionModal">
            <h2>Schedule</h2>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Add Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                style={{ backgroundColor: "#fff" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Type</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>--- Please Select ---</option>
                <option>Meeting</option>
                <option>Task</option>
                <option>Reminder</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Time</Form.Label>
              <DatePicker
                selected={scheduleData.time}
                onChange={(date) => setStartDate(date)}
                locale="pt-BR"
                showTimeSelect
                timeFormat="p"
                timeIntervals={15}
                dateFormat="Pp"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Add Clients</Form.Label>
              <Typeahead
                id="basic-typeahead-multiple"
                labelKey="name"
                multiple
                onChange={setMultiSelections}
                options={options}
                placeholder="--- Please Select ---"
                selected={multiSelections}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Add Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                style={{ backgroundColor: "#fff" }}
              />
            </Form.Group>
            <div className="btnRightCont">
              <Button className="primBtn cmmBtn sendBtn">Schedule</Button>
            </div>
          </Modal.Body>
        )}

        {action === "Remove" && (
          <Modal.Body className="actdionModal">
            <h2>Are you sure you want remove this campaign?</h2>

            <div className="btnCenterCont">
              <Button className="primBtn cmmBtn sendBtn">Yes</Button>
            </div>
          </Modal.Body>
        )}
      </Modal>
    </Row>
  );
}
