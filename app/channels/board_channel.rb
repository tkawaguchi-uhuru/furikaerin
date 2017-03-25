class BoardChannel < ApplicationCable::Channel
  def subscribed
    board = Board.find_by!(key: params[:key])
    stream_for board
  end

  def unsubscribed
  end
end
