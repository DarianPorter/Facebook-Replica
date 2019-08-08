class DeleteFriended < ActiveRecord::Migration[5.2]
  def change
    drop_table :friendeds
  end
end
