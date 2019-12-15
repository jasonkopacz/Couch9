class ChangeLocations < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :location_id
  end
end
