class ChangeColumns < ActiveRecord::Migration
  def change
     change_column :equipment, :strength, :integer, default: 0
     change_column :equipment, :agility, :integer, default: 0
     change_column :equipment, :stamina, :integer, default: 0
     change_column :equipment, :intellect, :integer, default: 0
     change_column :equipment, :spirit, :integer, default: 0
     change_column :equipment, :attack_power, :integer, default: 0
     change_column :equipment, :critical, :integer, default: 0
     change_column :equipment, :dodge, :integer, default: 0
  end
end
