@friends.each do | friend | do 
    json.set! friend.id do 
        json.extract! friend, :user_id, :friend_id, :accepted
    end 
end 