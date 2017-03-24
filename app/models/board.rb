class Board < ApplicationRecord
  include KeyColumnGeneratable

  has_many :categories
  has_many :cards
end
