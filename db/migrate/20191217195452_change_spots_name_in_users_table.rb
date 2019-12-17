class ChangeSpotsNameInUsersTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :location_id
    add_column :users, :spot_id, :integer
    remove_index :users, [:fname, :lname]
  end
end
