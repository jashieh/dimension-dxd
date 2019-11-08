class Addindexmessages < ActiveRecord::Migration[5.2]
  def change
    add_index :messages, :author_id
  end
end
