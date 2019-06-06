@posts.each do |post|
    json.set! post.id do
        json.extract! post, :body, :user_id, :created_at, :id
        json.extract! post.user, :firstname, :lastname
    end
end