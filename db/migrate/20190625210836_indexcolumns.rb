class Indexcolumns < ActiveRecord::Migration[5.2]
  def change
    change_column_null :likes, :user_id, true
    add_index :likes, :user_id
    add_index :likes, :likeable_id
  end
end
