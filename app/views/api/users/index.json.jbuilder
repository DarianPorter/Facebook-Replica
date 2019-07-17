@users.each do |user|
    json.set! user.id do 
        json.extract! user, :id, :firstname, :lastname, :posts
        # json.posts user.posts
    end
end
