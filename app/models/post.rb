class Post < ApplicationRecord
    validates :user_id, :body, presence: true

    belongs_to :user    
    
    has_many :comments 

    has_many :likes, foreign_key: :likeable_id, class_name: :Like

    def date 
        return self.created_at.strftime("%B %d, %Y")
    end

    def like_count
        return self.likes.count
    end
end