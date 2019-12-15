# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_14_020613) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "users", force: :cascade do |t|
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "username"
    t.string "email", null: false
    t.integer "age"
    t.string "gender"
    t.string "occupation"
    t.string "education"
    t.text "about_me"
    t.integer "location_id"
    t.string "imageable_type"
    t.bigint "imageable_id"
    t.string "reviewable_type"
    t.bigint "reviewable_id"
    t.string "friendable_type"
    t.bigint "friendable_id"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["fname", "lname"], name: "index_users_on_fname_and_lname", unique: true
    t.index ["friendable_type", "friendable_id"], name: "index_users_on_friendable_type_and_friendable_id"
    t.index ["imageable_type", "imageable_id"], name: "index_users_on_imageable_type_and_imageable_id"
    t.index ["reviewable_type", "reviewable_id"], name: "index_users_on_reviewable_type_and_reviewable_id"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
