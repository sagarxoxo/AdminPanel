import {
Button,
Container,
Dropdown,
Form,
InputGroup,
Navbar
} from "react-bootstrap";

import { BsInfoCircle, } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import ProfilePic from "../../public/Images/profile-circle-2 1.png";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileUploadModal from "./ProfileUploadModal";

export default function Header(props) {

    const [imgCrop, setImgCrop] = useState(false)

    const [dpImg, setDpImg] = useState(ProfilePic)
    const [switchImgSec, setSwitchImgSec] = useState()

    const [showProfilePic, setShowProfilePi] = useState(false);
    const handleProfilePicClose = () => setShowProfilePi(false);
    const handleProfilePicShow = () => setShowProfilePi(true);


    function handleSwitch(swt){
        setSwitchImgSec(swt)
    }

    console.log(props.Auth)

return (
    <Navbar className="navDes" style={{padding: "20px"}}>
    <Container fluid>
        <Navbar.Brand >{props.head}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        {props.Auth !== "/influencerpanelhome" && <InputGroup className="justify-content-end">
            <InputGroup.Text>
                <Image className="svgSeacrh" src="/Images/search.svg" width="18" height="18" />
            </InputGroup.Text>
            <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Looking for someone?"
                className="me-2"
                aria-label="Search"
            />
            </Form>
        </InputGroup>}
        {props.Auth === "/influencerpanelhome" && 
            <span className="balBt">Balance : $499.00</span>
        }
        {/* <Button className="helpBtn btnCustom"><BsInfoCircle className="infoIcon"/> Help?</Button>
        <Button className="notiBtn btnCustom"><RiNotification3Line className="notiIcon"/></Button> */}
        <div className="profileDiv">
            <span className="navbar-brand name">Minhas Asif</span>
        </div>
        <div className="flexRow image-wrapper" style={{ alignItems: "center"}}>
            <div variant="link" align="start" onClick={handleProfilePicShow} style={{width: "37px", height: "37px", }}>
                <Image  src={dpImg ? dpImg : ProfilePic} objectFit="cover" width="37px" height="37px" alt="profile"  className="Profile"/>
            </div>
        </div>
        <div className="dropLogout">
        <Dropdown>
            <Dropdown.Toggle variant="link" align="start" style={{width: "37px", height: "37px", }}>
                <Image src="/Images/dropdown.svg"  width="16" height="9" />
            </Dropdown.Toggle>
        <Dropdown.Menu align="end">
                <Dropdown.Item> 
                    <span className="flexRow" style={{marginRight: "6px", alignItems: "center",width:"14px", height:"14px"}}>
                        <Image src="/Images/Acc.svg" width="14" height="14" />
                    </span>
                Account</Dropdown.Item>
                <Dropdown.Item></Dropdown.Item>
                <Dropdown.Item>
                    <span className="flexRow" style={{marginRight: "6px", alignItems: "center",width:"14px", height:"14px"}}>
                        <Image src="/Images/logout.svg" width="14" height="14"/>
                    </span>
                Logout</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </div>
        
        </Navbar.Collapse>
    </Container>
    <ProfileUploadModal
        showProfilePic={showProfilePic}
        handleProfilePicClose={handleProfilePicClose}
        dpImg={dpImg}
        setDpImg={setDpImg}
        switchImgSec={switchImgSec}
        setSwitchImgSec={setSwitchImgSec}
      />
      
    </Navbar>
);
}
