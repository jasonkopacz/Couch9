json.extract! review, :id, :author_id, :host_id, :surfer_id, :body

json.set! :users do
  json.set! review.author.id do
    json.partial! "api/users/user", user: review.author
  end
end