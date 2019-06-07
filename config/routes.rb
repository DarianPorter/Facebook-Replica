Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show] do 
      resources :posts, only: [:index]
    end
    resources :posts, only: [:create, :destroy, :update, :index]
  end
end
