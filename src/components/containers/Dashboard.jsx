import React from 'react'
import PositiveReview  from '../PositiveView.jsx'
import NegativeReview  from '../NegativeView.jsx'
import MiniDashboard  from '../MiniDashboard.jsx'
import {PieChart} from 'react-easy-chart';
import { Chart } from 'react-google-charts';

import Api from '../../apiUtil'
import {Grid, Row, Col,Panel,Nav, Navbar,NavItem,MenuItem,NavDropdown} from 'react-bootstrap'
import SideBar from '../views/SideBar.jsx'
import RankList from '../views/RankList.jsx'

//dashboard will be Based on role
//c level execs will see company wide(all divisions) 
//divison managers will see division wide locations(all their division locations ) and dashboard showing summary of other division performance
//store manager will his location and dashboard showing summary of other locations
class Dashboard extends React.Component {
   
   constructor() {
      super();
      this.reviewCount = this.reviewCount.bind(this)
      this.sourceTab  = this.sourceTab.bind(this)
      this.rankTab  = this.rankTab.bind(this)
      this.titlePanel  = this.titlePanel.bind(this)
      this.regularTemplate = this.regularTemplate.bind(this);
      this.multiLocationTemplate = this.multiLocationTemplate.bind(this);

      this.state = {
         companyName: '',
         companyRank : 0,
         defaultDivisionName:'',
         allReviewsCount: 0,
         physicalLocation: false,
         positiveReviewCount: 0,
         negativeReviewCount: 0,
         thisMonthReviewsCount:0,
         defaultDivsisionScore:0,
         lastMonthRank: 0,
         monthBeforeRank: 0,
         trustradiusSource: 0,
         softAdviceSource: 0,
         capterraSource: 0,
         g2crowdSource: 0,
         g2crowdSourceRemainder:0,
         divisions: [],
         bestPerformingLocations: [],
         worstPerformingLocations: [],
         worstPerformingAgainstNearbyLocations: [],
         bestPerformingAgainstNearbyLocations: [],
         competitors: []
      }
   }

   componentDidMount() {
    Api.get("/companies/dashboard").then(data => {

        var arr = data.competitors.slice(0,5).map((obj,i)=>[obj['name'],parseFloat(obj['rank'])]);
        arr.push([data.name, parseFloat(data.rating)])
        arr = arr.sort((a,b)=>(b[1]-a[1]));
        arr.unshift(["company","Score"]);

        var divisions = data.divisions.slice(0,5).map((obj,i)=>[obj['name'],parseFloat(obj['rating'])]);
        divisions.unshift(["Division","Score"]);

        var bestPerformingLocations = data.best_performing_locations.slice(0,5).map((obj,i)=>[obj['name'],parseFloat(obj['rating'])]);
        bestPerformingLocations.unshift(["Location","Score"]);

        var worstPerformingLocations = data.worst_performing_locations.slice(0,5).map((obj,i)=>[obj['name'],parseFloat(obj['rating'])]);
        worstPerformingLocations.unshift(["Location","Score"]);

        var worstPerformingAgainstNearbyLocations = data.worst_performing_against_nearby_restaurants.slice(0,5).map((obj,i)=>[obj['name'],parseFloat(obj['rating'])]);
        worstPerformingAgainstNearbyLocations.unshift(["Location","Score"]);

        var bestPerformingAgainstNearbyLocations = data.best_performing_against_nearby_restaurants.slice(0,5).map((obj,i)=>[obj['name'],parseFloat(obj['rating'])]);
        bestPerformingAgainstNearbyLocations.unshift(["Location","Score"]);
       
        var trustradiusSource = ((data.sources["trustradius"]/data.all_reviews_count) * 100).toFixed(1)
        var softAdviceSource = ((data.sources["softwareadvice"]/data.all_reviews_count) * 100).toFixed(1)
        var capterraSource = ((data.sources["capterra"]/data.all_reviews_count) * 100).toFixed(1)
        var g2crowdSource = ((data.sources["g2crowd"]/data.all_reviews_count) * 100).toFixed(1)
        var g2crowdSourceRemainder = 100.0 - g2crowdSource
        //this.state.sources["g2crowd"]
        this.setState({companyName: data.name})
        this.setState({companyRank: data.rating})
        this.setState({physicalLocation: data.physical_location})
        this.setState({negativeReviewCount: data.negative_reviews_count})
        this.setState({defaultDivisionName: data.location_name})
        this.setState({defaultDivsisionScore: data.default_division_score})
        this.setState({positiveReviewCount: data.positive_reviews_count})
        this.setState({thisMonthReviewsCount: data.this_month_reviews_count})
        this.setState({allReviewsCount : data.all_reviews_count})
        this.setState({lastMonthRank: data.last_month_rank})
        this.setState({monthBeforeRank: data.month_before_rank})
        this.setState({trustradiusSource : trustradiusSource })
        this.setState({softAdviceSource : softAdviceSource})
        this.setState({capterraSource : capterraSource})
        this.setState({g2crowdSource : g2crowdSource})
        this.setState({g2crowdSourceRemainder: g2crowdSourceRemainder})
        this.setState({divisions : divisions})
        this.setState({bestPerformingLocations : bestPerformingLocations})
        this.setState({worstPerformingLocations : worstPerformingLocations})
        this.setState({worstPerformingAgainstNearbyLocations: worstPerformingAgainstNearbyLocations})
        this.setState({bestPerformingAgainstNearbyLocations: bestPerformingAgainstNearbyLocations})
        this.setState({competitors : arr})
      
      }).catch(function(error){
         console.log(error)
         alert('Error: we have to notify air brake ' + error.message)
      }) 
    }

