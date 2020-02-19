@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :id, :host_id, :host_name, :location_id, :location_name,
      :sun, :mon, :tue, :wed, :thu, :fri, :sat, :max_guests, 
      :last_minute_requests, :preferred_gender, :has_children, :has_pets, 
      :smoking_at_home, :sleeping_arrangements, :description_of_sleeping_arrangements, 
      :roommate_situation, :pet_friendly, :kid_friendly, :smoking_allowed, 
      :wheelchair_accessible, :public_transportation,
      :what_i_can_share_with_guests, :additional_information
  end
end
