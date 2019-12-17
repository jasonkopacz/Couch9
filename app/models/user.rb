# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  fname           :string           not null
#  lname           :string           not null
#  username        :string
#  email           :string           not null
#  age             :integer
#  gender          :string
#  occupation      :string
#  education       :string
#  about_me        :text
#  imageable_type  :string
#  imageable_id    :bigint
#  reviewable_type :string
#  reviewable_id   :bigint
#  friendable_type :string
#  friendable_id   :bigint
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  spot_id         :integer
#

class User < ApplicationRecord

  attr_reader :password

  validates :fname, :lname, :email, :password_digest, :session_token, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 8 }, allow_nil: true

  after_initialize :ensure_session_token


  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end
  
  def self.find_by_credentials(email, pw)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(pw) ? user : nil
  end
  
  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end
  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end 
end
