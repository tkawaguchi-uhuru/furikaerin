require 'test_helper'

class BoardTest < ActiveSupport::TestCase
  setup do
    @board = FactoryBot.create(:board)
  end

  test 'set key after create' do
    assert @board.key.present?
    assert @board.key.is_a? String
  end
end
