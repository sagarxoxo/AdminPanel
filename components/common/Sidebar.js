import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Logo from "../../public/Images/PatientsInfluence1PNG.png"
import Dashboard from "../../public/Images/Home.svg";
import Discover from "../../public/Images/Discover.svg"
import Influencers from "../../public/Images/Influencer.svg"
import Clients from "../../public/Images/Client.svg"
import Campaigns from "../../public/Images/Campaign.svg"
import Reports from "../../public/Images/Reports.svg"
import SML from "../../public/Images/SML.svg"
import Surveys from "../../public/Images/Surevys.svg"
import Finance from "../../public/Images/Finance.svg"
import Help from "../../public/Images/help.svg"
import Account from "../../public/Images/Account.svg"

import ActiveDashboard from "../../public/Images/ActiveHome.svg";
import ActiveDiscover from "../../public/Images/ActiveDiscover.svg"
import ActiveInfluencers from "../../public/Images/ActiveInfluencer.svg"
import ActiveClients from "../../public/Images/ActiveClient.svg"
import ActiveCampaigns from "../../public/Images/ActiveCampaign.svg"
import ActiveReports from "../../public/Images/ActiveReports.svg"
import ActiveSML from "../../public/Images/ActiveSML.svg"
import ActiveSurveys from "../../public/Images/ActiveSurevys.svg"
import ActiveFinance from "../../public/Images/ActiveIncome.svg"
import ActiveHelp from "../../public/Images/ActiveHelp.svg"
import ActiveAccount from "../../public/Images/ActiveAccount.svg"

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import SidebarTabs from './SidebarTabs';

