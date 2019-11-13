Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resources :servers, only: [:create, :index, :show, :join, :leave, :update, :destroy] do
      resources :channels, only: [:create, :index, :show]
    end
    resources :messages, only: [:index]
    resources :friends, only: [:index, :create, :pending]
    resource :session, only: [:create, :destroy]
  end
  resources :calls, only: [:create]

  get 'api/servers/join/:invite_url', to: 'api/servers#join'
  get 'api/servers/leave/:id', to: 'api/servers#leave'
  root "static_pages#root"
  mount ActionCable.server, at: '/cable'
end
