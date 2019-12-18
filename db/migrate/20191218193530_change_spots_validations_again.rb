class ChangeSpotsValidationsAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :spots, :description
  end
end
