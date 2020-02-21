# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  body        :text             not null
#  surfer_id   :integer
#  booking_id  :integer
#  recommended :boolean
#  author_id   :integer
#  host_id     :integer
#

class Review < ApplicationRecord

    validates :author_id, :host_id, :body, presence: true

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
    
    belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

    belongs_to :surfer,
    primary_key: :id,
    foreign_key: :surfer_id,
    class_name: :User

    # belongs_to :booking

end
