class EpisodesController < ApplicationController
    def index
        episodes = Episode.all
        render json: episodes
    end

    def show
        episode = Episode.find(params[:id])
        render json: episode
    end

    def create
        episode = Episode.create(name:params[:name])
        render json: {message: "Added new episode: #{episode.name}"}
    end

    def update
    end

    def destroy
        episode = Episode.find(params[:id])
        episode.destroy
        render json: {message: "Removed episode"}
    end
end
