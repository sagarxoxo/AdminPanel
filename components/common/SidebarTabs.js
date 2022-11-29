import { useRouter } from 'next/dist/client/router';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function SidebarTabs(props) {

  const router = useRouter()

  const [showDiscover, setShowDiscover] = useState(false);


  return (
    <> 
    {props.url !== "/discover" && <Link href={props.url} >
        <div className={`switchBtn ${router.pathname === props.url && "activeBtnSide"}`} onClick={() => props.handleActive(props.url)}>
            {router.pathname === props.url ? 
            <Image src={props.activeIcon} alt="dash" width="24" height="24" color="#000"/> :  <Image src={props.icon} alt="dash" width="24" height="24" color="#000"/>
          }
            &nbsp;{props.TabName}
        </div>
    </Link>}

    {props.url === "/discover" && <div onClick={ () => {setShowDiscover(prevState => !prevState)}} className="switchBtn2 dropDownSidebAR">
    <div style={{display: 'flex', flexDirection: 'row', alignItems: "center"}}>
    {showDiscover ? <Image src={props.activeIcon} alt="dash" width="24" height="24" /> :  <Image src={props.icon} alt="dash" width="24" height="24"/>}&nbsp;Discover
    {!showDiscover && <IoIosArrowDown style={{marginLeft: "10px"}}size={16}/>}
    {showDiscover && <IoIosArrowUp style={{marginLeft: "10px"}}size={16}/>} </div>
    
    </div>}
    {showDiscover && 
    <div className='indisBtb'> 
        <Link href="discoverinfluencers" onClick={ () => {handleSwitch("DisInfu")}}>Influencers</Link><br />
        <Link href="discoverclients" onClick={ () => {handleSwitch("DisCli")}}>Clients</Link>
    </div>}
    
    </>
  )
}
