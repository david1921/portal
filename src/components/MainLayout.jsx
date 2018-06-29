import React from 'react'
import { BrowserRouter as Router,Route,Link, Switch,Redirect} from 'react-router-dom'
import Account from './containers/Account.jsx'
import SignUp from './containers/SignUpPage.jsx'
import Reviews from './containers/Reviews.jsx'
import Activity from './containers/Activity.jsx'
import Dashboard from './containers/Dashboard.jsx'
import Nearby from './containers/Nearby.jsx'
import {Grid, Row, Col,Panel,Nav, Navbar,NavItem,MenuItem,NavDropdown} from 'react-bootstrap'
import SideBar from './views/SideBar.jsx'

const logo = (false)? require('../assets/images/logo-ihop.svg'):require('../assets/images/buffaloLogo.svg')
const userIcon = (false)? require('../assets/images/man-user.svg'):require('../assets/images/buffaloAccount.svg')
const notificationIcon = (false)? require('../assets/images/notification.svg'):require('../assets/images/buffaloNotification.svg')
require('../styles/app.css');




const MainLayout = () => (
  <main>
   <Grid>
   <Row>
   <Navbar >
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home"><img className="style-logo-svg" src={logo}/></a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight>

    <NavItem eventKey={1} href="#">
      <img className="style-svg" src={notificationIcon}/>  Notifications 
    </NavItem>
    <NavItem eventKey={2} href="#">
     <img className="style-svg" src={userIcon}/> Account 
    </NavItem>
  </Nav>
</Navbar>
</Row>

   <Router>
     <div>
       <Col md={2} >
        <SideBar/>
       </Col>
       <Switch>
          <Route path='/myAccount' component={Account}/>
          <Route path='/reviews' component={Reviews}/>
          <Route path='/nearby' component={Nearby}/>
          <Route path='/signUp' component={SignUp}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/onsite-activities' component={Activity}/>
          <Route exact path='/' component={Dashboard}/>   
        </Switch>
      </div>
    </Router>
</Grid>


  </main>

)

export default MainLayout;