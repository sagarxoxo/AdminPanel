import React, { useRef, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import dynamic from 'next/dynamic'
import ProfilePic from "../../public/Images/profile-circle-2 1.png";
import AvatarEditor from 'react-avatar-editor';
import { FileUploader } from "react-drag-drop-files";
import { RiGalleryLine } from "react-icons/ri";
import Image from 'next/image';

const fileTypes = ["JPG", "PNG"];
export default function ProfileUploadModal(props) {

    const editor = useRef(null);

    const Avatar = dynamic(() => import('react-avatar-edit'), {
        ssr: false
    })


    const [image, setImage] = useState(props.dpImg.src)

    const [file, setFile] = useState(null);
    // const handleChange = (file) => {
    //     setFile(file);
    //     setImage(file)
    //     props.setSwitchImgSec("uploadEdit")
    //     console.log(file)
    // };

    const [imgAvatarEditor, setImgAvatarEditor] = useState({
      image: 'avatar.jpg',
      allowZoomOut: false,
      scale: 1.1,
      rotate: 0,
      borderRadius: 12,
      preview: null,
      width: 416,
      height: 416,
    })
  
    const handleNewImage = e => {
      setImgAvatarEditor({ image: e.target.files[0] })
    }
  
    const handleScale = e => {
      const scale = parseFloat(e.target.value)
      setImgAvatarEditor({ scale })
    }

    function handleSave(data){
      const img = editor.current.getImageScaledToCanvas().toDataURL()
      props.setDpImg(img)
      props.handleProfilePicClose()
    }

    const hiddenFileInput = React.useRef(null);

    const handleClickImg = (event) => {
      hiddenFileInput.current.click();
    }

    const handleChangeImg = (event) => {
      const fileUploaded = event.target.files[0];
      setImage(fileUploaded)
    }

  return (
    <Modal centered closeButton show={props.showProfilePic} onHide={props.handleProfilePicClose} >
      <div className='crossBtn'>
        <div style={{margin: "15px 12px 0px 0px"}} onClick={props.handleProfilePicClose}>
            <Image src="/Images/XCircle.svg" width="12" height="12"  /> 
        </div>
      </div>
       <Modal.Body className="modalProfilePic">
        <h2 className='profileText'>Profile Picture
          <span onClick={handleClickImg} style={{marginLeft: "10px", marginTop: "4px"}}>
            <Image src="/Images/upload (2) 1.svg" width="29" height="24" /> 
          </span>
          
          <input type="file"
             ref={hiddenFileInput}
             onChange={handleChangeImg}
             style={{display:'none'}} 
          /> 
        </h2>
          <div className='avtarEdit'>
            <AvatarEditor
              ref={editor}
              image={image}
              width={imgAvatarEditor.width}
              height={imgAvatarEditor.height}
              border={imgAvatarEditor.border}
              color={[0, 0, 0, 0.6]}
              scale={imgAvatarEditor.scale}
              rotate={imgAvatarEditor.rotate}
            />
            <div className='scalerDesign'>
              <RiGalleryLine size={30} style={{marginRight: "16px"}}/>
            <Form.Range 
              name="scale"
              type="range"
              onChange={handleScale}
              min={imgAvatarEditor.allowZoomOut ? '0.1' : '1'}
              max="2"
              step="0.01"
              defaultValue={imgAvatarEditor.scale}
            />

            <RiGalleryLine size={40} style={{marginLeft: "16px"}}/>
            </div>
          </div>
          <Button variant="primary" className="commonBtn btnColor" style={{width: "100%", height: "48px"}} onClick={handleSave}>
            Save
          </Button>
        </Modal.Body>
      </Modal>
  )
}
