class Api::LocationsController < ApplicationController
  
    def show
      @location = Location.find(params[:id])
    end

    def index
        @locations = Location.all
    end
  
    def search
      @search_query = params[:q]
      @locations = Location.where("name LIKE ?", @search_query)
      if @locations.length > 0
        render "api/locations/search"
      else
        render "api/locations/index"
      end
    end
  
    private
  
    def location_params
      params.require(:location).permit(
        :id, :name, :lat, :long
      )
    end
  end
  
  