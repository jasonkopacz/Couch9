# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create!({fname: "James", lname: "Turner", email: "Oldboy52@gmail.com", password: "password",
  age: 29, gender: "M", languages: ["English", "Spanish"], occupation: "teacher", 
  education: ["Masters Degree", "Bachelors Degree"], location_id: 13, 
  about_me: "Easygoing, fun, outdoor person, outrageous planner, excellent organization skills"})
user2 = User.create!({fname: "Hank", lname: "Schrader", email: "Schrader@gmail.com",password: "starwars",
  age: 50, gender: "M", languages: ["English", "Spanish"], occupation: "DEA Agent",
  education: ["Masters Degree", "Bachelors Degree"], location_id: 1, about_me: "Hardworker"})