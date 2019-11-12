class Friend < ApplicationRecord
    validates_uniqueness_of :requester_id, scope: :receiver_id

    def self.friends(user_id)
        Friend.where("requester_id = #{user_id} OR receiver_id = #{user_id} AND pending = false")
    end

    def self.pending_invites(user_id)
        Friend.where("receiver_id = #{user_id} AND pending = true")
    end
end
