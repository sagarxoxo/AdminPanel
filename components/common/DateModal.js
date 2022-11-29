import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
import TimePicker from "react-times";
import { Calendar, } from "react-date-range";
import Image from 'next/image';
import moment from 'moment';

export default function DateModal(props) {

    const calendarRef = useRef();

    const [beginDate, setBeginDate] = useState(props.formSchdeule.date);
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const [startTime, setStartTime] = useState(props.formSchdeule.startTime);
    const [endTime, setEndTime] = useState(props.formSchdeule.endTime);
    const [allDay, setAllDay] = useState(false);
    
    
    const [optionLabel, setOptionLabel] = useState([
        "Product Designer",
        "UI",
        "App Design",
        "UX",
    ]);
    const [multiSelections, setMultiSelections] = useState([]);
    const options = ["A", "B", "C", "D", "EE", "FFF", "GGG"];
    const handleSelect = (event) => {
        setBeginDate(moment(new Date(event).toLocaleDateString()).format());
        
        setOpenDatePicker(false);
    };
    
    const handleStartTimeChange = (event) => {
        setStartTime(event.hour + ":" + event.minute);
        props.setFormSchdeule(prevData => {
            return {
                ...prevData,
                startTime: "T" + event.hour + ":" + event.minute + ":00+05:30",
                start: (props.formSchdeule.start).slice(0,10) + "T" + event.hour + ":" + event.minute + ":00+05:30"
            }
        })
    };
    
    const handleEndTimeChange = (event) => {
        setEndTime(event.hour + ":" + event.minute);
        props.setFormSchdeule(prevData => {
            return {
                ...prevData,
                endTime: "T" + event.hour + ":" + event.minute + ":00+05:30",
                end: (props.formSchdeule.end).slice(0,10) + "T" + event.hour + ":" + event.minute + ":00+05:30"
            }
        })
    };


    
    const openDateRange = () => {
        setOpenDatePicker(true);
    };
    
    const handleAllDayCheck = (event) => {
        setAllDay(event.target.checked);
    };
    
    useEffect(() => {
    function handleClickOutside(event) {
        if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setOpenDatePicker(false);
        }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
    }, [calendarRef]);

    useEffect(() => {
    props.setFormSchdeule(prevData => {
        return {
            ...prevData,
            start: beginDate.slice(0,10),
            end: beginDate.slice(0,10),
            date: beginDate.slice(0,10),
        }
    })
    },[beginDate])


  return (
    <Modal show={props.showTaskInput} onHide={props.handleTaskInputClose} className="optionsModal">
    <Modal.Body className="scheduleModal">
    <div className="actionCloseImage" onClick={props.handleTaskInputClose}>
        <Image
        src="/Images/close.png"
        alt="close"
        width="10px"
        height="10px"
        objectFit="contain"
        />
    </div>
    <div className="scheduleModalHeading">Schedule</div>
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className="emailModalSubject">Title</Form.Label>
        <Form.Control
        type="text"
        placeholder="Add Title"
        className="scheduleModalTextField"
        style={{ backgroundColor: "#fff" }}
        name="title"
        value={props.formSchdeule.title}
        onChange={props.handleFormSchedule}
        />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className="emailModalSubject">Type</Form.Label>
        <Form.Select
        defaultValue="Choose..."
        className="scheduleModalTextField"
        name="type"
        value={props.formSchdeule.type}
        onChange={props.handleFormSchedule}
        >
        <option>Please Select</option>
        <option value="#2D3779">Meeting</option>
        <option value="#29CC39">Task</option>
        <option value="#C6C9CD">Reminder</option>
        </Form.Select>
    </Form.Group>
    <div className="dateTime">
        <div className="dateCont">
        <Form.Label className="emailModalSubject">Date</Form.Label>
        <Form.Control
            type="text"
            style={{ backgroundColor: "#fff" }}
            className="emailModalTextField"
            onClick={openDateRange}
            name="date"
            value={props.formSchdeule.date}
            onChange={props.handleFormSchedule}
        />
        </div>
        <div className="timeLabel">
        <Form.Label className="emailModalSubject">Time</Form.Label>
        <div className="timeContainer">
            <div style={{ marginRight: "10px" }}>
            <TimePicker
                time={props.formSchdeule.startTime}
                onTimeChange={handleStartTimeChange}
            />
            </div>
            <span>-</span>
            <TimePicker
            time={props.formSchdeule.endTime}
            onTimeChange={handleEndTimeChange}
            />
        </div>
        </div>
        <div className="allDayCont">
        <span className="emailModalSubject">{"All Day "}</span>
        <Form.Check
            type="checkbox"
            checked={allDay}
            onChange={handleAllDayCheck}
            className="checkboxContainer"
        />
        </div>
    </div>
    {openDatePicker && (
        <div className="date" ref={calendarRef}>
        <Calendar onChange={handleSelect} minDate={new Date()} />
        </div>
    )}
    <Form.Group
        className="mb-3 scheduleModalInfluenersGroup"
        controlId="formGroupEmail"
    >
        <Form.Label className="emailModalSubject">Influencer</Form.Label>
        <Typeahead
        id="basic-typeahead-multiple"
        labelKey="influencer"
        multiple
        options={options}
        placeholder="Please Select"
        onChange={(selected) => props.setFormSchdeule(prevData => ({...prevData, influencer: selected}))}
        selected={props.formSchdeule.influencer}
        />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className="emailModalSubject">Description</Form.Label>
        <Form.Control
        as="textarea"
        placeholder="Add description"
        className="scheduleModalTextField"
        rows={2}
        style={{ backgroundColor: "#fff" }}
        name="description"
        value={props.formSchdeule.description}
        onChange={props.handleFormSchedule}
        />
    </Form.Group>
    <div className="btnRightCont">
        <Button className="primBtn cmmBtn schedultBtn" onClick={props.submitTask}>Save</Button>
    </div>
    </Modal.Body>
    </Modal>
  )
}
