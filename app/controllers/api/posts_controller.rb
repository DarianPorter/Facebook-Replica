class Api::PostsController < ApplicationController
    def index        
        if params[:user_id]
            @posts = User.find(params[:receiver_id]).posts.includes(:user, likes: [:user], comments: [:likes, :user])
            render "api/posts/index.json.jbuilder" 

        else
            @posts = Post.all.includes(:user, likes: [:user], comments: [{likes: :user}, :user] )
            render "api/posts/index.json.jbuilder" 
        end
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render "api/posts/show"
        else
            render json: @post.errors.full_messages, status: 401
        end
    end

    def update
        @post = Post.find(params[:id])
        if @post.update
            render 'api/post/show'
        else 
            render json: @post.errors.full_messages, status: 401
        end

    end

    def destroy 
        @post = Post.find(params[:id])
        @post.likes.destroy
        @post.comments.destroy
        @post.destroy
        render "api/posts/show"
    end

    def post_params
        params.require(:post).permit(:body, :user_id, :receiver_id)
    end
end