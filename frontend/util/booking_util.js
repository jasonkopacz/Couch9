export const create = booking => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${booking.user_id}/bookings`,
    data: { booking }
  })
};

export const update = booking => {
    return $.ajax({
      method: 'GET',
      url: `/api/users/${booking.user_id}/bookings/${booking.id}/edit`,
      data: { booking },
    })
};


export const fetchBookings = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/bookings`,
  })
}

export const fetchSingleBooking = (userId, bookingId) => {
      return $.ajax({
      method: 'GET',
      url: `/api/users/${userId}/bookings/${bookingId}`
    })
}

export const fetchAllBookings = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/bookings'
  })
}