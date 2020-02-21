class RemoveNullConstraintFromReviewsAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :host_id
    add_column :reviews, :host_id, :integer
  end
end
