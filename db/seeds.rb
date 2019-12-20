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

demo_user = User.create!({fname: "Jason", lname: "Kopacz", email: "jk@gmail.com",
 password: "demouser", age: 27, gender: "M", occupation: "goon",
  education: "Rutgers University", 
  about_me: "Yerrrrrrr"})

user1 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})
user2 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})
user3 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})
user4 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})
user5 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})
user6 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})
user7 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})
user8 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})
user9 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})
user10 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings.quote})


spot1 = Spot.create!({host_id: User.find_by(email: "jk@gmail.com").id, max_guests: 4, 
last_minute_requests: true, preferred_gender: "Any", kid_friendly: true, 
pet_friendly: true, smoking_allowed: true, has_pets: false, has_children: false,
 smoking_at_home: true, wheelchair_accessible: true, 
 sleeping_arrangements: "Private Bedroom"})