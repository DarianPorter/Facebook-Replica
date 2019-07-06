Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :index] do 
      resources :posts, only: [:index]
    end
    resources :posts, only: [:create, :destroy, :update, :index] do 
      resources :likes, only: [:create, :destroy, :index]
    end
    resources :comments, only: [:create, :destroy] do
      resources :likes, only: [:create, :destroy, :index]
    end 
  end
end
