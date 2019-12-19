# == Schema Information
#
# Table name: spots
#
#  id                                   :bigint           not null, primary key
#  host_id                              :integer
#  location_id                          :integer
#  max_guests                           :integer
#  last_minute_requests                 :boolean          default(FALSE)
#  preferred_gender                     :string
#  kid_friendly                         :boolean          default(FALSE)
#  pet_friendly                         :boolean          default(FALSE)
#  smoking_allowed                      :boolean          default(FALSE)
#  has_pets                             :boolean          default(FALSE)
#  has_children                         :boolean          default(FALSE)
#  smoking_at_home                      :boolean          default(FALSE)
#  wheelchair_accessible                :boolean          default(FALSE)
#  sleeping_arrangements                :text
#  more_details                         :text
#  created_at                           :datetime         not null
#  updated_at                           :datetime         not null
#  available_nights                     :string
#  request_preferences                  :boolean
#  description_of_sleeping_arrangements :text
#  roommate_situation                   :text
#  public_transportation                :text
#  what_i_can_share_with_guests         :text
#  additional_information               :text
#

class Spot < ApplicationRecord

    belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

end
