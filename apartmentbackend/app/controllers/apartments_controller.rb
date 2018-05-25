class ApartmentsController < ApplicationController

# before_action :authenticate_user

  def index
    apartments = Apartment.all
    render json: apartments
  end


  def create
    apartment = Apartment.create(apartment_params)

    # Current.apartment.avatar_base.attach(params[:avatar_base])
     # apartment.attach(params[:avatar_base])
     puts "AVATAR base::  #{params[:avatar_base]}"
     # puts "AVATAR 2 #{apartment_params}"
     # puts "AVATAR #{apartment_params}"
      if apartment.valid?
        render json: apartment
      else
        render json: apartment.errors, status: :unprocessable_entity
      end
  end


  def apartment_params
         params.require(:apartment).permit(:street1, :street2, :city, :state, :zip, :country, :manager, :phone, :email, :hours, :avatar, :avatar_base)
  end

end
