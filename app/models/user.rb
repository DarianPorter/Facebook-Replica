class User < ApplicationRecord
    validates :email, :session_token, :password_digest, :gender, :firstname, :lastname, :birthday, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}

    after_initialize :ensure_token

    has_many :posts
    has_many :friends, foreign_key: :friend_id, class_name: :Friend
    has_many :befriended, foreign_key: :user_id, class_name: :Friend 

    attr_reader :password

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        return self.session_token
    end

    def ensure_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def self.find_by_credentials(email,password)
        user = User.find_by(email: email)
        return nil if user.nil?
        return user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        return BCrypt::Password.new(self.password_digest).is_password?(password)
    end
end