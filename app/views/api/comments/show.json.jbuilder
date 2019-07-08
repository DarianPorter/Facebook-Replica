json.extract! @comment, :id, :like_count, :likes, :body, :post_id, :user_id, :date
json.extract! @comment.user, :id, :firstname, :lastname 