json.extract! @like, :user, :user_id, :likeable_type, :likeable_id
json.extract! @like.user, :firstname, :lastname
