import React from 'react'
import PositiveReview  from '../PositiveView.jsx'
import NegativeReview  from '../NegativeView.jsx'
import MiniDashboard  from '../MiniDashboard.jsx'
import {Grid, Row, Col,Panel,Nav, Navbar,Tabs,Tab,NavItem,MenuItem,NavDropdown,ButtonGroup,Button,ToggleButtonGroup,ToggleButton,Well,ListGroup,ListGroupItem,Badge} from 'react-bootstrap'
import Api from '../../apiUtil'
import {connect} from 'react-redux';
import {getOnlineReviews,changeLocation} from '../../actions/index';
import {bindActionCreators} from 'redux';

import '../../styles/review.css'

class Reviews extends React.Component {
   
   constructor(props) {
      super(props);
      this.currentReviewTab = this.currentReviewTab.bind(this);
      this.positiveReviewTab = this.positiveReviewTab.bind(this);
      this.negativeReviewTab = this.negativeReviewTab.bind(this);
      this.handleChange =this.handleChange.bind(this);
      this.miniDashboard =this.miniDashboard.bind(this);
      this.sourceTab = this.sourceTab.bind(this);
      this.reviewsTab = this.reviewsTab.bind(this);
      this.regularTemplate = this.regularTemplate.bind(this);
      this.multiLocationTemplate = this.multiLocationTemplate.bind(this);
      this.changeLocation = this.changeLocation.bind(this)
      this.locationTitlePanel = this.locationTitlePanel.bind(this)

   }

   componentDidMount() {
     this.props.getOnlineReviews()
   }

    currentReviewTab(reviews){
          
      if (this.props.reviews.sourceType === 'mobile'){          
          return (<Well><h2>No reviews</h2></Well>)
      }
      else if (this.props.reviews.sourceType === 'online') {
         if (reviews.length > 0){
           return (<ul>
                     <div>{reviews.map((review, i) => (<PositiveReview key={i} review = {review['current_month_review']} userName = {review['user_name']} date = {review['review_date']}/>))}
                     </div>
                   </ul>
                  )
          } 
          else{
            return (<Well bsSize="large"><h2 >No reviews</h2></Well>)
          }
      }
    }
   
    positiveReviewTab(reviews){     
      if (this.props.reviews.sourceType === 'mobile'){          
          return (<Well><h2>No reviews</h2></Well>)
      }
      else if (this.props.reviews.sourceType === 'online') {
         if (reviews.length > 0){
           return (<ul>
                     <div>{reviews.map((review, i) => (<PositiveReview key={i} review = {review['current_month_review']} userName = {review['user_name']} date = {review['review_date']}/>))}
                     </div>
                   </ul>
                  )
          } 
          else{
            return (<Well bsSize="large"><h2 >No reviews</h2></Well>)
          }
      }
    }

    negativeReviewTab(reviews){     
      if (this.props.reviews.sourceType === 'mobile'){          
          return (<Well><h2>No reviews</h2></Well>)
      }
      else if (this.props.reviews.sourceType === 'online') {
         if (reviews.length > 0){
           return (<ul>
                     <div>{reviews.map((review, i) => (<PositiveReview key={i} review = {review['current_month_review']} userName = {review['user_name']} date = {review['review_date']}/>))}
                     </div>
                   </ul>
                  )
          } 
          else{
            return (<Well bsSize="large"><h2 >No reviews</h2></Well>)
          }
      }
    }

