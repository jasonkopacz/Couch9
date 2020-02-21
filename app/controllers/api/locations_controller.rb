class Api::LocationsController < ApplicationController
  
    def show
      @location = Location.find(params[:id])
      @spots = Spot.where("location_id = ?", @location.id)
    end

    def index
        @locations = Location.all
    end
  
    def search
      # @search_q = {}
      # @search_query.split(",").each { |word| @search_q[word] = true}
      # @q = @search_query.split(",")
      # @locations = Location.where("'%'name'%' LIKE ANY '%'#{@q}'%'")
      
      
      @search_query = params[:q]
      if @search_query.to_i == 0 && Location.where("name LIKE ?", @search_query).first == nil
          @spots = Spot.all
      elsif @search_query.to_i == 0 && Location.where("name LIKE ?", @search_query) != nil
        @location = Location.where("name LIKE ?", (@search_query)).first
        @spots = Spot.where("location_id = ?", @location.id)
      elsif @search_query.to_i > 0
        @location = Location.where("id = ?", @search_query.to_i).first
        @spots = Spot.where("location_id = ?", @search_query.to_i)
      end
      if @location && @spots
        render "api/locations/search"
      else
        render "api/spots/index"
      end
    end
  
    private
  
    def location_params
      params.require(:location).permit(
        :id, :name, :lat, :long
      )
    end
  end
  
  