class User < ApplicationRecord
    has_many :favorites, dependent: :destroy
    has_many :episodes, through: :favorites
end
