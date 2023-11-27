class AddImageToPets < ActiveRecord::Migration[7.1]
  def change
    add_column :pets, :pet_happy, :string
    add_column :pets, :pet_sad, :string
    add_column :pets, :pet_neutral, :string
  end
end
