class FixingUserId < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :user_id
  end
end
