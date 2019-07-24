json.extract! @comment, :id, :likes, :body, :post_id, :user_id, :date
json.extract! @comment.user, :firstname, :lastname 
json.like_count, @comment.likes.length  
json.set :likes do
    @comment.likes.each do |like|
        json.set! like.id do 
            json.extract! like.user.firstname, like.user.lastname, :created_at
        end
    end
end
