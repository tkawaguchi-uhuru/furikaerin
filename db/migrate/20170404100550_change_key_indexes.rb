class ChangeKeyIndexes < ActiveRecord::Migration[5.1]
  def change
    remove_index :boards, :key
    add_index :boards, :key, unique: true
    remove_index :categories, :key
    add_index :categories, :key, unique: true
    remove_index :cards, :key
    add_index :cards, :key, unique: true
  end
end
