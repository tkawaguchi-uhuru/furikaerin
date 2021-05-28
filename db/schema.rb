# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2017_04_04_100550) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boards", force: :cascade do |t|
    t.string "key", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["key"], name: "index_boards_on_key", unique: true
  end

  create_table "cards", force: :cascade do |t|
    t.bigint "board_id"
    t.bigint "category_id"
    t.string "key", null: false
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "rank"
    t.index ["board_id", "category_id", "rank"], name: "index_cards_on_board_id_and_category_id_and_rank"
    t.index ["board_id"], name: "index_cards_on_board_id"
    t.index ["category_id"], name: "index_cards_on_category_id"
    t.index ["key"], name: "index_cards_on_key", unique: true
  end

  create_table "categories", force: :cascade do |t|
    t.bigint "board_id"
    t.string "key", null: false
    t.string "title", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id", "title"], name: "index_categories_on_board_id_and_title", unique: true
    t.index ["board_id"], name: "index_categories_on_board_id"
    t.index ["key"], name: "index_categories_on_key", unique: true
  end

  add_foreign_key "cards", "boards"
  add_foreign_key "cards", "categories"
  add_foreign_key "categories", "boards"
end
