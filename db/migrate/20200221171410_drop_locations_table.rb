class DropLocationsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :location_tables
  end
end
