class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(sessionParams[:email],
                                        sessionParams[:password])
        if @user
            render "api/users/show"
            login(@user)
        else 
            render json: ["Invalid username/password combination"], status: 401
        end
    end

    def destroy
        logout();
    end

    def sessionParams
        params.require(:user).permit(:email,:password)
    end
end