Rails.application.routes.draw do
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  get '/hello', to: 'application#hello_world'

  get '*path',
      to: "fallback#index",
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
