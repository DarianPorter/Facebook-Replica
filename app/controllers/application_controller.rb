class ApplicationController < ActionController::Base
    def current_user
        @user || User.find_by(session_token: sesson[:session_token])
    end

    def ensure_login

    end

    def login(user)
        @user = user
        session[:session_token] = user.reset_token!
    end

    def logout  
        current_user.reset_token!
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end
end