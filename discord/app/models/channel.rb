class Channel < ApplicationRecord
    validates :channel_name, length: { maximum: 20 }, presence: true 

    belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server 

end
