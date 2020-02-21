class AddSurferIdToReview < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :surfer_id, :integer
  end
end
