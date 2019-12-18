Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :destroy, :show]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:create, :show, :destroy]
  end
  root "static_pages#root"
end
