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

export default function SingleReportTable() {
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
        <h2 className="heading">Report Table</h2>
        <Table className="singleCampTable" style={{ overflowX: "auto" }}>
          <thead className="custTableHead">
            <tr>
              <th>Influencer</th>
              <th>Influencer size</th>
              <th>Info </th>
              <th>Website click</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
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
                  <td>$700</td>
                  <td>$700</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
      <Col lg={3}>
        <DateNoti />
      </Col>
    </Row>
  );
}
