# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :username, length: { maximum: 10 }
    validates :password, length: { minimum: 6 }, allow_nil: true
    
    attr_reader :password

    has_many :server_memberships,
    foreign_key: :user_id,
    class_name: :ServerMembership
    
    has_many :owned_servers,
    foreign_key: :admin_id,
    class_name: :Server

    has_many :servers,
    through: :server_memberships,
    source: :server

    
    after_initialize :ensure_session_token
    
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil 
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.update(session_token: SecureRandom.urlsafe_base64)
        self.session_token
    end

    private 
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
    
end
