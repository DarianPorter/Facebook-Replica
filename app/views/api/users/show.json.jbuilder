json.extract! @user, :id, :firstname, :lastname, :posts, :friends, :befriended
json.friends do 
    @user.friends.each do |friend|
        json.set! friend.id do 
            json.extract! friend, :accepted, :friend_id, :user_id
        end 
    end
end 