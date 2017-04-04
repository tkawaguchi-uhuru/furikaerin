class Card < ApplicationRecord
  include KeyColumnGeneratable
  include RankedModel
  ranks :rank, with_same: :category_id

  belongs_to :board
  belongs_to :category

  before_validation :reset_category_id_on_board
  after_commit :send_notification_to_channel

  private

  def reset_category_id_on_board
    self.category_id = board.categories.find(self.category_id)&.id
  end

  def send_notification_to_channel
    BoardChannel.broadcast_to(
      self.board,
      {}
    )
  end
end
