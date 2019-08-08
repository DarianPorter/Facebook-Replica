@users.each do |user|
    json.set! user.id do 
        json.extract! user, :id, :firstname, :lastname, :posts, :friends, :befriended
        # json.posts user.post
        json.set! :fs do 
            user.friends.each do |friend|
                json.set! friend.id do 
                    json.extract! friend, :accepted, :friend_id, :user_id
                end 
            end
        end 
    end
end
