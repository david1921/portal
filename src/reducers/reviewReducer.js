import {ONLINE_REVIEWS,CHANGE_LOCATION} from '../actions/types';

const initialState = {
         rating : 0,
         physicalLocation: false,
         locationName: '',
         defaultDivisionName:'',
         negativeReviewCount: 0,
         currentMonthReviewCount:0,
         positiveReviewsCount: 0,
         mobilePositiveReviewCount:50,
         mobileNegativeReviewCount:0,
         mobileCurrentReviewCount:0,
         locationId: 0,
         sourceType: 'online',
         reviews:[],
         allReviews:[],
         currentMonthReviews:[],
         positiveReviews: [],
         negativeReviews: [],
         locations: []
      }
export default function(state = initialState, action){
  switch(action.type){
    case ONLINE_REVIEWS:
      //console.log(action.payload.reviews)
      let newState = Object.assign({},state,action.payload);
      newState.allReviews = [...action.payload.reviews[2]['allReviews']]
      return newState;
    case CHANGE_LOCATION:
      let locationState = Object.assign({},state,action.payload);
      locationState.allReviews = [...action.payload.reviews[2]['allReviews']]
      return locationState;
    default:
     return state;
  }
}