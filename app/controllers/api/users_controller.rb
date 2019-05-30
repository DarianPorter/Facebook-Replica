class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(userParams)
        if @user.save!
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_massages, status: 422
        end
    end

    def userParams
        params.require(:user).permit(:first_name, :lastname, 
            :password, :gender, :date_of_birth, :email)
    end
end