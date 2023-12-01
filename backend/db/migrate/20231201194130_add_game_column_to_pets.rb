class AddGameColumnToPets < ActiveRecord::Migration[7.1]
  def change
    add_column :pets, :game_id, :integer
    add_foreign_key :pets, :games, column: :game_id
  end
end
