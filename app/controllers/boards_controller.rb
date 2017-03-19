class BoardsController < ApplicationController
  def show
    @board = Board.find_by(key: params[:key])
  end
end
