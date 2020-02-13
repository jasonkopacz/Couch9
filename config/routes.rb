Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    # get 'search', to: '/api/spots#search'
    resources :users, only: [:create, :destroy, :show, :index, :update] do
      resources :bookings, only: [:create, :destroy, :show, :index, :update]
      resources :reviews, only: [:create, :show, :destroy, :index]
    end
    resource :session, only: [:create, :destroy]
    resources :spots
    resources :bookings, only: [:index]
    resources :locations, only: [:index, :show]
    get 'search', to: '/api/locations#search'
  end
end
