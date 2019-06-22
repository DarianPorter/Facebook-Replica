@users.each do |user|
    json.set! user.id do 
        json.extract! user, :firstname, :lastname
        json.posts user.posts
    end
end
