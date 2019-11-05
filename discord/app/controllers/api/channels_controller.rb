class Api::ChannelsController < ApplicationController
    before_action :require_logged_in

    def index 
        @channels = Server.find_by(server_id: params[:server_id]).channels 
    end
    
    def create 
        @channel = Channel.new(channel_params)
        @channel.server_id = params[:server_id]

        if @channel.save 
            render :show 
        else
            render json: @channel.errors
        end
    end
    
    def show 
        @channel = Channel.find(params[:id])
    end

    private 
    def channel_params 
        params.require(:channel).permit(:channel_name)
    end
end

