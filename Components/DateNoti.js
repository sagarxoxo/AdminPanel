import React, { useEffect, useRef, useState } from 'react'

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from '@fullcalendar/timegrid';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import DateModal from './DateModal';

export default function DateNoti() {
  const [value, onChange] = useState(new Date());

  const notiData =[{
    notificationData: "A connect with Minhas Asif",
    date:" Oct,26,2022| 04:00PM",
    status: "done",
  },
  {
    notificationData: "A connect with Ivan",
    date:" Oct,26,2022| 04:00PM",
    status: "pending",
  },
  {
    notificationData: "A connect with Ivan",
    date:" Oct,26,2022| 04:00PM",
    status: "pending",
  },
  {
    notificationData: "A connect with Ivan",
    date:" Oct,26,2022| 04:00PM",
    status: "pending",
  }]


  const [event, setEvents] = useState([
    { title: 'event 1', color: '', date: '2022-10-10' },
    { title: 'event 2', color: '', date: '2022-10-12' }
    ]
  );

  const [show, setShow] = useState(false);
  const [formSchdeule, setFormSchdeule] = useState({
    title:"", type: "", start: "", end: "",date: "", startTime: "", endTime: "", allDay:"", influencer: "", description: "",
  })
  const [info, setInfo] = useState()

  const [showTaskInput, setShowTaskInput] = useState(false);
  const handleTaskInputClose = () => setShowTaskInput(false);
  const handleTaskInputShow = (dateInfo) => {
    setShowTaskInput(true);
    setInfo(dateInfo)
  }

  console.log(info, formSchdeule)

  const [singleEvent , setSingleEvent] = useState()
  const [bolSingleEvent , setBolSingleEvent] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = (dateInfo) => {
    setShow(true)
    setInfo(dateInfo)
  };

  const [showAllEvent, setShowAllEvent] = useState(false);
  const handleAllEventClose = () => setShowAllEvent(false);
  const handleAllEventShow = () => setShowAllEvent(true);

  const [showSingleEvent, setShowSingleEvent] = useState(false);
  const handleSingleEventClose = () => setShowSingleEvent(false);
  const handleSingleEventShow = () => setShowSingleEvent(true);
  

  function submitTask(){
    console.log("in",info)
    console.log("in",formSchdeule.end.length )

    if (formSchdeule != null) {
      const newEvent = {
        title: formSchdeule.title,
        color: formSchdeule.type,
        data: formSchdeule,
        start: formSchdeule.start.length > "11" ?  formSchdeule.start : formSchdeule.start + "T12:00:00+05:30",
        end: formSchdeule.end.length > "11" ?  formSchdeule.end :  formSchdeule.end + "T01:00:00+05:30",
      };

      setEvents(prevEvent =>  [
          ...prevEvent,
          newEvent
        ]
      )
      console.log("here", event);
    } else {
      console.log("nothing");
    }
  }

  console.log("here2", event);

  function handleFormSchedule(e){
    const {type, name, value, checked} = e.target
    setFormSchdeule(prevData => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
  var i
  useEffect(() => {
    const monthName = document.querySelector('.fc-toolbar-chunk:nth-child(1)');
    const prevArrow = document.querySelector('.fc-toolbar-chunk:nth-child(3) .fc-prev-button ');
    const nextArrow = document.querySelector('.fc-toolbar-chunk:nth-child(3) .fc-next-button ');
    const weekDayMonth = document.querySelector('.fc-toolbar-chunk:nth-child(2) .fc-button-group ');

    const weekBtn = document.querySelector('.fc-timeGridWeek-button');
    
    weekBtn.addEventListener('click', function(e){
      const weekHeading = document.querySelectorAll('.fc-col-header thead tr th .fc-scrollgrid-sync-inner a');
      for(i = 0; i < weekHeading.length; i++){
        weekHeading[i].innerHTML = (weekHeading[i].textContent).slice(0,3);
      }

      const scrollerDiv = document.querySelector('.fc-scroller');
      scrollerDiv.className += " scrollerDiv"
    })



    // const parentCalendarHead = document.querySelector('.fc-header-toolbar'); 
    // const viewAll1 = document.querySelector('.custmText');
    // const div = document.createElement('div')
    // const node = document.createTextNode("View all events");

    // div.classList.add('custmText')

    // div.appendChild(node);
    // !viewAll1 && parentCalendarHead.appendChild(div)
    
    // Arrow change
    monthName && monthName.before(prevArrow)
    nextArrow && nextArrow.after(weekDayMonth)
    const calendarHeader = document.querySelectorAll("fc-header-toolbar")

    // const viewAll = document.querySelector('.custmText');

    // viewAll.addEventListener("click",function(e){
    //   handleAllEventShow()
    // })

  },[])


  useEffect(() => {
    const popupEvent = document.querySelector('.fc-scrollgrid-sync-table tbody');
    
    popupEvent && popupEvent.addEventListener("click",function(e){
      if(e.target.className === 'fc-event-title fc-sticky'){
        setSingleEvent(e.target.textContent)
        handleSingleEventShow()
      }
    })
  },[])


  return (
    <div className='NotiSec'>
      <div className='calend'>
      {/* <FullCalendar
        plugins={[
          dayGridPlugin, 
          timeGridPlugin, 
          interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        events={event}
        select={handleShow}
      /> */}
      <FullCalendar
        initialView='dayGridMonth'
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
        headerToolbar={{
          center: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        selectable={true}
        select={handleTaskInputShow}
        events={event}
        nowIndicator
        displayEventTime={true}
        
        dateClick={(e) => setFormSchdeule((prevData) => 
          ({
            ...prevData,
            start: e.dateStr,
            end: e.dateStr,
            date: e.date.toLocaleDateString(), 
            startTime: e.date.toLocaleTimeString(),
            endTime: e.date.toLocaleTimeString(),
          }),
          console.log("e",e)
          )
        }
        eventClick={(e) => console.log("c",e.event)}
      />
      </div>
      <div className='NotiContainer'>
      <h2>Notifications</h2>
      {notiData.map((nData, index) => {
        return (
        <div className='NotiCard' key={index}>
        <span><span className={nData.status}></span><span className='notihEAD'>{nData.notificationData}</span></span>
        <span className='notiDate'>{nData.date}</span>
        </div>
        )
      })}
      </div>

      <DateModal 
      handleTaskInputClose={handleTaskInputClose}
      showTaskInput={showTaskInput}
      submitTask={submitTask}
      formSchdeule={formSchdeule}
      setFormSchdeule={setFormSchdeule}
      handleFormSchedule={handleFormSchedule}
      info={info}
      />

    
    </div>

  )
}
