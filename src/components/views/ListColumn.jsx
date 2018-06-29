import React from 'react'
import {Grid, Row, Col,Panel,ListGroup,ListGroupItem,Badge} from 'react-bootstrap'
import { Link} from 'react-router-dom'
import { Chart } from 'react-google-charts';

const listColumn = ({name, score}) => {
  return ( 
      <div>
         <Col md={3}>
        <Panel>
            <Panel.Heading>Locations</Panel.Heading>
              <ListGroup>    
                   <ListGroupItem ><Badge >3.8</Badge><Link to='/nearby'> Rosevile/2667 Harding</Link> </ListGroupItem>
                   <ListGroupItem><Badge >3.1</Badge> <Link to='/nearby'>Sacramento/236 rocky ridge st</Link> </ListGroupItem>
                   <ListGroupItem><Badge >3.0</Badge><Link to='/nearby'>Rosevile/1021 Sunrise ave</Link> </ListGroupItem>
              </ListGroup>
        </Panel>
       </Col>

        <Col md={7}>
         <Panel>
          <Panel.Body>
           <Row><h4>&nbsp;Location area analytics</h4><div className="line"></div></Row>
           <Col md={8}>
            <h5 className="title">Location Demographic </h5>
              <Row>
                <br/>
                <div className="reputation-score-text ">Number of Restaurants in the area</div>
                <br/>
                <div className="medium-orange-circle"> {Math.floor(Math.random() * 20)} </div>  
                <br/><br/>
                <div className="line"></div>
              </Row>
        
              <Row>
                  <div className="reputation-score-text">Location Population Income</div>
                   <Chart 
                    chartType="PieChart"
                    data= {[["under 30k","percentage"],["Under 60K",Math.floor(Math.random() * 100)], ["Over 60K", 23]]}
                    options={{colors:['#b9ff23','#43aeff'],chartArea: {width: '100%', height: '70%'}                
                             }
                    }
                    graph_id="incomeStats"
                    width="100%"
                    height="30%"
                  />
                  <br/>
                  <div className="line"></div>
                  <br/>
              </Row>

              <Row> 
               <div className="reputation-score-text">Location Population Growth</div>
               <Chart 
                    chartType="LineChart"
                    data= {[
                            ['Year','Population'],
                            ['2000', Math.floor(Math.random() * 10000)], ['2005', Math.floor(Math.random() * 10000)],['2010', Math.floor(Math.random() * 10000)],['2015', Math.floor(Math.random() * 10000)]
                                  ]}
                    options={{curveType: 'none',chartArea: {width: '60%', height: '60%'},
                               hAxis: { title: 'Year',titleTextStyle:{italic:false,bold: true}},
                               vAxis: { title: 'Population',titleTextStyle:{italic:false,bold: true}}
                             }
                    }
                    graph_id="maleFemale"
                    width="100%"
                    height="35%"
                    legend_toggle
                  />
                <br/>
                <div className="line"></div>
                <br/>
              </Row>
            
              <Row>
                <div className="reputation-score-text">Cultural Demographic</div>
                <Chart 
                      chartType="PieChart"
                      data= {[["Ethnicity","percentage"],["Caucasions", Math.floor(Math.random() * 100)], ["Hispanic", Math.floor(Math.random() * 100)],["Asian", Math.floor(Math.random() * 100)],["Black", Math.floor(Math.random() * 100)]]}
                      options={{pieHole:0.5,colors:['#36ff39','#43aeff','#ff7053','#ffd754'],chartArea: {width: '100%', height: '60%'}                
                               }
                      }
                      graph_id="Cultural"
                      width="100%"
                      height="30%"
                    />
                   <br/><br/>
                   <div className="line"></div>
               </Row>
            </Col>
            <Col md={4}>
                <h5 className="title">Near-by Restaurants</h5>
                <br/>
                 <ListGroup componentClass="ul">
                    <ListGroupItem ><Badge >3.8</Badge> Wendys</ListGroupItem>
                    <ListGroupItem href="#link2"><Badge >3.5</Badge>Burger King</ListGroupItem>
                    <ListGroupItem ><Badge >3.3</Badge>Arbys</ListGroupItem>
                    <ListGroupItem ><Badge >3.3</Badge> Red Robin</ListGroupItem>
                    <ListGroupItem href="#link2"><Badge >3.2</Badge>Dennys</ListGroupItem>
                    <ListGroupItem ><Badge >3.1</Badge>McDonalds</ListGroupItem>
                    <ListGroupItem ><Badge >3.8</Badge> Outback steakhouse</ListGroupItem>
                    <ListGroupItem href="#link2"><Badge >3.5</Badge>Claim jumper</ListGroupItem>
                    <ListGroupItem ><Badge >3.3</Badge>Waffle house</ListGroupItem>
                    <ListGroupItem ><Badge >3.3</Badge> Red Robin</ListGroupItem>
                    <ListGroupItem href="#link2"><Badge >3.2</Badge>Dennys</ListGroupItem>
                    <ListGroupItem ><Badge >3.1</Badge>McDonalds</ListGroupItem>
                 </ListGroup>
            </Col>
             </Panel.Body>
         </Panel>

        </Col>
       
      </div>
    
    
    )
}


export default listColumn;