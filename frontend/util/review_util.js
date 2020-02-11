export const create = review => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${review.author_id}/reviews`,
    data: { review }
  })
};

export const fetchReviews = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/reviews`,
  })
}

export const fetchSingleReview = (userId, reviewId) => {
      return $.ajax({
      method: 'GET',
      url: `/api/users/${userId}/reviews/${reviewId}`
    })
}