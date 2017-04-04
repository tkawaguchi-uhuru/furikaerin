require 'application_system_test_case'

class BoardsTest < ApplicationSystemTestCase
  setup do
    @board = FactoryGirl.create(:board, :as_kpt)
    @categories = {
      keep: @board.categories.order(:id).first,
      problem: @board.categories.order(:id).second,
      try: @board.categories.order(:id).third,
    }
  end

  test 'create new board' do
    visit board_path(@board)

    within 'body' do
      click_link('Add to keep')
      click_link('Add to problem')
      click_link('Add to try')

      @categories.each do |title, category|
        within ".category-container[data-key='#{category.key}']" do
          card = find('.js-new-card-form .js-new-card-content')
          card.native.send_keys("#{title} things!", :enter)
        end
      end

      # check persisted?
      visit board_path(@board)

      @categories.each do |title, _category|
        assert page.has_content?("#{title} things!")
      end
    end
  end
end
