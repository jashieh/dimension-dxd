class Message < ApplicationRecord
    validates :channel_id, :body, presence: true 

    belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel
end
