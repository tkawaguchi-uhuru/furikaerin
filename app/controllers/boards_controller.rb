class BoardsController < ApplicationController
  def show
    @board = Board.includes(categories: :cards).find_by!(key: params[:key])
  end
end
