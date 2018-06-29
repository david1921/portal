import {ONLINE_REVIEWS, CHANGE_LOCATION} from './types';
import Api from '../apiUtil';

export function getOnlineReviews() {
  const response = Api.get("/companies/users")
  return {
    type:ONLINE_REVIEWS, 
    payload: response
  }

}

export function changeLocation(id) {
  const response = Api.get("/locations/" + id)
  return {
    type:CHANGE_LOCATION, 
    payload: response
  }

}