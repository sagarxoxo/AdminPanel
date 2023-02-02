import { Button, Container, Form, InputGroup, Navbar } from "react-bootstrap";

import { BsInfoCircle } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import ProfilePic from "../public/Images/profile-circle-2 1profil.png";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header(props) {
  return (
    <Navbar className="navDes" style={{ padding: "20px" }}>
      <Container fluid>
        <Navbar.Brand>{props.head}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="navCollapse justify-content-end">
          <InputGroup className="justify-content-end">
            <InputGroup.Text>
              <svg
                className="svgSeacrh"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.275 14.175L13.95 11.85C13.425 12.675 12.675 13.425 11.85 13.95L14.175 16.275C14.475 16.575 14.925 16.575 15.225 16.275L16.275 15.225C16.575 14.925 16.575 14.475 16.275 14.175Z"
                  fill="white"
                />
                <path
                  opacity="0.3"
                  d="M8.25 15C4.5 15 1.5 12 1.5 8.25C1.5 4.5 4.5 1.5 8.25 1.5C12 1.5 15 4.5 15 8.25C15 12 12 15 8.25 15ZM8.25 3C5.325 3 3 5.325 3 8.25C3 11.175 5.325 13.5 8.25 13.5C11.175 13.5 13.5 11.175 13.5 8.25C13.5 5.325 11.175 3 8.25 3ZM6 8.25C6 6.975 6.975 6 8.25 6C8.7 6 9 5.7 9 5.25C9 4.8 8.7 4.5 8.25 4.5C6.15 4.5 4.5 6.15 4.5 8.25C4.5 8.7 4.8 9 5.25 9C5.7 9 6 8.7 6 8.25Z"
                  fill="white"
                />
              </svg>
            </InputGroup.Text>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Looking for someone?"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </InputGroup>
          <Button className="helpBtn btnCustom">
            <BsInfoCircle className="infoIcon" /> Help?
          </Button>
          <Button className="notiBtn btnCustom">
            <RiNotification3Line className="notiIcon" />
          </Button>
          <div className="profileDiv">
            <span className="navbar-brand name">Minhas Asif</span>
            <Image src={ProfilePic} alt="profile" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
