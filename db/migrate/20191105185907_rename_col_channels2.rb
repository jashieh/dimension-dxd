class RenameColChannels2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :server_name
    add_column :channels, :channel_name, :string 
  end
end
