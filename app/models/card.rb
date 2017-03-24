class Card < ApplicationRecord
  include KeyColumnGeneratable
  include RankedModel
  ranks :rank, with_same: :category_id

  belongs_to :board
  belongs_to :category
end
