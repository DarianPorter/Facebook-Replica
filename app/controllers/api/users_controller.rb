class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(userParams)
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show 
        
    end

    def userParams
        params.require(:user).permit(:firstname, :lastname, 
            :password, :gender, :birthday, :email)
    end
end