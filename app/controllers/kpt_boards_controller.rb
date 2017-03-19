class KPTBoardsController < ApplicationController
  CATEGORIES = %w(keep problem try)

  def create
    categories = CATEGORIES.map{ |category| Category.new(title: category) }
    @board = Board.create(categories: categories)
  end
end