   handleChange(e) {
 
    if (e.target.value === '1'){
     this.setState({ sourceType: 'online'});
    }
    else if (e.target.value === '2'){
     this.setState({ sourceType: 'mobile'});
    }
   }
   reviewsTab(){
     return(
          <Panel>
            <Panel.Body>
              <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                  <Tab eventKey={1} title="This Month reviews ">
                    { this.currentReviewTab(this.props.reviews.currentMonthReviews)}
                  </Tab>
                  <Tab eventKey={2} title="Positive reviews ">
                    { this.positiveReviewTab(this.props.reviews.positiveReviews)}
                  </Tab>
                  <Tab eventKey={3} title="Negative Reviews"> 
                    {this.negativeReviewTab(this.props.reviews.negativeReviews)}
                  </Tab>
                  <Tab eventKey={4} title="All Reviews"> 
                    <ul>
                      <div>{this.props.reviews.allReviews.map((review, i) => (<PositiveReview key={i} review = {review['review']} userName = {review['user_name']} date = {review['review_date']}/>))}</div>
                    </ul>
                  </Tab> 
              </Tabs>  
            </Panel.Body>
          </Panel>
        )
   }
   miniDashboard(){
     if (this.props.reviews.sourceType === 'mobile'){
      return (<MiniDashboard score = {this.state.rating} positiveReviewCount =  {this.props.reviews.mobilePositiveReviewCount} negativeReviewCount = {this.props.reviews.mobileNegativeReviewCount} currentMonthReviewCount ={this.props.reviews.mobileCurrentReviewCount}/>)
     }
     else if (this.props.reviews.sourceType === 'online') {
      return (<MiniDashboard score = {this.props.reviews.rating} positiveReviewCount = {this.props.reviews.positiveReviewsCount} negativeReviewCount = {this.props.reviews.negativeReviewCount} currentMonthReviewCount ={this.props.reviews.currentMonthReviewCount}/>)
     }
   }

   sourceTab(){
    return(
      <Panel>
          <Panel.Body>
            <ToggleButtonGroup type="checkbox" defaultValue={1} >
              <ToggleButton value={1} onChange={this.handleChange} >Online</ToggleButton>
              <ToggleButton value={2} onChange={this.handleChange}>Mobile App</ToggleButton>
              <ToggleButton value={3}>Social media</ToggleButton>
            </ToggleButtonGroup>
          </Panel.Body>
      </Panel>
      )
   }

    locationTitlePanel(){
    return(
      <Panel>
          <Panel.Body>
            <h2 >{this.props.reviews.defaultDivisionName}</h2>
             <div className="line"></div>
            <h4><span className= "text-align-left">Location</span><span className= "text-align-right">{this.props.reviews.locationName}</span></h4>
          </Panel.Body>
      </Panel>
      )
   }

   changeLocation(event) {
        let id = event.target.id
        let list = document.getElementsByClassName('list-group-item');

        Array.from(list).forEach((el) =>{ 
           el.classList.remove('active');
         })  
        event.target.classList.add('active')
        this.props.changeLocation(id);
    
   }
   multiLocationTemplate(){
    return(
      <div>
     <Col md = {7}>
        <Row>
          {this.locationTitlePanel()}
        </Row>
        <Row>
          {this.miniDashboard()}
        </Row>  
        <Row>
          {this.reviewsTab()}
        </Row>
      </Col>
      <Col md = {3}> 
        <Panel>
         <Panel.Heading>Locations by rank</Panel.Heading>
          <ListGroup>
            {this.props.reviews.locations.map((location,i)=>(<ListGroupItem key={i} id = {location['location_id']} onClick={this.changeLocation}><Badge >{location['rating']}</Badge> {location['name']}</ListGroupItem>))}  
          </ListGroup>
        </Panel>
      </Col>
      </div>
     )
   }
   regularTemplate(){
    return(
     <Col md = {10}>
        <Row>
          {this.sourceTab()}
        </Row>
        <Row>
          {this.miniDashboard()}
        </Row>  
        <Row>
          {this.reviewsTab()}
        </Row>
      </Col>
     )
   }
   render() { 
      const template = (this.props.reviews.physicalLocation)? this.multiLocationTemplate(): this.regularTemplate()
      return(
          <div>
            {template}
          </div>
      );
     } 
     
   
}

function mapStateToProps(state){
 return {
    reviews: state.reviewData
 }
}

function mapDispatchToProps(dispatch){
 return bindActionCreators ({getOnlineReviews,changeLocation},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Reviews);

