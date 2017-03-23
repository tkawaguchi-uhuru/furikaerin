class Category < ApplicationRecord
  include KeyColumnGeneratable

  belongs_to :board
end