export default function Sidebar(props) {

  const [showDiscover, setShowDiscover] = useState(false);
  let [isActive, setIsActive] = useState();

  function handleSwitch(camp){
    setIsActive(camp)
  }

  
  const [tab, setTab] = useState([
    {
      tabText: "Dashboard",
      icon: "/Images/Home.svg",
      activeIcon: ActiveDashboard,
      url: "/",
    },
    {
      tabText: "Discover",
      icon: Discover,
      activeIcon: ActiveDiscover,
      url: "/discover",
    },
    {
      tabText: "Influencers",
      icon: Influencers,
      activeIcon: ActiveInfluencers,
      url: "/influencers",
    },
    {
      tabText: "Clients",
      icon: Clients,
      activeIcon: ActiveClients,
      url: "/clients",
    },
    {
      tabText: "Campaigns",
      icon: Campaigns,
      activeIcon: ActiveCampaigns,
      url: "/campaigns",
    },
    {
      tabText: "Reports",
      icon: Reports,
      activeIcon: ActiveReports,
      url: "/reports",
    },
    {
      tabText: "SML",
      icon: SML,
      activeIcon: ActiveSML,
      url: "/sml",
    },
    {
      tabText: "Surveys",
      icon: Surveys,
      activeIcon: ActiveSurveys,
      url: "/surveys",
    },
    {
      tabText: "Finance",
      icon: Finance,
      activeIcon: ActiveFinance,
      url: "/finance",
    },
  ])

  const handleActive = (url) => {
    setIsActive(url)
  }

  useEffect(() => {
    props.Auth === "/influencerpanelhome" && setTab([
      {
        tabText: "Home",
        icon: Dashboard,
        activeIcon: ActiveDashboard,
        url: "/influencerpanelhome",
      },
      {
        tabText: "Campaigns",
        icon: Campaigns,
        activeIcon: ActiveCampaigns,
        url: "/campaigns",
      },
      {
        tabText: "Surveys",
        icon: Surveys,
        activeIcon: ActiveSurveys,
        url: "/surveys",
      },
      {
        tabText: "Income",
        icon: Finance,
        activeIcon: ActiveFinance,
        url: "/income",
      },
      {
        tabText: "Benefits",
        icon: SML,
        activeIcon: ActiveSML,
        url: "/benefits",
      },
      {
        tabText: "Help",
        icon: Help,
        activeIcon: ActiveHelp,
        url: "/help",
      },
      {
        tabText: "Account",
        icon: Account,
        activeIcon: ActiveAccount,
        url: "/account",
      },
    ])

    props.Auth === "/clientpanelhome" && setTab([
      {
        tabText: "Home",
        icon: Dashboard,
        activeIcon: ActiveDashboard,
        url: "/clientpanelhome",
      },
      {
        tabText: "Campaigns",
        icon: Campaigns,
        activeIcon: ActiveCampaigns,
        url: "/campaigns",
      },
      {
        tabText: "Reports",
        icon: Finance,
        activeIcon: ActiveFinance,
        url: "/reports",
      },
      {
        tabText: "SML",
        icon: SML,
        activeIcon: ActiveSML,
        url: "/sml",
      },
      {
        tabText: "Surveys",
        icon: Surveys,
        activeIcon: ActiveSurveys,
        url: "/surveys",
      },
      {
        tabText: "Help",
        icon: Help,
        activeIcon: ActiveHelp,
        url: "/help",
      },
      {
        tabText: "Account",
        icon: Account,
        activeIcon: ActiveAccount,
        url: "/account",
      },
    ])
  }, [props.Auth])
  


  return (
    <div className='sidebar'>
        <div className="image-wrapper-logo">
         <Image src={Logo} className="logo" alt="logo" width="100px" height="54px" />
        </div>
        <div className='BTNsEC'>
       {tab.map(data => {
            return (
              <SidebarTabs 
              TabName={data.tabText} 
              icon={data.icon && data.icon}
              url={data.url} 
              isActive={isActive}  
              handleActive={handleActive}
              activeIcon={data.activeIcon}
              />
            )
        })}
            {/* <Link href="/" >
              <div  onClick={ () => {handleSwitch("Dash")}} className={`switchBtn ${isActive === "Dash" ? "activeBtnSide" : "inactiveBtn"}`}>
                {isActive === "Dash" ? <Image src="/Images/Home.svg" alt="dash" width="24" height="24" /> : <Image src="/Images/Home.svg" alt="dash" width="24" height="24"/>}&nbsp;Dashboard
              </div>
            </Link>

              <div onClick={ () => {handleSwitch("Dis"), setShowDiscover(prevState => !prevState)}} 
               className={`switchBtn2 dropDownSidebAR ${isActive === "Dis" ? "activeBtnSide" : "inactiveBtn"}`}
              >
                <div style={{display: 'flex', flexDirection: 'row', alignItems: "center"}}>
                 {isActive === "Dis" ? <Image src={ActiveDiscover} alt="dash"/> :  <Image src={Discover} alt="dash"/>}&nbsp;Discover
                {!showDiscover && <IoIosArrowDown style={{marginLeft: "10px"}}size={16}/>}
                {showDiscover && <IoIosArrowUp style={{marginLeft: "10px"}}size={16}/>} </div>
                
              </div>
              {showDiscover && 
                <div className='indisBtb'> 
                  <Link href="discoverinfluencers" onClick={ () => {handleSwitch("DisInfu")}}>Influencers</Link><br />
                  <Link href="discoverclients" onClick={ () => {handleSwitch("DisCli")}}>Clients</Link>
                </div>}

            <Link href="/influencers"  >
            <div  onClick={ () => {handleSwitch("Infu")}} className={` switchBtn ${isActive === "Infu" ? "activeBtnSide" : "inactiveBtn"}`}>{isActive === "Infu" ? <Image src={ActiveInfluencers} alt="dash"/> : <Image src={Influencers} alt="dash"/>}&nbsp;Influencers</div></Link>
            <Link href="/clients" >
            <div onClick={ () => {handleSwitch("Cli")}} className={` switchBtn ${isActive === "Cli" ? "activeBtnSide" : "inactiveBtn"}`}>{isActive === "Cli" ? <Image src={ActiveClients} alt="dash"/> : <Image src={Clients} alt="dash"/>}&nbsp;Clients</div></Link>
            <Link href="/campaigns" >
            <div onClick={ () => {handleSwitch("Camp")}} className={` switchBtn ${isActive === "Camp" ? "activeBtnSide" : "inactiveBtn"}`}>{isActive === "Camp" ? <Image src={ActiveCampaigns} width="25px" height="25px" alt="dash"/> : <Image src={Campaigns} alt="dash"/>}&nbsp;Campaigns</div></Link>
            <Link href="/reports">
            <div onClick={ () => {handleSwitch("Rep")}} className={` switchBtn ${isActive === "Rep" ? "activeBtnSide" : "inactiveBtn"}`}>{isActive === "Rep" ? <Image src={ActiveReports} alt="dash"/> : <Image src={Reports} alt="dash"/>}&nbsp;Reports</div></Link> */}
        </div>
    </div>
  )
}
