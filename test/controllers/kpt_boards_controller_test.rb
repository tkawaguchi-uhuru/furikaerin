require 'test_helper'

class KPTBoardsControllerTest < ActionDispatch::IntegrationTest

  test 'create KPT board' do
    post kpt_boards_url

    @board = Board.last

    assert_equal 3, @board.categories.count
    assert_equal KPTBoardsController::CATEGORIES, @board.categories.order(id: :asc).pluck(:title)
  end
end
