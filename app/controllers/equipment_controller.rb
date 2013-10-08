class EquipmentController < ApplicationController

   def index
      @equipments = Equipment.all
      gon.stats = Equipment::STATS
   end


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


   def edit
      equipment
   end


   def update
      if equipment.update(equipment_params)
         flash[:success] = "Item has been updated."
         redirect_to edit_equipment_path
      else
         render :edit
      end
   end



private

   def equipment_params
      params.require(:equipment)
            .permit(:name, :strength, :agility, :stamina, :intellect, 
                    :spirit, :attack_power, :critical, :dodge)
   end


   def equipment
      @equipment ||= Equipment.find_by(id: params[:id])
   end
end
