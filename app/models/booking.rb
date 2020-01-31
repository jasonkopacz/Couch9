# == Schema Information
#
# Table name: bookings
#
#  id                  :bigint           not null, primary key
#  destination         :string           not null
#  arrival_date        :date             not null
#  departure_date      :date             not null
#  trip_description    :text             not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  number_of_travelers :integer          not null
#  user_id             :integer
#

class Booking < ApplicationRecord

  validates :destination, :arrival_date, :departure_date, :number_of_travelers, :trip_description, presence: true

  belongs_to :user

end
