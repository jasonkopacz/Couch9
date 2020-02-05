class ChangeSpotsLocationName < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :location_name, :string
  end
end
