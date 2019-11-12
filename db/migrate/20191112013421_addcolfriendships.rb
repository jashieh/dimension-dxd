class Addcolfriendships < ActiveRecord::Migration[5.2]
  def change
    add_column :friendships, :pending, :boolean, default: true 
  end
end
