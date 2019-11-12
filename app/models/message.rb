# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  channel_id :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer          not null
#

class Message < ApplicationRecord
    validates :channel_id, :body, presence: true 

    belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
