class Apartment < ApplicationRecord
    # validates :street1, :zip, presence: true
    has_one_attached :avatar_base

    attr_accessor :avatar_base  #<- sets up accessor methods
    # before_validation :parse_avatar_base
    # #
    # private
    # def parse_avatar_base
    #   if avatar_base
    #     image = Paperclip.io_adapters.for(avatar_base)
    #     image.original_filename = "file.#{image.content_type.split("/")[1]}"
    #     self.avatar = image
    #   end
    # end

end
