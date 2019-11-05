Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :servers, only: [:create, :index, :show, :join, :leave] do
      resources :channels, only: [:create, :index, :show]
    end
    # resources :channels, only: [:show]
    resource :session, only: [:create, :destroy]
  end

  get 'api/servers/join/:invite_url', to: 'api/servers#join'
  get 'api/servers/leave/:id', to: 'api/servers#leave'
  root "static_pages#root"
end
