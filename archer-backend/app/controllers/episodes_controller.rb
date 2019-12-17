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
        episode = Episode.create(
            season:params[:season],
            overall_episode:params[:overall_episode],
            overall_episode:params[:overall_episode],
            title:params[:title],
            writer:params[:writer],
            air_date:params[:air_date]
        )
        render json: {message: "Added new episode: #{episode.title}"}
    end

    def update
        episode = Episode.find(params[:id])
        episode.update(
            season:params[:season],
            overall_episode:params[:overall_episode],
            overall_episode:params[:overall_episode],
            title:params[:title],
            writer:params[:writer],
            air_date:params[:air_date]
        )
        render json: {message: "Updated episode: #{episode.title}"}
    end

    def destroy
        episode = Episode.find(params[:id])
        episode.destroy
        render json: {message: "Removed episode"}
    end
end
