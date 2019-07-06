class Api::PostsController < ApplicationController
    def index
        # currentuser.friends.posts
        # sql = "SELECT * FROM posts JOIN users ON users.id = posts.user_id ORDER BY posts.created_at DESC "
        # @posts = ActiveRecord::Base.connection.execute(sql).values
        
        if params[:user_id]
            @posts = User.find(params[:receiver_id]).posts
            render "api/posts/index.json.jbuilder" 

        else
            @posts = Post.all.includes(:user)
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
        # display model with the posts info in a form with 
        @post = Post.find(params[:id])
        if @post.update
            render 'api/post/show'
        else 
            render json: @post.errors.full_messages, status: 401
        end

    end

    def destroy 
        @post = Post.find(params[:id])
        @post.destroy
        render "api/posts/show"
    end

    def post_params
        params.require(:post).permit(:body, :user_id, :receiver_id)
    end
end