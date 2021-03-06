class Api::UsersController < ApplicationController
    def index 
        @users = Server.find_by(id: params[:server_id]).users
        chat_bot = User.find_by_credentials("ChatBot","chat_bot")
        @users.merge([chat_bot])
    end

    def create
        @user = User.new(user_params)
        
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    
    private 

    def user_params
        params.require(:user).permit(:username, :password, :email)
    end
end
