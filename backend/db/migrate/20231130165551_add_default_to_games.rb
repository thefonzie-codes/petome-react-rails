class AddDefaultToGames < ActiveRecord::Migration[7.1]
  def change
    change_column_default :games, :day, 1
    change_column_default :games, :event, 1
    change_column_default :games, :energy, 5
  end
end
