class CreateGames < ActiveRecord::Migration[7.1]
  def change
    create_table :games do |t|
      t.string :user
      t.integer :day
      t.integer :event
      t.integer :energy
      t.string :pet

      t.timestamps
    end
  end
end
