json.extract! @like, :id, :user_id, :likeable_type, :likeable_id
json.extract! @like.user, :firstname, :lastname
if @like.likeable_type == "Comment"
    json.post @like.likeable.post 
end