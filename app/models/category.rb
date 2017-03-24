class Category < ApplicationRecord
  include KeyColumnGeneratable

  belongs_to :board
  has_many :cards
end
