json.extract! @comment, :id, :likes, :body, :post_id, :user_id, :date
json.extract! @comment.user, :firstname, :lastname 