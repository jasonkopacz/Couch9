@reviews_as_host_from_surfer.each do |review|
  json.set! review.id do
    json.partial! 'review', review: review
  end
end

@reviews_from_host.each do |review|
  json.set! review.id do
    json.partial! 'review', review: review
  end
end

@reviews_for_host.each do |review|
  json.set! review.id do
    json.partial! 'review', review: review
  end
end