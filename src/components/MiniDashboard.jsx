import React from 'react'
import {PieChart} from 'react-easy-chart';
import { Row, Col, Panel,Label} from 'react-bootstrap'
require ('../styles/MiniDashBoard.css')
require('../styles/app.css');

const MiniDashBoard = ({score, positiveReviewCount, negativeReviewCount,currentMonthReviewCount}) => (
  <div className ="miniDashBoar">
 
   <Panel >
      <Panel.Body>
        <Col md={3}>
           <h5> Reputation Score </h5>
           <div className="orange-circle"> {score}  </div>
        </Col>
        <Col md={3}>
          <h5> +Ve Reviews </h5>
          <div className="green-circle"> {positiveReviewCount}  </div>
        </Col>
        <Col md={3}>
          <h5> -Ve Reviews</h5>
          <div className="red-circle"> {negativeReviewCount}  </div>
        </Col>
       <Col md={3}>
        <h5> <Label>New</Label>&nbsp;This month</h5>
        <div className="blue-circle">{currentMonthReviewCount} </div>
       </Col>
    </Panel.Body>
   </Panel>
  
   </div>
  );

export default  MiniDashBoard;