class ChangingSpotsToIncudeDaysOfWeekAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :spots, [:sun, :mon, :tue, :wed, :thu, :fri, :sat]
    add_column :spots, :sun, :boolean
    add_column :spots, :mon, :boolean
    add_column :spots, :tue, :boolean
    add_column :spots, :wed, :boolean
    add_column :spots, :thu, :boolean
    add_column :spots, :fri, :boolean
    add_column :spots, :sat, :boolean
  end
end
