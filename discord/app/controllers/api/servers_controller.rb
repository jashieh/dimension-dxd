class Api::ServersController < ApplicationController
    before_action :require_logged_in

    def index 
        @servers = current_user.servers
    end

    def create 
        @server = Server.new(server_params)
        @server.admin_id = current_user.id

        if @server.save 
            ServerMembership.create({ user_id: current_user.id, server_id: @server.id})
            render "api/servers/show"
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def show 
        @server = current_user.servers.find(params[:id])
    end


    private 
    def server_params
        params.require(:server).permit(:server_name)
    end
end
