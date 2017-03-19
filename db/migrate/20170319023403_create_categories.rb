class CreateCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :categories do |t|
      t.references :board, foreign_key: true
      t.string :key, null: false, index: true
      t.string :title, null: false

      t.timestamps
      t.index [:board_id, :title], unique: true
    end
  end
end
