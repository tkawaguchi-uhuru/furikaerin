class CreateBoards < ActiveRecord::Migration[5.1]
  def change
    create_table :boards do |t|
      t.string :key, null: false, index: true

      t.timestamps
    end
  end
end
