import React, { useRef, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Modal,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import ProfilePic from "../public/Images/profile-circle-2 1profil.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import moment from "moment/moment";
import { MdOutlineDateRange } from "react-icons/md";
import Image from "next/image";
import { Typeahead } from "react-bootstrap-typeahead";
import ClientDetailsPopUp from "./ClientDetailsPopUp";
import Link from "next/link";
import { useDispatch } from "react-redux";
import ActionModal from "./ActionModal";
import PaginationConatiner from "./PaginationConatiner";

export default function CampaignTable() {
  const ref = useRef();
  const dispatch = useDispatch();

  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  let [isActive, setIsActive] = useState("Preparation");
  const [tableChange, setTableChange] = useState("Preparation");

  const [action, setAction] = useState();

  const [actionShow, setActionShow] = useState(false);
  const handleActionClose = () => setActionShow(false);
  const handleActionShow = () => setActionShow(true);

  const [showAlert, setShowAlert] = useState(false);
  const handleAlertClose = () => setShowAlert(false);
  const handleAlertShow = () => {
    setShowAlert(true);
    handleActionClose();
  };

  const optionLabel = ["Product Designer", "UI", "App Design", "UX"];
  const options = ["A", "B", "C", "D", "EE", "FFF", "GGG"];

  const [actionContChoose, setActionContChoose] = useState("Default");
  const [multiSelections, setMultiSelections] = useState([]);

  const [startDate, setStartDate] = useState(new Date());

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

  function handleSwitch(camp) {
    setIsActive((isActive = camp));
    setTableChange(camp);
  }

  function handleAction(actionType) {
    handleActionShow();
    setAction(actionType);
  }

  return (
    <Col lg={12}>
      <div className="campainTableContainer" style={{ overflowX: "auto" }}>
        <div className="miniNav">
          <Button
            variant="link"
            className={`switchBtn1 ${
              isActive === "Preparation" ? "activeBtn" : "inactiveBtn"
            }`}
            onClick={() => {
              handleSwitch("Preparation");
            }}
          >
            Campaigns in preparation<span>03</span>
          </Button>
          <Button
            variant="link"
            className={`switchBtn1 ${
              isActive === "Ongoing" ? "activeBtn" : "inactiveBtn"
            }`}
            onClick={() => {
              handleSwitch("Ongoing");
            }}
          >
            Ongoing campaigns<span>01</span>
          </Button>
          <Button
            variant="link"
            className={`switchBtn1 ${
              isActive === "Finished" ? "activeBtn" : "inactiveBtn"
            }`}
            onClick={() => {
              handleSwitch("Finished");
            }}
          >
            Finished Campaigns<span>02</span>
          </Button>
          <Button
            variant="link"
            className={`switchBtn1 ${
              isActive === "Report" ? "activeBtn" : "inactiveBtn"
            }`}
            onClick={() => {
              handleSwitch("Report");
            }}
          >
            Report Sent<span>06</span>
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
              <th>Actions</th>
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
                        <Link href="singlecampaignstable" passHref>
                          <Image src={ProfilePic} width="50px" height="50px" />
                        </Link>
                      </div>
                      <div>
                        <span>Minhas Asif</span>
                        <span>Multiple Sclerosis</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    Depression App{" "}
                    <p style={{ fontSize: "12px" }}>
                      {" "}
                      (Table for {tableChange})
                    </p>
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
                  <td>50</td>
                  <td>$700</td>
                  <td>
                    <DropdownButton
                      variant="link"
                      id="dropdown-basic-button"
                      title={<BsThreeDotsVertical />}
                    >
                      <Dropdown.Item onClick={() => handleAction("StartCamp")}>
                        Start campaign
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleAction("Contact")}>
                        Contact
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleAction("Note")}>
                        Note
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleAction("Schedule")}>
                        Schedule
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
    </Col>
  );
}
