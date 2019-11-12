class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :user1_id, null: false
      t.integer :user2_id, null: false
      t.timestamps
    end

    add_index :friendships, :user1_id
    add_index :friendships, :user2_id
  end
end
