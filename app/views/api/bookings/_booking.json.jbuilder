
# json.set! :bookings do
#   json.set! booking.id do
    json.extract! booking, :destination, :arrival_date, :departure_date, :number_of_travelers, :trip_description
#   end
# end





# json.set! :users do
#   json.set! booking.user_id do
#     json.partial! "api/users/user", user: booking.user
#   end
# end