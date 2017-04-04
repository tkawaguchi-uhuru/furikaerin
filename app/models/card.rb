class Card < ApplicationRecord
  include KeyColumnGeneratable
  include RankedModel
  ranks :rank, with_same: [:board_id, :category_id]

  belongs_to :board
  belongs_to :category

  before_validation :reset_category_id_on_board
  after_commit :send_notification_to_channel

  private

  def reset_category_id_on_board
    if self.category_id_changed?
      self.category_id = board.categories.find(self.category_id)&.id
    end
  end

  def send_notification_to_channel
    BoardChannel.broadcast_to(
      self.board,
      {}
    )
  end
end
