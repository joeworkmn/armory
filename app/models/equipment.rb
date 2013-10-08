# == Schema Information
#
# Table name: equipment
#
#  id           :integer          not null, primary key
#  name         :string(255)
#  strength     :integer          default(0)
#  agility      :integer          default(0)
#  stamina      :integer          default(0)
#  intellect    :integer          default(0)
#  spirit       :integer          default(0)
#  attack_power :integer          default(0)
#  critical     :integer          default(0)
#  dodge        :integer          default(0)
#  created_at   :datetime
#  updated_at   :datetime
#

class Equipment < ActiveRecord::Base

   STATS = ['strength', 'agility', 'stamina', 'intellect', 
            'spirit', 'attack_power', 'critical', 'dodge']

   STAT_LABELS = STATS.map(&:titleize)



   validates :name, presence: true
   validates_numericality_of :strength, :agility, :stamina, :intellect, 
                             :spirit, :attack_power, :critical, :dodge

end
