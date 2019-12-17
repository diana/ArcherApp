class FavoritesController < ApplicationController
    def index
        favorites = Favorite.all
        render json: favorites
    end

    def show
        favorite = Favorite.find(params[:id])
        render json: favorite
    end

    def create
        favorite = Favorite.create(user:params[:user], episode:params[:episode])
        render json: {message: "Created new favorite: #{favorite.user} and #{favorite.episode}"}
    end

    def update
        favorite = Favorite.find(params[:id])
        favorite.update(user:params[:user], episode:params[:episode])
        render json: {message: "Updated favorite: #{favorite.user} and #{favorite.episode}"}
    end

    def destroy
        favorite = Favorite.find(params[:id])
        favorite.destroy
        render json: {message: "Removed favorite"}
    end
end
