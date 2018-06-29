import React from 'react'
import { Row, Col, Panel,Label,ListGroup,ListGroupItem,Badge,Table,th,tr} from 'react-bootstrap'
import TitlePanel from '../views/TitlePanel.jsx'

import '../../styles/activity.css'

class Activity extends React.Component {

  constructor(){
    super();
    this.template = this.template.bind(this)

    this.state = {
      locations:[]
    }
  }
  
  template(){
    return (
      <div>
        <TitlePanel name="Western Division"/>
        <Col md={3}>
         <Panel>
            <Panel.Heading>Locations</Panel.Heading>
              <ListGroup>    
                   <ListGroupItem ><Badge >3.8</Badge> Rosevile/2667 Harding </ListGroupItem>
                   <ListGroupItem><Badge >3.1</Badge> Sacramento/236 rocky ridge st </ListGroupItem>
                   <ListGroupItem><Badge >3.0</Badge>Rosevile/1021 Sunrise ave</ListGroupItem>
              </ListGroup>
         </Panel>
        </Col>

        <Col md={7}>
         <Panel>
          <Panel.Body>
            <Row> 
              <h3>&nbsp;Activities</h3>
             
              <br/>
            </Row>
            <Row> <br/>
              <Table  bordered={true} width="50%"   cellPadding="0" cellSpacing="0">
                <tbody>
                   <tr>
                      <th colSpan="4"><h3>This Month</h3>
                      </th>
                   </tr>
                  
                   <tr>
                      <th>Out of Paper Towel</th>
                      <th>Out of Toilet paper</th>
                      <th>Out of Soap</th>
                      <th>Attention needed</th>
                   </tr>
                   <tr>
                      <td>0</td>
                      <td>1</td>
                      <td>0</td>
                      <td>1</td>
                   </tr>
                   </tbody> 
                </Table> 
            </Row> 
              <Row> <br/>
              <Table  bordered={true} width="50%"   cellPadding="0" cellSpacing="0">
                <tbody>
                   <tr>
                      <th colSpan="4"><h3>Last Month</h3>
                      </th>
                   </tr>
                  
                   <tr>
                      <th>Out of Paper Towel</th>
                      <th>Out of Toilet paper</th>
                      <th>Out of Soap</th>
                      <th>Attention needed</th>
                   </tr>
                   <tr>
                      <td>1</td>
                      <td>2</td>
                      <td>1</td>
                      <td>1</td>
                   </tr>
                   </tbody> 
                </Table> 
            </Row> 
              <Row> <br/>
              <Table  bordered={true} width="50%"   cellPadding="0" cellSpacing="0">
                <tbody>
                   <tr>
                      <th colSpan="4"><h3>Month before</h3>
                      </th>
                   </tr>  
                   <tr>
                      <th>Out of Paper Towel</th>
                      <th>Out of Toilet paper</th>
                      <th>Out of Soap</th>
                      <th>Attention needed</th>
                   </tr>
                   <tr>
                      <td>1</td>
                      <td>1</td>
                      <td>1</td>
                      <td>1</td>
                   </tr>
                   </tbody> 
                </Table> 
            </Row> 
          </Panel.Body> 
         </Panel> 
        </Col>
      </div>
      )
  }
  render(){
    return(<div>{this.template()}</div>)
  }

}

export default Activity;