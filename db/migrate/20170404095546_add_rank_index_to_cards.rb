class AddRankIndexToCards < ActiveRecord::Migration[5.1]
  def change
    add_index :cards, [:board_id, :category_id, :rank]
  end
end
