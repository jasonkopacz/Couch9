class ChangingSpotsToIncudeDaysOfWeek < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, [:sun, :mon, :tue, :wed, :thu, :fri, :sat], :boolean
  end
end
