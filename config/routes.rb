Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy, :show, :index, :update] do
      resources :bookings, only: [:create, :destroy, :show, :index]
    end
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:create, :show, :destroy, :update]
  end
  root "static_pages#root"
end
