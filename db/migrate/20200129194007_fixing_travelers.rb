class FixingTravelers < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :number_of_travellers
    add_column :bookings, :number_of_travelers, :integer, null: false
  end
end
