json.set! :spots do
  json.set! spot.id do
    json.extract! spot, :id, :host_id, :host_name, :location_id, :sun, :mon, :tue, :wed, :thu, :fri, :sat, 
      :max_guests, :last_minute_requests, :preferred_gender, :has_children, :has_pets, 
      :smoking_at_home, :sleeping_arrangements, :description_of_sleeping_arrangements, 
      :roommate_situation, :pet_friendly, :kid_friendly, :smoking_allowed, :location_name,
      :wheelchair_accessible, :public_transportation, :what_i_can_share_with_guests, :additional_information
  end
end

json.set! :users do
  json.set! spot.host.id do
    json.partial! "api/users/user", user: spot.host
  end
end