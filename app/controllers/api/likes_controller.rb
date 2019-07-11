class Api::LikesController < ApplicationController
    def create 
        @like = Like.new(like_params)
        
        if @like.save
            render "api/likes/show"
        else
            render json: @like.errors.full_messages, status: 401
        end
    end

    def destroy
        #implement later
    end

    def like_params 
        params.require(:like).permit(:user_id, :likeable_type, :likeable_id)
    end
end