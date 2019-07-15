class Api::CommentsController < ApplicationController
    def create 
        @comment = Comment.new(comment_params)
        if @comment.save
            render "api/comments/show"
        else
            render json: @comment.errors.full_messages, status: 422
        end 
    end

    def destroy 
        @comment = Comment.find(params[:id])
        @comment.likes.destroy
        @comment.destroy
        render "api/comments/show"
    end 

    def comment_params 
        params.require(:comment).permit(:body, :post_id, :user_id)
    end 
end