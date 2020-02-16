# == Schema Information
#
# Table name: locations
#
#  id   :bigint           not null, primary key
#  name :text             not null
#  lat  :string
#  long :string
#

class Location < ApplicationRecord

    has_many :spots,
        primary_key: :id,
        foreign_key: :location_id,
        class_name: :Spot 

end
