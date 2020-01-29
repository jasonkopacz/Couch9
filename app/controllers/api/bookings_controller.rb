class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)
    @booking.user_id = current_user.id
    if @booking.save
      render "api/bookings/show"
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def show
    @booking = Booking.find(params[:id])
  end

  def index
    @bookings = Booking.all
  end

  def destroy
    if logged_in?
      @booking = Booking.find(params[:id])
      @booking.destroy
      render "api/users"
    else
      render json ["You are not logged in."]
    end
  end

  def booking_params
    params.require(:booking).permit(:destination, :arrival_date, :departure_date,
      :number_of_travelers, :trip_description)
  end

end