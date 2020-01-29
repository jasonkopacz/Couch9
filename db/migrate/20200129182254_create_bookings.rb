class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :user_id, null: false
      t.string :destination, null: false
      t.date :arrival_date, null: false
      t.date :departure_date, null: false
      t.integer :number_of_travellers, null: false
      t.text :trip_description, null: false
      t.timestamps
    end
    add_index :bookings, :id
  end
end
