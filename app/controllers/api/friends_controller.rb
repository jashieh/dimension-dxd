class Api::FriendsController < ApplicationController
    def index
        @friends = Friend.friends(current_user.id)
    end

    def pending 
        @friends = Friend.pending_invites(current_user.id)
        render :index
    end

    def create
        @friendship = Friend.new(friend_params)

        if @friendship.save 
            render :show 
        else
            render json: @friendship.errors.full_message, status: 422
        end
    end

    def update 
    end


    private
    def friend_params 
        params.require(:friend).permit(:requester_id, :receiver_id, :pending)
    end
end
