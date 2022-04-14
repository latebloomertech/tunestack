class RuleSetSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :group_by, :order_tracks_by, :danceability, :tempo, :energy, :instrumentalness, :popularity, :date_saved
end
