class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.string :likeable_type
      t.integer :user_id
      t.integer :likeable_id
      t.timestamps
    end
  end
end
