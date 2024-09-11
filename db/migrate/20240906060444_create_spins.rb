class CreateSpins < ActiveRecord::Migration[7.1]
  def change
    create_table :spins do |t|
      t.text :values

      t.timestamps
    end
  end
end
