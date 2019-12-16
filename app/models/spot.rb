# == Schema Information
#
# Table name: spots
#
#  id                    :bigint           not null, primary key
#  description           :text             not null
#  host_id               :integer
#  location_id           :integer
#  max_guests            :integer
#  last_minute_requests  :boolean          default(FALSE)
#  preferred_gender      :string
#  kid_friendly          :boolean          default(FALSE)
#  pet_friendly          :boolean          default(FALSE)
#  smoking_allowed       :boolean          default(FALSE)
#  has_pets              :boolean          default(FALSE)
#  has_children          :boolean          default(FALSE)
#  smoking_at_home       :boolean          default(FALSE)
#  wheelchair_accessible :boolean          default(FALSE)
#  sleeping_arrangements :text
#  more_details          :text
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

class Spot < ApplicationRecord
  validates :description, presence: true

  belongs_to :host,
  primary_key: :id, 
  foreign_key: :host_id,
  class_name: :User

end
