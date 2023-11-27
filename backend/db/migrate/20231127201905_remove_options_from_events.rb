class RemoveOptionsFromEvents < ActiveRecord::Migration[7.1]
  def change
    remove_column :events, :option1, :string
    remove_column :events, :option2, :string
    remove_column :events, :option3, :string
    remove_column :events, :option4, :string
    add_column :events, :options, :string

  end
end
