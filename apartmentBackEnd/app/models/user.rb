class User < ApplicationRecord
  rolify
  has_secure_password # <-- This is the new line
  has_many :grades
end
