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

ActiveRecord::Schema.define(version: 2020_02_08_002300) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.string "destination", null: false
    t.date "arrival_date", null: false
    t.date "departure_date", null: false
    t.text "trip_description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "number_of_travelers", null: false
    t.integer "user_id"
    t.index ["id"], name: "index_bookings_on_id"
  end

  create_table "spots", force: :cascade do |t|
    t.integer "host_id"
    t.integer "location_id"
    t.integer "max_guests"
    t.boolean "last_minute_requests", default: false
    t.string "preferred_gender"
    t.boolean "kid_friendly", default: false
    t.boolean "pet_friendly", default: false
    t.boolean "smoking_allowed", default: false
    t.boolean "has_pets", default: false
    t.boolean "has_children", default: false
    t.boolean "smoking_at_home", default: false
    t.boolean "wheelchair_accessible", default: false
    t.text "sleeping_arrangements"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description_of_sleeping_arrangements"
    t.text "roommate_situation"
    t.text "public_transportation"
    t.text "what_i_can_share_with_guests"
    t.text "additional_information"
    t.string "location_name"
    t.boolean "sun"
    t.boolean "mon"
    t.boolean "tue"
    t.boolean "wed"
    t.boolean "thu"
    t.boolean "fri"
    t.boolean "sat"
    t.index ["location_id"], name: "index_spots_on_location_id"
  end

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
    t.string "location"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["friendable_type", "friendable_id"], name: "index_users_on_friendable_type_and_friendable_id"
    t.index ["imageable_type", "imageable_id"], name: "index_users_on_imageable_type_and_imageable_id"
    t.index ["reviewable_type", "reviewable_id"], name: "index_users_on_reviewable_type_and_reviewable_id"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
