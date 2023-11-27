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

ActiveRecord::Schema[7.1].define(version: 2023_11_27_201905) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string "img"
    t.text "dialogue"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "options"
  end

  create_table "games", force: :cascade do |t|
    t.string "user"
    t.integer "day"
    t.integer "event"
    t.integer "energy"
    t.string "pet"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pets", force: :cascade do |t|
    t.string "species"
    t.string "name"
    t.integer "mood"
    t.integer "treat"
    t.integer "play"
    t.integer "talk"
    t.integer "to_pet"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "pet_happy"
    t.string "pet_sad"
    t.string "pet_neutral"
  end

end
