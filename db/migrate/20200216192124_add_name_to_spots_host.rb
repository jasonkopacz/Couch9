class AddNameToSpotsHost < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :host_name, :string
  end
end
