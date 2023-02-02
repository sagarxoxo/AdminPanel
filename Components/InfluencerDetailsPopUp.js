import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import InfluencerBarChartEthnicity from './InfluencerBarChartEthnicity';
import InfluencerBarGraphAgeGender from './InfluencerBarGraphAgeGender';
import InfluencerBarGraphCountry from './InfluencerBarGraphCountry';
import InfluencerPieChartComunity from './InfluencerPieChartComunity';

export default function InfluencerDetailsPopUp(props) {

    const [switchNav, setSwitchNav] = useState();

    useEffect(() => {
        setSwitchNav("Default")
    },[])

    const countryData = ["United States", "Germany", "India", "China", "Russia", "United Kingdom"]
    const citesData = ["London","New York", "Auckland", "Santo Domingo", "Charlotte"]
    const languageData = ["English","Mandarin","Hindi","Spanish","French","Arabic","Bengali"]

  return (
    <Modal  className='influencerModal' size="md" show={props.infuDetailShow} onHide={props.handleInfuDetailClose}>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Ivan Jurisic
                <div className='infuModalNav'>
                    <Button style={{backgroundColor: (switchNav === "Infu" || switchNav === "Default") && "#2D3779"}}  onClick={() => setSwitchNav("Infu")}>Influencer</Button>
                    <Button style={{backgroundColor: switchNav === "Aud" && "#2D3779"}} onClick={() => setSwitchNav("Aud")}>Audience</Button>
                    <Button style={{backgroundColor: switchNav === "Camp" && "#2D3779"}} onClick={() => setSwitchNav("Camp")}>Campaigns</Button>
                    <Button style={{backgroundColor: switchNav === "Man" && "#2D3779"}} onClick={() => setSwitchNav("Man")}>Management</Button>
                </div>
            </Modal.Title>
        </Modal.Header>
        { (switchNav === "Infu" || switchNav === "Default")  &&
        <Modal.Body>
        <div className='profileShowcase'>
            <div><Image src="/Images/ppdp.png" width="100px" height="100px" /></div>
            <span className='userName'>@ivanjurisic</span>
            <span className='userDet'>Ivan Jurisic (24) | Instagram | London</span>
             <div className='platformDetCont'>
                <div className='insightCont'>
                    <div>2M Followers</div>
                    <div>Avg. Engagement 60% <br /><span className='highlight'>(average 90%)</span></div>
                    <div>Avg. Likes 60% <br /><span className='highlight'>(average 90%)</span></div>
                    <div>Avg. Comments 60% <br /><span className='highlight'>(average 90%)</span></div>
                    <div>Avg. Real Followers 60% <br /><span className='highlight'>(average 90%)</span></div>
                </div>
            </div>
        </div>
        </Modal.Body>
        }
        { switchNav === "Aud" &&
        <Modal.Body>
            <div className='audienceCont'>
                <h2>Age & Gender Breakdown</h2>
                <InfluencerBarGraphAgeGender />
                <hr className="trSty" />
                <h2>Country Breakdown</h2>
                <InfluencerBarGraphCountry Data={countryData}/>
                <hr className="trSty" />
                <h2>Cities Breakdown</h2>
                <InfluencerBarGraphCountry Data={citesData}/>
                <hr className="trSty" />
                <h2>Language Breakdown</h2>
                <InfluencerBarGraphCountry Data={languageData}/>
                <hr className="trSty" />
                <h2>Ethnicity Breakdown</h2>
                <InfluencerBarChartEthnicity />
                <hr className="trSty" />
                <h2>Patient Population (Community)</h2>
                <InfluencerPieChartComunity />
                <hr className="trSty" />
                <h2>Patient Population (Captions)</h2>
                <InfluencerPieChartComunity />
                <hr className="trSty"/>
            </div>
        </Modal.Body>
        }
        { switchNav === "Camp" &&
        <Modal.Body>
            <div>
                ddfa
            </div>
        </Modal.Body>
        }

        { switchNav === "Man" &&
        <Modal.Body>
            <div>
                ddf
            </div>
        </Modal.Body>
        }
    </Modal>
  )
}