  titlePanel(){
    return(
      <Col md={12}>
      <Panel>
          <Panel.Body>
            <h2 >{this.state.defaultDivisionName}</h2>
             
          </Panel.Body>
      </Panel>
      </Col>
      )
   }
// division history ranks
// your division vs other divisions
//top 3 best performing  locations within your division
//bottom 3 worst performing locations within your division
//top 3 best performing division locations against nearby restaurants
//bottom 3 worst performing division locations against nearby restaurants
  rankTab(){
    return (
          <div>
            <Col md={4}>
            <Panel >
             <Panel.Title ><h5>This Month Score</h5></Panel.Title>
             <Panel.Body>
                <div className="big-orange-circle"> {this.state.defaultDivsisionScore}  </div>
                <div className="reputation-score-text">Reputation score out of 5</div>
             </Panel.Body>
            </Panel>
           </Col>
           <Col md={4}>
            <Panel >
             <Panel.Title ><h5>Last Month Score</h5></Panel.Title>
             <Panel.Body>           
                 <div className="big-orange-circle"> {this.state.lastMonthRank}  </div>
                 <div className="reputation-score-text">Reputation score out of 5</div>
             </Panel.Body> 
            </Panel>
           </Col>
           <Col md={4}>
            <Panel >
             <Panel.Title ><h5>Month before Score</h5></Panel.Title>
             <Panel.Body>
                  <div className="big-orange-circle"> {this.state.monthBeforeRank}  </div>
                  <div className="reputation-score-text">Reputation score out of 5</div>
             </Panel.Body>
            </Panel>    
           </Col>
          </div>
        )
  }
  reviewCount (){
    return(<div>
              <Col md={4}>
               <Panel >
               <Panel.Title >THIS MONTH REVIEWS COUNT</Panel.Title>
               <Panel.Body>
                 <h1 className="orange-circle"> {this.state.thisMonthReviewsCount}  </h1>
               </Panel.Body>
              </Panel>
            </Col>
            <Col md={4}>
               <Panel >
               <Panel.Title >+VE REVIEWS COUNT</Panel.Title>
               <Panel.Body>
                <h1 className="green-circle"> {this.state.positiveReviewCount}  </h1>
               </Panel.Body>
              </Panel>
            </Col>
            <Col md={4}>
               <Panel >
               <Panel.Title >-VE REVIEWS COUNT</Panel.Title>
               <Panel.Body>
                 <h1 className="red-circle"> {this.state.negativeReviewCount}  </h1>
                 
               </Panel.Body>
              </Panel>
            </Col>
          </div>)
    }

