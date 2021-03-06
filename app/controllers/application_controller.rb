class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    # protect_from_forgery with: :exception
    protect_from_forgery unless: -> { request.format.json? }
    
    helper_method :current_user, :logged_in?
    
    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end
    
    def logged_in?
        !!current_user
    end
    
    def login(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def require_logged_in
        unless logged_in?
          render json: ['You must be logged in to perform this action'], status: 401
        end
    end
    
end
