class Api::Friends < ApplicationController

    def create
        @friend = Friend.new(friend_params)
        @friend.accepted = false
        if @friend.save 
            render "api/friends/show"
        else 
            render json: @like.errors.full_messages, status: 401
        end 
    end 

    def index
        user = User.find(params[:user_id])
        @friends = user.friends
        render "api/friends/index"  
        # custom query find all requests with accepted 
    end 

    def destroy
        #destroy friend where user_id == current user id and the friend id is the one in the params
    end

    def friend_params
        params.require(:friend).permit(:friend_id, :user_id)
    end 
end