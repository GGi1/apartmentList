class CreateApartments < ActiveRecord::Migration[5.2]
  def change
    create_table :apartments do |t|
      t.string :street1
      t.string :street2
      t.string :city
      t.integer :zip
      t.string :country
      t.string :manager
      t.string :phone
      t.string :email
      t.string :hours

      t.timestamps
    end
  end
end
