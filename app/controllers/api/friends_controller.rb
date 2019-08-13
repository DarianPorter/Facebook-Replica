class Api::FriendsController < ApplicationController

    def create
        @friend = Friend.new(friend_params)
        @friend.accepted = false
        if @friend.save 
            render "api/friends/show"
        else 
            render json: @like.errors.full_messages, status: 401
        end 
    end 

    def edit 
        @friend = Friend.find(params[:id])
        @friend.accepted = true
        @friend.save
        debugger
        # check
        render 'api/friends/show'
    end 

    def index
        user = User.find(params[:user_id])
        @friends = user.friends
        render "api/friends/index"  
    end

    def friend_params
        params.require(:friend).permit(:friend_id, :user_id)
    end 
end