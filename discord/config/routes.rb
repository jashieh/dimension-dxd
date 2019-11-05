Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :servers, only: [:create, :index, :show, :join]
    resource :session, only: [:create, :destroy]
  end

  get 'api/servers/server/:invite_url', to: 'api/servers#join'
  root "static_pages#root"
end
