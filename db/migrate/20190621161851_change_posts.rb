class ChangePosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :receiver_id, :string
  end
end