    sourceTab(){
      return(
           <div>
               <Col md={12}>
                <Panel >
                 <Panel.Title >SOURCES</Panel.Title>
                 <Panel.Body>
                  <Col md={3}>
                  <h5> Capterra.com </h5>
                  <div className= "textlabel">  {this.state.capterraSource} %</div>
                   <PieChart size = {200} innerHoleSize={150}
                     data={[
                      {key: 'capterra',
                       color: '#0f0',
                       value: this.state.capterraSource,
                      },
                      {key: 'capterraRemainder',
                       color: '#eee',
                       value: 100.0-this.state.capterraSource,
                      },
                    ]}
                  />
                  </Col>
                   <Col md={3}>
                   <h5> Trustradius.com </h5>
                    <div className= "textlabel">  {this.state.trustradiusSource} %</div>
                    <PieChart size = {200} innerHoleSize={150}
                     data={[
                      {key: 'trustradius',
                       color: '#0f0',
                       value: this.state.trustradiusSource,
                      },
                      {key: 'trustradiusRemainder',
                       color: '#eee',
                       value: 100.0-this.state.trustradiusSource,
                      },
                    ]}
                  />
                   </Col>
                     <Col md={3}>
                      <h5> Softwareadvice.com </h5>
                    <div className= "textlabel">  {this.state.softAdviceSource}%</div>
                    <PieChart size = {200} innerHoleSize={150}
                     data={[
                      {key: 'softwareadvice',
                       color: '#0f0',
                       value: this.state.softAdviceSource,
                      },
                      {key: 'softwareadviceRemainder',
                       color: '#eee',
                       value: 100.0-this.state.softAdviceSource,
                      },
                    ]}
                  />
                   </Col>

                    <Col md={3}>
                     <h5> G2crowd.com </h5>
                    <div className= "textlabel">  {this.state.g2crowdSource}%</div>
                    <PieChart size = {200} innerHoleSize={150}
                     data={[
                      {key: 'g2crowdSource',
                       color: '#0f0',
                       value: this.state.g2crowdSource,
                      },
                      {key: 'g2crowdSourceRemainder',
                       color: '#eee',
                       value: 100.0-this.state.g2crowdSource,
                      },
                    ]}
                  />
                   </Col>
                 </Panel.Body>
                </Panel>
             </Col>
           </div>
        )
    }


   regularTemplate(){
    return(<div>

          <Row>
            {this.rankTab()}
          </Row>

          <Row>
           {this.reviewCount()}
          </Row>
          
          <Row>
           {this.sourceTab()}
          </Row>

          <Row>
            <RankList object= {this.state.competitors} titles='You Vs competitors'  color='#E5B100'  vAxisTitle = 'Companies' chartId="competitors" /> 
        </Row>
       </div>
       ) 
   }

   multiLocationTemplate(){
     return (
        <div>
          <Row>
           {this.titlePanel()}
          </Row>
          <Row>
           {this.rankTab()}
          </Row>
          <Row>
            <RankList object= {this.state.divisions} titles='Your division VS All other divisions'   color='#78E40C' vAxisTitle = 'Divsions' chartId="divisions" /> 
           </Row>
          <Row>
            <RankList object= {this.state.bestPerformingLocations} titles='Top performing locations' color='#39A2EA'   vAxisTitle = 'Locations' chartId="bestLocation"/> 
           </Row>
            <Row>
            <RankList object= {this.state.worstPerformingLocations} titles='Worst performing locations' color='#EA4939'   vAxisTitle = 'Locations' chartId="worstLocation"/> 
           </Row>
            <Row>
             <RankList object= {this.state.bestPerformingAgainstNearbyLocations} titles='Best performing against near-by locations' color='#D89F13' vAxisTitle = 'Locations' chartId="bestnearbyLocation"/> 
           </Row>
            <Row>
             <RankList object= {this.state.worstPerformingAgainstNearbyLocations} titles='Worst performing against near-by locations' color='#A10CE4' vAxisTitle ='Locations' chartId="worstnearbyLocation"/> 
           </Row>
        </div>
     )
   }
   render() {  
      const template = (this.state.physicalLocation)? this.multiLocationTemplate(): this.regularTemplate()    
      return (
        <div>
         <Col md = {10}>
          {template}
        </Col>
        </div>      );
  }


        

   
}

export default Dashboard;