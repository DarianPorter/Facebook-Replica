class Api::SessionsController < ApplicationController

    def create
        user = User.find_by_credentials(sessionParams[:email],
                                        sessionParams[:password])
        if user.nil?
            render json: user.errors.full_messages
        else 
            login(user)
        end
    end

    def sessionParams
        params.require(:user).permit(:email,:password)
    end
end