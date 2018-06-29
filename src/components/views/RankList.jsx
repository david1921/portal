import React from 'react'
import { Chart } from 'react-google-charts';
import {Grid, Row, Col,Panel,Nav, Navbar,NavItem,MenuItem,NavDropdown} from 'react-bootstrap'

const rankList =({object, titles, color, vAxisTitle, chartId})=>(
  <div>
         <Col md={12}>
             <Panel >
               <Panel.Body>
                 <Chart 
                    chartType="BarChart"
                    data={object}
                    options={{curveType: 'none',colors:[{color}],title:titles,chartArea: {width: '65%', height: '27%'},
                               hAxis: { title: 'Score',titleTextStyle:{italic:false,bold: true}},
                               vAxis: { title: vAxisTitle,minValue: 0, maxValue: 5,textPosition: 'OUT',titleTextStyle:{italic:false,bold: true}},
                              annotations: {highContrast: false}
                             }
                    }
                    graph_id={chartId}
                    width="100%"
                    height="400px"
                    legend_toggle
                  />
                 </Panel.Body>
              </Panel>
            </Col>
      </div>
);

export default rankList