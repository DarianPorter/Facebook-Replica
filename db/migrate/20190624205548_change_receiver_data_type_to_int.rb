class ChangeReceiverDataTypeToInt < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :receiver_id, :integer, using: 'receiver_id::integer'
  end
end
