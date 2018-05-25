class AddColumnStateToApartments < ActiveRecord::Migration[5.2]
  def change
    add_column :apartments, :state, :string
  end
end
