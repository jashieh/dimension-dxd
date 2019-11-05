# == Schema Information
#
# Table name: servers
#
#  id          :integer          not null, primary key
#  admin_id    :integer          not null
#  server_name :string           not null
#  icon_url    :string
#  invite_url  :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Server < ApplicationRecord
    validates :admin_id, :server_name, :invite_url, presence: true 
    validates :server_name, length: { maximum: 20}
    after_initialize :ensure_invite_url

    belongs_to :server_admin,
    foreign_key: :admin_id,
    class_name: :User

    has_many :server_members,
    foreign_key: :server_id,
    class_name: :ServerMembership,
    dependent: :destroy 

    has_many :channels,
    foreign_key: :server_id,
    class_name: :Server,
    dependent: :destroy

    has_many :users,
    through: :server_members,
    source: :user 

    def self.find_by_url(url)
        Server.find_by(invite_url: url)
    end

    private 
    def ensure_invite_url
        self.invite_url ||=  "discord.com/" + SecureRandom.urlsafe_base64(10)
    end

end
