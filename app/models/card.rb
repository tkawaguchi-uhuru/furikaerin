class Card < ApplicationRecord
  include KeyColumnGeneratable
  include RankedModel
  ranks :rank, with_same: :category_id

  belongs_to :board
  belongs_to :category

  before_validation :reset_category_id_on_board

  private

  def reset_category_id_on_board
    self.category_id = board.categories.find(self.category_id)&.id
  end
end
