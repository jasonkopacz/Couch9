export const create = booking => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${booking.user_id}/bookings`,
    data: { booking }
  })
};

export const update = booking => {
  if (booking instanceof FormData) {
    return $.ajax({
      method: 'GET',
      url: `/api/users/${booking.user_id}/bookings/${booking.id}/edit`,
      data: { booking },
      processData: false,
      contentType: false
    })
  }
};


export const fetchBookings = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/bookings`,
  })
}

export const fetchSingleBooking = (userId, bookingId) => {
  if (bookingId instanceof FormData) {
      return $.ajax({
      method: 'GET',
      url: `/api/users/${userId}/bookings/${bookingId}`
    })
  }
}