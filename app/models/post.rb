class Post < ApplicationRecord
    validates :user_id, :body, presence: true

    belongs_to :user    
    has_many :likes, as: :likeable

    def date 
        return self.created_at.strftime("%B %d, %Y")
    end
end