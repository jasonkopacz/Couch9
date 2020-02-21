class AddMoreIdsToBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :host_id, :integer
    add_column :bookings, :surfer_id, :integer
  end
end
