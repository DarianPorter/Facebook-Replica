class ChangeCollNames < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :first_name, :firstname
    rename_column :users, :date_of_birth, :birthday
  end
end
