import Image from "next/image";
import React, { useState } from "react";
import { Col, Dropdown, DropdownButton, Form, Row, Table } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProfilePic from "../../../public/Images/profile-circle-2 1profil.png";
import PaginationConatiner from "./PaginationConatiner"

import styles from "./Tables.module.css"
export function ClientTable(){

  const [selectAll, setSelectAll] = useState(false);

  function handleCheckAll(){
    setSelectAll(prevState => !prevState)
  }

  const checkbox = <Form><Form.Check  type="checkbox" className={styles.fmCheck}  label="Username"  name="Username" id="Username" onChange={handleCheckAll} defaultChecked={selectAll}/></Form>
   
  return(
  <Col>
  <div className={styles.tableContainer}>
  <Table className={styles.tableSty}>
    <thead className={styles.custTableHead}>
      <tr>
        <th> {checkbox}</th>
        <th >Locations</th>
        <th >Disease Area</th>
        <th >Campaigns</th>
        <th >Revenue</th>
        <th >Label</th>
        <th >Tasks</th>
        <th >Actions</th>
      </tr>
    </thead>
    <tbody>
      {[1,2,3,4,5].map((num, index) => {
        return (
        <tr key={index}>
          <td>
            <div className={styles.userinfo}>
              <Form><Form.Check type="checkbox" /></Form>
              <div className={styles.imgTableProfile} ><Image src={ProfilePic}  width="50px" height="50px"/></div>
              <div >
                <span>Minhas Asif</span>
                <span>Multiple Sclerosis</span>
              </div>
            </div>
            </td>
          <td >00</td>
          <td >10</td>
          <td >11</td>
          <td >CHF300</td>
          <td >Label</td>
          <td >Task</td>
          <td >
          <DropdownButton variant="link"id="dropdown-basic-button" title={<BsThreeDotsVertical />}>
              <Dropdown.Item onClick={() => handleAction('Contact')}>Contact</Dropdown.Item>
              <Dropdown.Item onClick={() => handleAction('Note')}>Note</Dropdown.Item>
              <Dropdown.Item onClick={() => handleAction('Schedule')}>Schedule</Dropdown.Item>
          </DropdownButton>
          </td>
        </tr>
        )
      })}
    </tbody>
  </Table>
  <div>
    <PaginationConatiner />
  </div>
  </div>
  </Col>
  )
}