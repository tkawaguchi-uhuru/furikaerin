class Card < ApplicationRecord
  include KeyColumnGeneratable

  belongs_to :board
  belongs_to :category
end
