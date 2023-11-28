class AddPetIdToEvents < ActiveRecord::Migration[7.1]
  def change
    add_column :events, :petId, :integer
  end
end
