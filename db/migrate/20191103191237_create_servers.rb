class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.integer :admin_id, null: false
      t.string :server_name, null: false 
      t.string :icon_url
      t.string :invite_url, null: false 
      t.timestamps
    end

    add_index :servers, :admin_id
  end
end
