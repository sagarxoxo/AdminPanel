import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import FourContainerCards from '../common/cards/FourContainerCards';
import ScrollContainerCard from '../common/cards/ScrollContainerCard';
import SmallContainerCard from '../common/cards/SmallContainerCard';
import ThreeContainerCards from '../common/cards/ThreeContainerCards';

export default function ContainerSection(props) {

  return (
    <div>
        {props.title && <h2 className="headerTitle">{props.title}</h2>}
        {props.container === "4" && <FourContainerCards data={props.data} />}
        {props.container === "3" && <ThreeContainerCards data={props.data} />}
        {props.container === "6" && <SmallContainerCard data={props.data} />}
        {props.container === "scroll" && <ScrollContainerCard data={props.data} />}
    </div>
  )
}
