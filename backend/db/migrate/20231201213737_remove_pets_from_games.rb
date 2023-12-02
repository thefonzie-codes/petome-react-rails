class RemovePetsFromGames < ActiveRecord::Migration[7.1]
  def change
    remove_column :games, :pet
  end
end
