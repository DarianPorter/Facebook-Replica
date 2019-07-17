@users.each do |user|
    json.set! user.id do 
        json.extract! user, :firstname, :lastname, :posts
        # json.posts user.posts
    end
end
