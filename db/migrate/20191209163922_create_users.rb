class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :username, unique: true
      t.string :email, null: false, unique: true
      t.integer :age
      t.string :gender
      t.string :occupation
      t.string :education
      t.text :about_me
      t.integer :location_id
      t.references :imageable, polymorphic: true
      t.references :reviewable, polymorphic: true
      t.references :friendable, polymorphic: true
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
      
      
    end
    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :location_id, unique: true
    add_index :users, [:fname, :lname], unique: true
  end
end
