@posts.each do |post|
    json.set! post.id do
        json.extract! post, :body, :user_id, :date, :receiver_id, :id
        json.extract! post.user, :firstname, :lastname
    end
end