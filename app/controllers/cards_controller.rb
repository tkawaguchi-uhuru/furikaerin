class CardsController < ApplicationController
  before_action :set_card, only: %i(update destroy)
  before_action :set_board, only: %i(create)
  before_action :set_category, only: %i(create)

  def create
    @category.cards << @board.cards.build
    head :ok
  end

  def update
    @card.update(card_params)
    head :ok
  end

  def destroy
    @card.destroy
    head :ok
  end

  private

  def set_card
    @card = Card.find_by!(key: params[:key])
  end

  def set_board
    @board = Board.find_by!(key: params[:board_key])
  end

  def set_category
    @category = @board.categories.find_by!(key: params[:category_key])
  end

  def card_params
    params.require(:card).permit(:content, :rank_position, :category_id)
  end
end
