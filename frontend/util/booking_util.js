export const create = booking => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${booking.user_id}/bookings`,
    data: { booking }
  })
};

export const fetchBookings = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/bookings`,
  })
}