export const selectUser = ({ user }, userId) => {
  return user[userId];
};

export const selectBookings = (state, firstId, secondId) => {
  const bookings = Object.values(state.bookings)
  const selectedBookings = bookings.filter(book => {
    book.user_id === secondId
  })
  return selectedBookings;
}