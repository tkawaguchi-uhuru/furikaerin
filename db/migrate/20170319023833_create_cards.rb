class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.references :board, foreign_key: true
      t.references :category, foreign_key: true
      t.text :content

      t.timestamps
    end
  end
end
