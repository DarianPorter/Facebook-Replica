friendships = []
pendingfriendships = []
@user.friends.each do |friend| 
    if friend[:accepted] == true 
        friendships.push(friend)
    else
        pendingfriendships.push(friend)
    end 
end 
@user.befriended.each do |friend|
    if friend[:accepted] == true 
        friendships.push(friend)
    else
        pendingfriendships.push(friend)
    end 
end 
json.extract! @user, :id, :firstname, :lastname
json.set! :friendships do 
    friendships.each do |friend|
        json.set friend.id do 
            json.extract! friend, :friend_id, :accepted
            json.friendrequester_id :user_id
        end 
    end 
end 
json.set! :pendingfriendships do 
    pendingfriendships.each do |friend|
        json.set! friend.id do 
            json.extract! friend, :friend_id, :accepted
            json.friendrequester_id :user_id
        end 
    end 
end 