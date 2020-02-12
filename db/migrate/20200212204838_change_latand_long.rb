class ChangeLatandLong < ActiveRecord::Migration[5.2]
  def change
    remove_column :locations, :lat
    remove_column :locations, :long
    add_column :locations, :lat, :string
    add_column :locations, :long, :string
  end
end
