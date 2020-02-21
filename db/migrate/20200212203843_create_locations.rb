class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.text :name, null: false
      t.integer :lat
      t.integer :long
    end
  end
end
