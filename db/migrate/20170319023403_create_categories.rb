class CreateCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :categories do |t|
      t.references :board, foreign_key: true
      t.string :title

      t.timestamps
    end
  end
end
