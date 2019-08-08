@posts.each do |post|
    json.set! post.id do
        json.extract! post, :body, :user_id, :date, :receiver_id, :id
        json.extract! post.user, :firstname, :lastname
        json.like_count post.likes.length

        json.set! :comments do 
            post.comments.each do |comment|
                json.set! comment.id do 
                    json.extract! comment, :id, :body, :post_id, :user_id, :date#, :likes
                    json.like_count comment.likes.length
                    json.extract! comment.user , :firstname, :lastname 
                    json.set! :likes do
                        comment.likes.each do |like|
                            json.set! like.id do 
                                json.extract! like.user, :firstname, :lastname, :id
                            end
                        end
                    end
                end 
            end 
        end

        json.set! :likes do 
            post.likes.each do |like|
                json.set! like.id do 
                    json.extract! like, :id, :user_id, :likeable_type, :likeable_id
                    json.extract! like.user, :firstname, :lastname
                end
            end
        end 
    end
end