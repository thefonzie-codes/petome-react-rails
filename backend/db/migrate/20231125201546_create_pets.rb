class CreatePets < ActiveRecord::Migration[7.1]
  def change
    create_table :pets do |t|
      t.string :species
      t.string :name
      t.integer :mood
      t.integer :treat
      t.integer :play
      t.integer :talk
      t.integer :to_pet

      t.timestamps
    end
  end
end
