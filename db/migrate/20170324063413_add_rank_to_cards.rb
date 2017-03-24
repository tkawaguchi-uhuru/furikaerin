class AddRankToCards < ActiveRecord::Migration[5.1]
  def change
    add_column :cards, :rank, :integer
  end
end
