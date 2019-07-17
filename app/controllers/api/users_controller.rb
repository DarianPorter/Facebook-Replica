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

    def index
        @users = User.all.includes(:posts)
        render "api/users/index"
    end

    def show 
        @user = User.includes(:posts) .find(params[:id])
        render "api/users/show"
    end

    def userParams
        params.require(:user).permit(:firstname, :lastname, 
            :password, :gender, :birthday, :email
        )
    end
end