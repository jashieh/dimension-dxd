class RenameColChannels < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :name 
    add_column :channels, :server_name, :string 
  end
end
