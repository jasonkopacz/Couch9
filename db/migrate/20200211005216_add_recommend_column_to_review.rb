class AddRecommendColumnToReview < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :recommended, :boolean
  end
end
