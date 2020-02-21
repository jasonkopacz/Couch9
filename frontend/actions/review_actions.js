import * as APIUtil from '../util/review_util';
import { receiveErrors } from './spot_actions.js'
export const RECEIVE_CURRENT_REVIEW = 'RECEIVE_CURRENT_REVIEW';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_SINGLE_REVIEW = 'RECEIVE_SINGLE_REVIEW';

export const receiveCurrentReview = payload => {
  return {
    type: RECEIVE_CURRENT_REVIEW,
    payload
  };
};

export const receiveAllReviews = payload => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    payload
  };
};

export const receiveSingleReview = payload => {
  return {
    type: RECEIVE_SINGLE_REVIEW,
    payload
  };
};

export const create = review => dispatch => {
  return APIUtil.create(review).then(payload => {
    dispatch(receiveCurrentReview(payload));
    return payload;
  },
  err => {
    dispatch(receiveErrors(err.responseJSON))
  });
};


export const fetchReviews = (id) => dispatch => {
  return APIUtil.fetchReviews(id).then(payload => {
    dispatch(receiveAllReviews(payload));
    return payload;
  },
  err => {
    dispatch(receiveErrors(err.responseJSON))
  });
};

export const fetchSingleReview = (user, id) => dispatch => {
  return APIUtil.fetchSingleReview(user, id).then(payload => {
    dispatch(receiveSingleReview(payload));
    return payload;
  },
  err => {
    dispatch(receiveErrors(err.responseJSON))
  });
};