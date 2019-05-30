Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:new,:create,:delete]
  end
end