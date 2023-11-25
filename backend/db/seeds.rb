# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Create one game
Game.create!(user: "default", day: 1, event: 1, energy: 5, pet: "[1, 2, 3]")

# Create one event
Event.create!(
  img: "https://i.imgur.com/0Q8Z6ZP.png", 
  dialogue: "You wake up in a strange place. You don't remember how you got here. You look around and see a door, a window, and a bed.", 
  option1: "Go to the door", 
  option2: "Go to the window", 
  option3: "Go to the bed", 
  option4: "Go to the bed")

# Create one pet
Pet.create!(species: "Dog", name: "Rover", mood: 5, treat: 1, play: 2, talk: -1, to_pet: 3)