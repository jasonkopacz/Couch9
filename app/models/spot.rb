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
#  created_at                           :datetime         not null
#  updated_at                           :datetime         not null
#  description_of_sleeping_arrangements :text
#  roommate_situation                   :text
#  public_transportation                :text
#  what_i_can_share_with_guests         :text
#  additional_information               :text
#  location_name                        :string
#  sun                                  :boolean
#  mon                                  :boolean
#  tue                                  :boolean
#  wed                                  :boolean
#  thu                                  :boolean
#  fri                                  :boolean
#  sat                                  :boolean
#  host_name                            :string
#

class Spot < ApplicationRecord

    belongs_to :host,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :User

    belongs_to :location,
        primary_key: :id,
        foreign_key: :location_id,
        class_name: :Location

end
