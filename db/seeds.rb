# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# user1 = User.create!({fname: "James", lname: "Turner", email: "Oldboy52@gmail.com", password: "password"})
  
# user2 = User.create!({fname: "Hank", lname: "Schrader", email: "Schrader@gmail.com", password: "starwars"})

User.destroy_all
Spot.destroy_all
Booking.destroy_all

demo_user = User.create!({fname: "Jason", lname: "Kopacz", email: "jk@gmail.com",
 password: "demouser", age: 27, gender: "M", occupation: "goon",
  education: "Rutgers University", 
  about_me: "Yerrrrrrr"})

user1 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: "email@gmail.com", password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})
user2 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: "email1@gmail.com", password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})
user3 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: "email2@gmail.com", password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})
user4 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: "email3@gmail.com", password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})
user5 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: "email4@gmail.com", password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})
user6 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: "email5@gmail.com", password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})
user7 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: "email6@gmail.com", password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})
user8 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: "email7@gmail.com", password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})
user9 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: "email8@gmail.com", password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})
user10 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: "email9@gmail.com", password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})


spot1 = Spot.create!({host_id: User.find_by(email: "jk@gmail.com").id, location_id: 1, max_guests: 4, 
last_minute_requests: true, preferred_gender: "Any", kid_friendly: true, 
pet_friendly: true, smoking_allowed: true, has_pets: false, has_children: false,
 smoking_at_home: true, wheelchair_accessible: true, 
 sleeping_arrangements: "Private Bedroom", location_name: "New York City, New York"})

spot2 = Spot.create!({host_id: User.find_by(email: "email@gmail.com").id, location_id: 1, max_guests: 2, 
last_minute_requests: true, preferred_gender: "Any", kid_friendly: true, 
pet_friendly: true, smoking_allowed: true, has_pets: false, has_children: false,
 smoking_at_home: true, wheelchair_accessible: true, 
 sleeping_arrangements: "Private Bedroom", location_name: "New York City, New York"})

spot3 = Spot.create!({host_id: User.find_by(email: "email1@gmail.com").id, location_id: 1, max_guests: 2, 
last_minute_requests: true, preferred_gender: "Any", kid_friendly: true, 
pet_friendly: true, smoking_allowed: true, has_pets: false, has_children: false,
 smoking_at_home: true, wheelchair_accessible: true, 
 sleeping_arrangements: "Private Bedroom", location_name: "New York City, New York"})

spot4 = Spot.create!({host_id: User.find_by(email: "email2@gmail.com").id, location_id: 1, max_guests: 2, 
last_minute_requests: true, preferred_gender: "Any", kid_friendly: true, 
pet_friendly: true, smoking_allowed: true, has_pets: false, has_children: false,
 smoking_at_home: true, wheelchair_accessible: true, 
 sleeping_arrangements: "Private Bedroom", location_name: "New York City, New York"})

spot5 = Spot.create!({host_id: User.find_by(email: "email3@gmail.com").id, location_id: 2, max_guests: 2, 
last_minute_requests: true, preferred_gender: "Any", kid_friendly: true, 
pet_friendly: true, smoking_allowed: true, has_pets: false, has_children: false,
 smoking_at_home: true, wheelchair_accessible: true, 
 sleeping_arrangements: "Private Bedroom", location_name: "Philladelphia, Pennsylvania"})

spot6 = Spot.create!({host_id: User.find_by(email: "email4@gmail.com").id, location_id: 2, max_guests: 2, 
last_minute_requests: true, preferred_gender: "Any", kid_friendly: true, 
pet_friendly: true, smoking_allowed: true, has_pets: false, has_children: false,
 smoking_at_home: true, wheelchair_accessible: true, 
 sleeping_arrangements: "Private Bedroom", location_name: "Philladelphia, Pennsylvania"})

spot7 = Spot.create!({host_id: User.find_by(email: "email5@gmail.com").id, location_id: 2, max_guests: 2, 
last_minute_requests: true, preferred_gender: "Any", kid_friendly: true, 
pet_friendly: true, smoking_allowed: true, has_pets: false, has_children: false,
 smoking_at_home: true, wheelchair_accessible: true, 
 sleeping_arrangements: "Private Bedroom", location_name: "Philladelphia, Pennsylvania"})

spot8 = Spot.create!({host_id: User.find_by(email: "email6@gmail.com").id, location_id: 3, max_guests: 2, 
last_minute_requests: true, preferred_gender: "Any", kid_friendly: true, 
pet_friendly: true, smoking_allowed: true, has_pets: false, has_children: false,
 smoking_at_home: true, wheelchair_accessible: true, 
 sleeping_arrangements: "Private Bedroom", location_name: "San Francisco, California"})

spot9 = Spot.create!({host_id: User.find_by(email: "email7@gmail.com").id, location_id: 3, max_guests: 2, 
last_minute_requests: true, preferred_gender: "Any", kid_friendly: true, 
pet_friendly: true, smoking_allowed: true, has_pets: false, has_children: false,
 smoking_at_home: true, wheelchair_accessible: true, 
 sleeping_arrangements: "Private Bedroom", location_name: "San Francisco, California"})

spot10 = Spot.create!({host_id: User.find_by(email: "email8@gmail.com").id, location_id: 3, max_guests: 2, 
last_minute_requests: true, preferred_gender: "Any", kid_friendly: true, 
pet_friendly: true, smoking_allowed: true, has_pets: false, has_children: false,
 smoking_at_home: true, wheelchair_accessible: true, 
 sleeping_arrangements: "Private Bedroom", location_name: "San Francisco, California"})

spot11 = Spot.create!({host_id: User.find_by(email: "email9@gmail.com").id, location_id: 3, max_guests: 2, 
last_minute_requests: true, preferred_gender: "Any", kid_friendly: true, 
pet_friendly: true, smoking_allowed: true, has_pets: false, has_children: false,
 smoking_at_home: true, wheelchair_accessible: true, 
 sleeping_arrangements: "Private Bedroom", location_name: "San Francisco, California"})

 booking1 = Booking.create!({destination: "Paris", arrival_date: "09/09/2020", 
  departure_date: "10/10/2020", number_of_travelers: 2, trip_description: "gonna be fun", user_id: 1})