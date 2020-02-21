class RemoveDeadColumnsFromSpots < ActiveRecord::Migration[5.2]
  def change
    remove_column :spots, :more_details
    remove_column :spots, :available_nights
    remove_column :spots, :request_preferences
  end
end
