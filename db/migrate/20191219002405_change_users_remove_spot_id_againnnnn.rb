class ChangeUsersRemoveSpotIdAgainnnnn < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :spot_id
  end
end
