class EquipmentController < ApplicationController
   def new
      @equipment = Equipment.new
   end

   def create
      @equipment = Equipment.new(equipment_params)
      if @equipment.save
         flash[:success] = "Item has been created."
         redirect_to new_equipment_path
      else
         render :new
      end
   end



private

   def equipment_params
      params.require(:equipment)
            .permit(:name, :strength, :agility, :stamina, :intellect, 
                    :spirit, :attack_power, :critical, :dodge)
   end
end
