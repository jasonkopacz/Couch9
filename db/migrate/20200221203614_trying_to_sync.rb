class TryingToSync < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :description, :string
  end
end
