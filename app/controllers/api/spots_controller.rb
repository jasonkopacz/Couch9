class Api::SpotsController < ApplicationController
  def create
    @spot = Spot.new(spot_params)
    if @spot.save
      render "api/spots/show"
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end

  def show
    @spot = Spot.find(params[:id])
  end

  def destroy
    @spot = Spot.find(params[:id])
    if current_user.id == @spot.host_id
      @spot.destroy
      render "api/dashboard"
    else
      render json ["You can not do that."]
    end
  end

  private

  def spot_params
    params.require(:spot).permit(:host_id, :location_id, :max_guests,
    :last_minute_requests, :preferred_gender, :kid_friendly, :pet_friendly, :smoking_allowed,
    :has_pets, :has_children, :smoking_at_home, :wheelchair_accessible, :sleeping_arrangements,
    :more_details, :request_preferences, :description_of_sleeping_arrangements,
    :roommate_situation, :public_transportation, :what_i_can_share_with_guests, :additional_information,
    available_nights: [:id, :value, :is_checked])
  end
end

