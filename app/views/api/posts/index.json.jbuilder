@posts.each do |post|
    json.set! post.id do
        json.extract! post, :body, :user_id, :date, :receiver_id, :id, :like_count
        json.extract! post.user, :firstname, :lastname
        json.set! :comments do 
            post.comments.each do |comment|
                json.set! comment.id do 
                    json.extract! comment, :id, :like_count, :likes, :body, :post_id, :user_id, :date
                    json.extract! comment.user, :id, :firstname, :lastname 
                end 
            end 
        end
    end
end