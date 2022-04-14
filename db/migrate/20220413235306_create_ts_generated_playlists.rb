class CreateTsGeneratedPlaylists < ActiveRecord::Migration[6.1]
  def change
    create_table :ts_generated_playlists do |t|
      t.integer :rule_set_id
      t.string :status
      t.string :spotify_playlist_id

      t.timestamps
    end
  end
end
