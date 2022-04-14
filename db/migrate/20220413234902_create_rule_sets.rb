class CreateRuleSets < ActiveRecord::Migration[6.1]
  def change
    create_table :rule_sets do |t|
      t.integer :user_id
      t.string :group_by
      t.string :order_tracks_by
      t.string :danceability
      t.string :tempo
      t.string :energy
      t.string :instrumentalness
      t.string :popularity
      t.datetime :date_saved

      t.timestamps
    end
  end
end
