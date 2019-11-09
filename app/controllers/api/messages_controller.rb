class Api::MessagesController < ApplicationController
    def index 
        @messages = Channel.find_by(id: params[:channel_id]).messages
    end
end
