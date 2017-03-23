class Board < ApplicationRecord
  include KeyColumnGeneratable

  has_many :categories
end
