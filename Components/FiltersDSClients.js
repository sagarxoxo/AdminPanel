import React, { useState } from "react";
import FilterDSClientsDetail from "./FilterDSClientsDetail";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { FiFilter } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import DSclientDaashboard from "./DSclientDaashboard";
import { Typeahead } from "react-bootstrap-typeahead";
import Image from "next/image";
import { useDispatch } from "react-redux";
import ExportModal from "./ExportModal";

export default function FiltersDSClients() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [exportShow, setExportShow] = useState(false);
  const handleExportClose = () => setExportShow(false);
  const handleExportShow = () => setExportShow(true);

  const options = ["A", "B", "C", "D", "EE", "FFF", "GGG"];
  const [showFilter, setShowFilter] = useState(false);

  const [addClientData, setAddClientData] = useState({
    clientName: "",
    role: "",
    industry: "",
    company: [],
    location: [],
    product: "",
    diseaseArea: [],
    email: "",
    phoneNumber: "",
  });

  function handleAddClient(e) {
    const { name, value } = e.target;
    setAddClientData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function submitNewClient(e) {
    e.preventDefault();
    dispatch(addNewClient(addClientData));
  }

  return (
    <div className="mainFilterSec">
      <Row>
        <Col lg={12}>
          <div className="contentNav">
            <div className="heading">
              <h2>Clients</h2>
              <span>20 new Clients</span>
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
                Export
              </Button>
              <Button className="primBtn cmmBtn" onClick={handleShow}>
                Add Client
              </Button>
            </div>
          </div>
        </Col>
        {showFilter && <FilterDSClientsDetail />}
        <DSclientDaashboard />
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="campModal">
          <h2>Add Client</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Client Name</Form.Label>
              <Form.Control
                type="text"
                name="clientName"
                value={addClientData.clientName}
                onChange={handleAddClient}
                placeholder="Enter Client Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                name="role"
                value={addClientData.role}
                onChange={handleAddClient}
                placeholder="Enter Role"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Industry</Form.Label>
              <Form.Select
                name="industry"
                value={addClientData.industry}
                onChange={handleAddClient}
                defaultValue="Choose..."
              >
                <option>--- Please Select ---</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
            <br />
            <Form.Group className="mb-3">
              <Form.Label>Company</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                labelKey="company"
                options={options}
                placeholder="--- Please Select ---"
                onChange={(selected) =>
                  setAddClientData((prevData) => ({
                    ...prevData,
                    company: selected,
                  }))
                }
                selected={addClientData.company}
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
                  setAddClientData((prevData) => ({
                    ...prevData,
                    location: selected,
                  }))
                }
                selected={addClientData.location}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product</Form.Label>
              <Form.Control
                type="text"
                name="product"
                value={addClientData.product}
                onChange={handleAddClient}
                placeholder="Enter Product"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Disease Area</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                labelKey="diseaseArea"
                options={options}
                placeholder="--- Please Select ---"
                onChange={(selected) =>
                  setAddClientData((prevData) => ({
                    ...prevData,
                    diseaseArea: selected,
                  }))
                }
                selected={addClientData.diseaseArea}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={addClientData.email}
                onChange={handleAddClient}
                placeholder="Enter Email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="number"
                name="phoneNumber"
                value={addClientData.phoneNumber}
                onChange={handleAddClient}
                placeholder="Enter Phone Number"
              />
            </Form.Group>
          </Form>
          <Button
            className="primBtn cmmBtn"
            style={{ width: "100%" }}
            onClick={submitNewClient}
          >
            Add Client
          </Button>
        </Modal.Body>
      </Modal>

      {/* export Modal */}
      <ExportModal
        exportShow={exportShow}
        handleExportClose={handleExportClose}
        exportFor={"discoverClient"}
      />
    </div>
  );
}
