@posts.each do |post|
    json.set! post.id do
        json.extract! post, :body, :user_id, :date, :receiver_id, :id
        json.extract! post.user, :firstname, :lastname
        json.set! :comments do 
            post.comments.each do |comment|
                json.set! comment.id do 
                    json.extract! comment, :id, :like_count, :likes, :body, :post_id, :user_id
                end 
            end 
        end
    end
end