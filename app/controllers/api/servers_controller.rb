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

    def join
        @server = Server.find_by_url(params[:invite_url])
        if @server 
            ServerMembership.create({ user_id: current_user.id, server_id: @server.id})
            render "api/servers/show"
        else
            render json: ["Server not found"], status: 404
        end
    end

    def leave 
        @server = current_user.servers.find(params[:id])

        if @server 
            server_membership = ServerMembership.find_by_membership(@server.id, current_user)
            server_membership.destroy;
            render "api/servers/show"
        else
            render json: ["Server does not exist"], status: 404
        end
    end


    private 
    def server_params
        params.require(:server).permit(:server_name, :invite_url)
    end
end
