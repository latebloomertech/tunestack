class RuleSet < ApplicationRecord
    has_one :user
    has_many :ts_generated_playlists
end
