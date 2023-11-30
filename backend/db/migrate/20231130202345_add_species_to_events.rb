class AddSpeciesToEvents < ActiveRecord::Migration[7.1]
  def change
    remove_column :events, :petId, :string
    add_column :events, :species, :string
  end
end
