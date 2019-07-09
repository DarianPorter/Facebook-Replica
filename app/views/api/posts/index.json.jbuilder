@posts.each do |post|
    json.set! post.id do
        json.extract! post, :body, :user_id, :date, :receiver_id, :id
        json.like_count post.likes.length
        
        json.extract! post.user, :firstname, :lastname
        json.set! :comments do 
            post.comments.each do |comment|
                json.set! comment.id do 
                    json.extract! comment, :id, :likes, :body, :post_id, :user_id, :date
                    json.like_count comment.likes.length
                    json.extract! comment.user , :firstname, :lastname 
                end 
            end 
        end
        json.set! :likes do 
            post.likes.each do |like|
                json.set! like.id do 
                    json.extract! like.user, :id, :firstname, :lastname
                end
            end
        end 
    end
end