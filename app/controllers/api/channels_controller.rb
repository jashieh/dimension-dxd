class Api::ChannelsController < ApplicationController
    before_action :require_logged_in

    def index 
        @channels = Server.find_by(id: params[:server_id]).channels 
    end
    
    def create 
        @channel = Channel.new(channel_params)
        if(current_user.servers.find_by(id: params[:server_id]))
            @channel.server_id = params[:server_id]
        end

        if @channel.save 
            render :show 
        else
            render json: @channel.errors, status: 422
        end
    end
    
    def show 
        if(current_user.servers.find_by(id: params[:server_id]))
            @channel = Channel.find(params[:id])
            render :show
        else
            render json: ["Can't access channels you're not part of"], status: 400
        end

    end

    private 
    def channel_params 
        params.require(:channel).permit(:channel_name)
    end
end

