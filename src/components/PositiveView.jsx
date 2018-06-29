import React from 'react'
import { Row, Col, Panel,Label,Media } from 'react-bootstrap'
require('../styles/app.css');
const defaultPic = (false)? require('../assets/images/profile-pic.svg'): require('../assets/images/buffalo-profile-picture.svg')

const PositiveView = ({review,userName, date,i }) => {
  return (
    <li key = {i}>
     <Media>
      <Media.Left align="top">
      <img width={64} height={64} src={defaultPic} alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Panel >
       <Panel.Body className ="panelClass">
        <Col md={4} ><span>{userName}</span></Col><Col md={4}>  </Col><Col md={4}>{date}</Col>
        </Panel.Body>
        </Panel>
      <p>
       {review}  
       </p>
       <div className="line"></div>
    </Media.Body>
     </Media>
     </li>
      )
};

export default PositiveView;