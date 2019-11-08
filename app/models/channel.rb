class Channel < ApplicationRecord
    validates :channel_name, length: { maximum: 20 }, presence: true 

    belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server 

    has_many :messages,
    foreign_key: :channel_id,
    class_name: :Message
end
