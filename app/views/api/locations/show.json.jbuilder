json.set! @location.id do 
    json.extract! @location, :id, :name, :lat, :long
    json.set! :spots do 
        @spots.each do |spot|
            json.set! spot.id do 
                json.extract! spot, :id, :host_id, :host_name, :location_id, :sun, :mon, :tue, :wed, :thu, :fri, :sat, 
                :max_guests, :last_minute_requests, :preferred_gender, :has_children, :has_pets, 
                :smoking_at_home, :sleeping_arrangements, :description_of_sleeping_arrangements, 
                :roommate_situation, :pet_friendly, :kid_friendly, :smoking_allowed, :location_name,
                :wheelchair_accessible, :public_transportation, :what_i_can_share_with_guests, :additional_information        
            end
        end
    end
end