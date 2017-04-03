require 'application_system_test_case'

class DashboardsTest < ApplicationSystemTestCase
  test 'create new board' do
    visit root_url

    within 'body' do
      assert has_content? 'Create new KPT board'
      click_link 'Create new KPT board'

      board = Board.last
      assert_equal board_path(board), page.current_path
    end
  end
end
