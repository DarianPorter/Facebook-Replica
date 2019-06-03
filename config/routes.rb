Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :posts, only: [:create, :destroy, :update, :index]
  end
end
