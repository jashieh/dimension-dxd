class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.integer :requester, null: false
      t.integer :receiver, null: false 
      t.boolean :pending, default: true 
      t.timestamps
    end

    add_index :friends, [:requester, :receiver], unique: true 
  end
end
