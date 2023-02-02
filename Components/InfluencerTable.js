import React, { useRef, useState } from "react";
import {
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import ProfilePic from "../public/Images/profile-circle-2 1profil.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import InfluencerTableModal from "./InfluencerTableModal";
import InfluencerDetailsPopUp from "./InfluencerDetailsPopUp";
import ActionModal from "./ActionModal";
import PaginationConatiner from "./PaginationConatiner";

export default function InfluencerTable(props) {
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

  function handleAction(actionType) {
    handleActionShow();
    setAction(actionType);
  }

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
                    onChange={props.handleCheckAll}
                    checked={props.selectAll}
                  />
                </Form>
              </th>
              <th className="center">Campaigns</th>
              <th className="center">CPC</th>
              <th className="center">CPT</th>
              <th className="center">Price</th>
              <th className="center">Overlap</th>
              <th className="center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2].map((num, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="userinfo">
                      <Form>
                        <Form.Check
                          type="checkbox"
                          checked={props.selectAll}
                          onChange={props.handleCheckBox}
                        />
                      </Form>
                      <div
                        onClick={handleInfuDetailShow}
                        style={{ margin: "0px 10px" }}
                      >
                        <Image src={ProfilePic} width="50px" height="50px" />
                      </div>
                      <div onClick={handleInfuDetailShow}>
                        <span>Minhas Asif</span>
                        <span>Multiple Sclerosis</span>
                      </div>
                    </div>
                  </td>
                  <td className="center">50</td>
                  <td className="center">$7</td>
                  <td className="center">$10</td>
                  <td className="center">$20 </td>
                  <td className="center">20</td>
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
                    <ActionModal
                      actionShow={actionShow}
                      handleActionClose={handleActionClose}
                      action={action}
                      actionContChoose={actionContChoose}
                      setActionContChoose={setActionContChoose}
                      client={true}
                    />
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

      <InfluencerDetailsPopUp
        handleInfuDetailClose={handleInfuDetailClose}
        infuDetailShow={infuDetailShow}
        setInfuDetailShow={setInfuDetailShow}
      />
    </Col>
  );
}
