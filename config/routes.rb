Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    get 'search', to: 'spots#search', as: 'search'
    resources :users, only: [:create, :destroy, :show, :index, :update] do
      resources :bookings, only: [:create, :destroy, :show, :index, :edit]
    end
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:create, :show, :destroy, :update] do
      
    end
  end
end
