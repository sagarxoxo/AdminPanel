import Image from 'next/image'
import React, { useState } from 'react'
import { Button, ProgressBar } from 'react-bootstrap';
import flag from '../public/Images/USAFlag.webp'


export default function InfluencerBarGraphCountry(props) {

    const now = 60;

    const [lengthOfCountryList, setLengthofCountryList] = useState(4);
    const [btnShow, setBtnShow] = useState(false);

    function handleShowMoreCountry(){
        setLengthofCountryList((props.Data).length)
        setBtnShow(prevState => !prevState)
    }

    function handleShowLessCountry(){
        setLengthofCountryList(4)
        setBtnShow(prevState => !prevState)
    }

    console.log(props.Data)
  
    return (
    <div style={{margin: "10px"}}>
        {props.Data && (props.Data).slice(0, lengthOfCountryList).map((data, index) => {
            return (
            <div className='countFlag' key={index}>
                <div><Image src={flag} width="22px" height="12px" /> <span>&nbsp;{data}</span> <span className='percNow'>{now}%</span></div>
                <ProgressBar style={{marginLeft: "0px"}}now={now} />
            </div>
            )
        })}

        {!btnShow && <Button className="cmmBtn showMoreBtn" onClick={handleShowMoreCountry}>Show More</Button>}
        {btnShow && <Button className="cmmBtn showMoreBtn" onClick={handleShowLessCountry}>Show Less</Button>}
    </div>
  )
}
