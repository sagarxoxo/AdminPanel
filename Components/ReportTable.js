import React, { useRef, useState } from "react";
import {
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Pagination,
  Row,
  Table,
  Button,
  Modal,
} from "react-bootstrap";
import ProfilePic from "../public/Images/profile-circle-2 1profil.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import ReportModal from "./ReportsModal";
import moment from "moment/moment";
import { MdOutlineDateRange } from "react-icons/md";
import Image from "next/image";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Link from "next/link";
import ActionModal from "./ActionModal";
import PaginationConatiner from "./PaginationConatiner";

export default function ReportTable() {
  const ref = useRef();

  const [action, setAction] = useState();

  const [actionShow, setActionShow] = useState(false);
  const handleActionClose = () => setActionShow(false);
  const handleActionShow = () => setActionShow(true);

  const [infuDetailShow, setInfuDetailShow] = useState(false);
  const handleInfuDetailClose = () => setInfuDetailShow(false);
  const handleInfuDetailShow = () => setInfuDetailShow(true);

  const [actionContChoose, setActionContChoose] = useState("Default");
  const [multiSelections, setMultiSelections] = useState([]);

  const optionLabel = ["Product Designer", "UI", "App Design", "UX"];
  const options = ["A", "B", "C", "D", "EE", "FFF", "GGG"];

  function handleChange() {}

  function handleAction(actionType) {
    handleActionShow();
    setAction(actionType);
  }

  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;

  const [modalShow, setModalShow] = React.useState(false);
  let [isActive, setIsActive] = useState("Tobecreated");
  const [tableChange, setTableChange] = useState("Preparation");

  function handleSwitch(camp) {
    setIsActive((isActive = camp));
    setTableChange(camp);
  }

  const [actionEmailData, setActionEmailData] = useState({
    subject: "",
    receiver: "",
    message: "",
  });

  const [commentData, setCommentData] = useState("");
  const [labelData, setLabelData] = useState([]);

  const [scheduleData, setScheduleData] = useState({
    subject: "",
    type: "",
    time: "",
    addClients: [],
    addDescription: "",
  });

  function handleEmail(e) {
    const { name, value } = e.target;
    setActionEmailData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleSchedule(e) {
    const { name, value } = e.target;
    setScheduleData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  console.log(scheduleData, actionEmailData, commentData, labelData);

  return (
    <Col lg={12}>
      <div className="campainTableContainer" style={{ overflowX: "auto" }}>
        <div className="miniNav">
          <Button
            variant="link"
            className={`switchBtn1 ${
              isActive === "Tobecreated" ? "activeBtn" : "inactiveBtn"
            }`}
            onClick={() => {
              handleSwitch("Tobecreated");
            }}
          >
            To be created<span>03</span>
          </Button>
          <Button
            variant="link"
            className={`switchBtn1 ${
              isActive === "Tobesent" ? "activeBtn" : "inactiveBtn"
            }`}
            onClick={() => {
              handleSwitch("Tobesent");
            }}
          >
            To be sent<span>01</span>
          </Button>
          <Button
            variant="link"
            className={`switchBtn1 ${
              isActive === "Awaitingfeedback" ? "activeBtn" : "inactiveBtn"
            }`}
            onClick={() => {
              handleSwitch("Awaitingfeedback");
            }}
          >
            Awaiting feedback<span>02</span>
          </Button>
          <Button
            variant="link"
            className={`switchBtn1 ${
              isActive === "Approved" ? "activeBtn" : "inactiveBtn"
            }`}
            onClick={() => {
              handleSwitch("Approved");
            }}
          >
            Approved<span>06</span>
          </Button>
        </div>
        <Table>
          <thead className="custTableHead">
            <tr>
              <th>
                {" "}
                <Form>
                  <Form.Check type="checkbox" label="Clients" />
                </Form>
              </th>
              <th>Product</th>
              <th>Start & Finish Date</th>
              <th>Influencers</th>
              <th>Budget</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((num, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="userinfo">
                      <Form>
                        <Form.Check type="checkbox" />
                      </Form>
                      <div style={{ margin: "0px 10px" }}>
                        <Link href="singlereporttable" passHref>
                          <Image src={ProfilePic} width="50px" height="50px" />
                        </Link>
                      </div>
                      <div>
                        <span>Minhas Asif</span>
                        <span>Multiple Sclerosis</span>
                      </div>
                    </div>
                  </td>
                  <td>Depression</td>
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
                  <td>50</td>
                  <td>$700</td>
                  <td>
                    <DropdownButton
                      variant="link"
                      id="dropdown-basic-button"
                      title={<BsThreeDotsVertical />}
                    >
                      {isActive === "Tobecreated" && (
                        <Dropdown.Item onClick={() => setModalShow(true)}>
                          Create report
                        </Dropdown.Item>
                      )}
                      {isActive === "Tobesent" && (
                        <div>
                          <Dropdown.Item
                            onClick={() => handleAction("Contact")}
                          >
                            Send
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handleAction("Download")}
                          >
                            Download
                          </Dropdown.Item>
                        </div>
                      )}
                      {isActive === "Awaitingfeedback" && (
                        <div>
                          {" "}
                          <Dropdown.Item onClick={() => handleAction("Appr")}>
                            Approved
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handleAction("Download")}
                          >
                            Download
                          </Dropdown.Item>
                        </div>
                      )}
                      {isActive === "Approved" && (
                        <Dropdown.Item onClick={() => handleAction("Download")}>
                          Download
                        </Dropdown.Item>
                      )}
                      <Dropdown.Item onClick={() => handleAction("Contact")}>
                        Delivered
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
        <div style={{ float: "right", marginTop: "20px" }}>
          <PaginationConatiner />
        </div>
      </div>

      {/* actionModal */}

      <ActionModal
        actionShow={actionShow}
        handleActionClose={handleActionClose}
        action={action}
        actionContChoose={actionContChoose}
        setActionContChoose={setActionContChoose}
        client={false}
      />

      <ReportModal show={modalShow} onHide={() => setModalShow(false)} />
    </Col>
  );
}
