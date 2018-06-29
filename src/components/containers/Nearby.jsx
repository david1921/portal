
import React from 'react'
import Api from '../../apiUtil'
import {Grid, Row, Col,Panel,Nav, Navbar,NavItem,MenuItem,NavDropdown} from 'react-bootstrap'


import TitlePanel from '../views/TitlePanel.jsx'
import ListColumn from '../views/ListColumn.jsx'
import Demographic from '../views/Demographic.jsx'

class Nearby extends React.Component {

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
        <TitlePanel name = "West Division"/>
        
          <ListColumn/>

      
      </div>
      )
  }
  render(){
    return(<div>{this.template()}</div>)
  }

}

export default Nearby;