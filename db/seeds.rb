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
 password: "demouser", age: 27, gender: "M", occupation: "Frycook",
  education: "Rutgers University", 
  about_me: "I'm learning to code and I really like travelling.", location_id: 8})

user1 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings, location_id: 1})
user2 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings, location_id: 2})
user3 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings, location_id: 3})
user4 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings, location_id: 4})
user5 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings, location_id: 5})
user6 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings, location_id: 6})
user7 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings, location_id: 7})
user8 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings, location_id: 8})
user9 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings, location_id: 9})
user10 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings, location_id: 10})
user11 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings, location_id: 11})
user12 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings, location_id: 12})
user13 = User.create!({fname: Faker::Name.first_name, lname: Faker::Name.last_name, 
email: Faker::Internet.email, password: "password", age: Faker::Number.between(18, 100),
gender: Faker::Gender.type, occupation: Faker::Job.title, education: Faker::GreekPhilosophers.name,
about_me: Faker::Movies::LordOfTheRings, location_id: 13})