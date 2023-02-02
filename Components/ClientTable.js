import React, { useRef, useState } from "react";
import {
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
import Image from "next/image";
import { Typeahead } from "react-bootstrap-typeahead";
import moment from "moment";
import ClientDetailsPopUp from "./ClientDetailsPopUp";
import { useDispatch } from "react-redux";
import ActionModal from "./ActionModal";
import PaginationConatiner from "./PaginationConatiner";

export default function ClientTable() {
  const ref = useRef();
  const dispatch = useDispatch();
  const [action, setAction] = useState();

  const [actionShow, setActionShow] = useState(false);
  const handleActionClose = () => setActionShow(false);
  const handleActionShow = () => setActionShow(true);

  const [clientDetailShow, setClientDetailShow] = useState(false);
  const handleClientDetailClose = () => setClientDetailShow(false);
  const handleClientDetailShow = () => setClientDetailShow(true);

  const optionLabel = ["Product Designer", "UI", "App Design", "UX"];
  const options = ["A", "B", "C", "D", "EE", "FFF", "GGG"];

  const [startDate, setStartDate] = useState(new Date());

  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const [actionContChoose, setActionContChoose] = useState("Default");
  const [multiSelections, setMultiSelections] = useState([]);

  const [selectAll, setSelectAll] = useState(false);

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

  function handleCheckAll() {
    setSelectAll((prevState) => !prevState);
  }

  function handleAction(actionType) {
    handleActionShow();
    setAction(actionType);
  }

  function handleCheckBox() {}

  return (
    <Col lg={12}>
      <div style={{ overflowX: "auto" }}>
        <Table>
          <thead className="custTableHead">
            <tr>
              <th>
                {" "}
                <Form>
                  <Form.Check
                    type="checkbox"
                    label="Username"
                    name="Username"
                    id="Username"
                    onChange={handleCheckAll}
                    defaultChecked={selectAll}
                  />
                </Form>
              </th>
              <th className="center">Locations</th>
              <th className="center">Disease Area</th>
              <th className="center">Campaigns</th>
              <th className="center">Revenue</th>
              <th className="center">Label</th>
              <th className="center">Tasks</th>
              <th className="center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((num, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="userinfo">
                      <Form>
                        <Form.Check
                          type="checkbox"
                          checked={selectAll}
                          onChange={handleCheckBox}
                        />
                      </Form>
                      <div
                        className="imgTableProfile"
                        onClick={handleClientDetailShow}
                      >
                        <Image src={ProfilePic} width="50px" height="50px" />
                      </div>
                      <div onClick={handleClientDetailShow}>
                        <span>Minhas Asif</span>
                        <span>Multiple Sclerosis</span>
                      </div>
                    </div>
                  </td>
                  <td className="center">00</td>
                  <td className="center">10</td>
                  <td className="center">11</td>
                  <td className="center">CHF300</td>
                  <td className="center">Label</td>
                  <td className="center">Task</td>
                  <td className="center">
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
                    </DropdownButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <hr className="trSty" />
      <div style={{ float: "right", marginTop: "0px" }}>
        <PaginationConatiner />
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
      <ClientDetailsPopUp
        handleClientDetailClose={handleClientDetailClose}
        clientDetailShow={clientDetailShow}
        setClientDetailShow={setClientDetailShow}
      />
    </Col>
  );
}
