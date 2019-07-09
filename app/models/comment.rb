class Comment < ApplicationRecord
    validates :body, :user_id, :post_id, presence: true

    belongs_to :user

    belongs_to :post

    has_many :likes, foreign_key: :likeable_id, class_name: :Like

    def date
        return self.created_at.strftime("%B %d, %Y")
    end
end