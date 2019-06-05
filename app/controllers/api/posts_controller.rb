class Api::PostsController < ApplicationController
    def index
        # currentuser.friends.posts
        @posts = Post.all
        render "api/posts/index.json.jbuilder" 
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
        # display model with the posts info in a form with 
        @post = Post.find(params[:id])
        if @post.update
            render 'api/post/show'
        else 
            render json: @post.errors.full_messages, status: 401
        end

    end

    def destroy 
        # watch///////
        @post = params[:id]
        @post.destroy
    end

    def post_params
        params.require(:post).permit(:body, :user_id)
    end
end