export const create = review => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${review.user_id}/reviews`,
    data: { review }
  })
};

export const fetchReviews = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/reviews`,
  })
}

export const fetchSingleeview = (userId, reviewId) => {
      return $.ajax({
      method: 'GET',
      url: `/api/users/${userId}/reviews/${reviewId}`
    })
}