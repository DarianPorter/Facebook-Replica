class Like < ApplicationRecord
    validates :user_id, :likeable_type, presence: true
    belongs_to :likeable, polymorphic: true
    belongs_to :user
end