@posts.each do |post|
    json.set! post.id do
        # json.partial! 'api/posts/post', post: post
        json.extract! post, :body, :user_id, :created_at
        json.extract! post.user, :firstname, :lastname, :id
            # json.partial! 'api/users/user', user: post.user
    end
end