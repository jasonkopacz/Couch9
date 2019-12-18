class ChangeSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :available_nights, :string
    add_column :spots, :request_preferences, :boolean
    add_column :spots, :description_of_sleeping_arrangements, :text
    add_column :spots, :roommate_situation, :text
    add_column :spots, :public_transportation, :text
    add_column :spots, :what_i_can_share_with_guests, :text
    add_column :spots, :additional_information, :text
  end
end
