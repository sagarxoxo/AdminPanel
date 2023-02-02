import React, { useEffect, useState } from "react";

import {
  Button,
  Nav,
  Col,
  Pagination,
  Row,
  Form,
  Container,
  Modal,
} from "react-bootstrap";
import filter from "../public/Images/SlidersHorizontal.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import graph from "../public/Images/Vector 3.2.png";
import InfluencerOneForm from "../Components/InfluencerFormOne";
import InfluencerFormTwo from "../Components/InfluencerFormTwo";
import InfluencerFormThree from "../Components/InfluencerFormThree";
import InfluencerFormFour from "../Components/InfluencerFormFour";
import InfluencerTable from "../Components/InfluencerTable";
import { FiFilter } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import DateNoti from "../Components/DateNoti";
import ExportModal from "../Components/ExportModal";

export default function Influencer(props) {
  const [open, setOpen] = React.useState(0);
  function handleSwitch(camp) {
    setIsActive((isActive = camp));
  }
  let [isActive, setIsActive] = React.useState("Preparation");
  const scoialData = [
    {
      socialName: "Instagram",
      imgSocial: <AiOutlineInstagram size={30} />,
      bg: "instaBg",
      data: "9,89670",
      desc: "Influencers since last month",
    },
    {
      socialName: "Youtube",
      imgSocial: <BsPlay size={30} />,
      bg: "ytBg",
      data: "9,89670",
      desc: "Influencers since last month",
    },
    {
      socialName: "Tiktok",
      imgSocial: <FaTiktok size={30} />,
      bg: "tikBg",
      data: "9,89670",
      desc: "Influencers since last month",
    },
  ];

  const [selectAll, setSelectAll] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  function handleCheckAll() {
    setSelectAll((prevState) => !prevState);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [campShow, setCampShow] = useState(false);

  const handleCampClose = () => setCampShow(false);
  const handleCampShow = () => setCampShow(true);

  const [exportShow, setExportShow] = useState(false);
  const handleExportClose = () => setExportShow(false);
  const handleExportShow = () => setExportShow(true);

  const [campModalSwitch, setCampModalSwitch] = useState();

  function handleCampModal(inputText) {
    handleCampShow();
    handleClose();
    setCampModalSwitch(inputText);
  }

  function handleCheckBox() {}

  useEffect(() => {
    props.setHead("Influencers");
  }, [props.setHead]);

  return (
    <div className="bg">
      <Row>
        <Col lg={9}>
          <Row>
            {scoialData.map((data, index) => {
              return (
                <Col lg={4} key={index}>
                  <div className="socialCard">
                    <div className="scoialNa">
                      <span className={data.bg}>{data.imgSocial}</span>
                      <span>{data.socialName}</span>
                    </div>
                    <div className="socialData">
                      <span>{data.data}</span>
                      <Image src={graph} />
                    </div>
                    <span className="desc">{data.desc}</span>
                  </div>
                </Col>
              );
            })}
            <Col>
              <div className="influencer-main">
                <div className="contentNav">
                  <div className="heading">
                    <h2>All Influencers</h2>
                    <span>More than 290+ new Influencers</span>
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
                        <IoIosArrowDown
                          style={{ marginLeft: "10px" }}
                          size={16}
                        />
                      )}
                      {showFilter && (
                        <IoIosArrowUp
                          style={{ marginLeft: "10px" }}
                          size={16}
                        />
                      )}
                    </Button>
                    <Button
                      className="ligBtn cmmBtn"
                      onClick={handleExportShow}
                    >
                      Export Report
                    </Button>
                    <Button className="primBtn cmmBtn" onClick={handleShow}>
                      Add to Campaign
                    </Button>
                  </div>
                </div>
                {showFilter && (
                  <div className="miniNav">
                    <Button
                      onClick={() => {
                        setOpen(0);
                        {
                          handleSwitch("Preparation");
                        }
                      }}
                      variant="link"
                      className={`switchBtn1 ${
                        isActive === "Preparation" ? "activeBtn" : "inactiveBtn"
                      }`}
                    >
                      Filter by influencer
                    </Button>
                    <Button
                      onClick={() => {
                        setOpen(1);
                        {
                          handleSwitch("Ongoing");
                        }
                      }}
                      variant="link"
                      className={`switchBtn1 ${
                        isActive === "Ongoing" ? "activeBtn" : "inactiveBtn"
                      }`}
                    >
                      Filter by Audience
                    </Button>
                    <Button
                      onClick={() => {
                        setOpen(2);
                        {
                          handleSwitch("Finished");
                        }
                      }}
                      variant="link"
                      className={`switchBtn1 ${
                        isActive === "Finished" ? "activeBtn" : "inactiveBtn"
                      }`}
                    >
                      Filter by Performance
                    </Button>
                    <Button
                      onClick={() => {
                        setOpen(3);
                        {
                          handleSwitch("Report");
                        }
                      }}
                      variant="link"
                      className={`switchBtn1 ${
                        isActive === "Report" ? "activeBtn" : "inactiveBtn"
                      }`}
                    >
                      Filter by Campaign
                    </Button>
                  </div>
                )}

                {showFilter && (
                  <div>
                    {open === 0 && <InfluencerOneForm />}
                    {open === 1 && <InfluencerFormTwo />}
                    {open === 2 && <InfluencerFormThree />}
                    {open === 3 && <InfluencerFormFour />}
                  </div>
                )}

                <div className="influencer-table-con">
                  <div className="headInfi">
                    <span>Influencers</span>
                    {selectAll && (
                      <Button className="primBtn cmmBtn">Update</Button>
                    )}
                  </div>
                  <InfluencerTable
                    handleCheckBox={handleCheckBox}
                    handleCheckAll={handleCheckAll}
                    selectAll={selectAll}
                  />
                </div>
              </div>
            </Col>

            <Modal show={show} onHide={handleClose}>
              <Modal.Body className="campModal">
                <div className="addCamCont">
                  <Button
                    className="primBtn cmmBtn"
                    onClick={() => handleCampModal("Add")}
                  >
                    Add to existing campaign
                  </Button>
                  <Button
                    className="primBtn cmmBtn"
                    onClick={() => handleCampModal("New")}
                  >
                    Create a new campaign
                  </Button>
                </div>
              </Modal.Body>
            </Modal>

            <Modal show={campShow} onHide={handleCampClose}>
              <Modal.Body className="campModal">
                {campModalSwitch === "Add" && (
                  <div>
                    <Form.Group className="mb-3" controlId="formGridState">
                      <Form.Label>Select Campaign</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>--- Please Select ---</option>
                        <option>Campaign 1</option>
                        <option>Campaign 2</option>
                      </Form.Select>
                    </Form.Group>
                    <div class="btnRightCont">
                      <Button className="primBtn cmmBtn">
                        Add to campaign
                      </Button>
                    </div>
                  </div>
                )}
                {campModalSwitch === "New" && (
                  <div>
                    <span>Create New Campaign</span>
                  </div>
                )}
              </Modal.Body>
            </Modal>

            {/* export Modal */}
            <ExportModal
              exportShow={exportShow}
              handleExportClose={handleExportClose}
              exportFor={"influencer"}
            />
          </Row>
        </Col>
        <Col lg={3}>
          <DateNoti />
        </Col>
      </Row>
    </div>
  );
}
