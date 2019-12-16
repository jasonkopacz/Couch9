class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.text :description, null: false
      t.integer :host_id
      t.integer :location_id
      t.integer :max_guests
      t.boolean :last_minute_requests, default: false
      t.string :preferred_gender
      t.boolean :kid_friendly, default: false
      t.boolean :pet_friendly, default: false
      t.boolean :smoking_allowed, default: false
      t.boolean :has_pets, default: false
      t.boolean :has_children, default: false
      t.boolean :smoking_at_home, default: false
      t.boolean :wheelchair_accessible, default: false
      t.text :sleeping_arrangements
      t.text :more_details

      t.timestamps


    end
    add_index :spots, :host_id, unique: true 
    add_index :spots, :location_id 
  end
end
