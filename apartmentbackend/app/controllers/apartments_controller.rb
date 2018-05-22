class ApartmentsController < ApplicationController

# before_action :authenticate_user

  def index
    apartments = Apartment.all
    render json: apartments
  end


  def create
    apartment = Apartment.create(apartment_params)
      if apartment.valid?
        render json: apartment
      else
        render json: apartment.errors, status: :unprocessable_entity
      end
  end


  def apartment_params
        params.require(:apartment).permit(:street1, :street2, :city, :state, :zip, :country, :manager, :phone, :email, :hours)
  end

end
