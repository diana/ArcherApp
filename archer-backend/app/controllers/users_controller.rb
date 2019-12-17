class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def create
        user = User.create(name:params[:name])
        render json: {message: "Added new user: #{user.name}"}
    end

    def update
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: {message: "Removed user"}
    end
end
