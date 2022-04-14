class User < ApplicationRecord
    has_many :rule_sets
    has_many :ts_generated_playlists
end
