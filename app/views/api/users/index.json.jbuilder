debugger
@users.each do |user|
    friendships = []
    pendingfriendships = []
    user.friends.each do |friendship|
        if friendship[:accepted] == true 
            friendships.push(friendship)
        else
            pendingfriendships.push(friendship)
        end
    end 
    user.befriended.each do |befriend|
        if befriend[:accepted] == true 
            friendships.push(befriend)
        else
            pendingfriendships.push(befriend)
        end
    end 
    json.set! user.id do 
        json.extract! user, :id, :firstname, :lastname
        json.set! :friendships do 
            friendships.each do |friend|
                json.set! friend.id do 
                    json.extract! friend, :accepted, :friend_id
                    json.friendrequester_id friend.user_id
                end 
            end
        end 
        json.set! :pendingfriendships do 
            pendingfriendships.each do |friend|
                json.set! friend.id do 
                    
                    json.extract! friend, :accepted, :friend_id
                    json.friendrequester_id friend.user_id
                end 
            end
        end 
    end
end
