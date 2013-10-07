class CreateEquipment < ActiveRecord::Migration
  def change
    create_table :equipment do |t|
       t.string :name
       t.integer :strength
       t.integer :agility
       t.integer :stamina
       t.integer :intellect
       t.integer :spirit
       t.integer :attack_power
       t.integer :critical
       t.integer :dodge


      t.timestamps
    end
  end
end
