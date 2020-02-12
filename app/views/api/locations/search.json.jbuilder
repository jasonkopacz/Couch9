@locations.each do |location|
  json.set! location.id do
      json.partial! "api/locations/location", location: location
  end
end
