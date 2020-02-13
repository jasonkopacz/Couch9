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

  def update
    if logged_in?
      @booking = Booking.find(params[:id])
      @booking.update(booking_params)
      render "api/bookings/show"
    end
  end

  def index
    @user = User.find(params[:user_id])
    @bookings = Booking.where("user_id = ?", @user.id)
  end

  def show
    @booking = Booking.find(params[:id])
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
    params.require(:booking).permit(:id, :destination, :arrival_date, :departure_date,
      :number_of_travelers, :trip_description, :host_id, :surfer_id)
  end

end