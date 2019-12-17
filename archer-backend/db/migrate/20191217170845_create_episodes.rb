class CreateEpisodes < ActiveRecord::Migration[6.0]
  def change
    create_table :episodes do |t|
      t.integer :season
      t.integer :overall_episode
      t.integer :season_episode
      t.string :title
      t.string :writer
      t.date :air_date

      t.timestamps
    end
  end
end
