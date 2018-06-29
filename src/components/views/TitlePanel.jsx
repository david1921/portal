
import React from 'react'
import {Grid, Row, Col,Panel} from 'react-bootstrap'

const titlePanel = ({name}) => {
  return (
      <Col md={10}>
        <Panel>
            <Panel.Body>
            <Col md={12}>
              <h2 >{name}</h2>
              </Col>
            </Panel.Body>
        </Panel>
      </Col>
    )
}


export default titlePanel;