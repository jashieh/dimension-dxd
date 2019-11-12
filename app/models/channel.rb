# == Schema Information
#
# Table name: channels
#
#  id           :integer          not null, primary key
#  server_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  channel_name :string
#

class Channel < ApplicationRecord
    validates :channel_name, length: { maximum: 12 }, presence: true 

    belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server 

    has_many :messages,
    foreign_key: :channel_id,
    class_name: :Message,
    dependent: :destroy
end
