class ReplaceFriendsCols < ActiveRecord::Migration[5.2]
  def change
    remove_column :friends, :requester
    remove_column :friends, :receiver
    add_column :friends, :requester_id, :integer
    add_column :friends, :receiver_id, :integer
    add_index :friends, [:receiver_id, :receiver_id], unique: true 
  end
end
