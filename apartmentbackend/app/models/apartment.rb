class Apartment < ApplicationRecord
    validates :street1, :zip, presence: true
end
