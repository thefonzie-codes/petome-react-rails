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

# Create event
# Event.create!(img: "", dialogue: "", option1: "", option2: "", option3: "", option4: "")

# event 1 - start of day
Event.create!(
  img: "", 
  dialogue: "You wake up in the morning and you feel rested. What do you want to do?", 
  options: '[
    {
      "text": "Go for a walk",
      "nextEvent": 2,
      "energy": -1
    },
    {
      "text": "Play with your pet",
      "nextEvent": 3,
      "energy": -1
    },
    {
      "text": "Go back to sleep",
      "nextEvent": 4,
      "energy": 0
    }
  ]'
)

# event 2 - walk
Event.create!(
  img: "",
  dialogue: "You go for a walk. What do you want to do?",
  options: '[
    {
      "text": "Play with your pets",
      "nextEvent": 3,
      "energy": -1
    },
    {
      "text": "Go back home and sleep",
      "nextEvent": 4,
      "energy": 0
    }
  ]'
)

# event 3 - play with pet
Event.create!(
  img: "",
  dialogue: "You play with your pet. What do you want to do?",
  options: '[
    {
      "text": "Go for a walk",
      "nextEvent": 2,
      "energy": -1
    },
    {
      "text": "Go back home and sleep",
      "nextEvent": 4,
      "energy": 0
    }
  ]'
)


# event 4 - end of day
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You wake up and it's a new day. What do you want to do?",
  options: '[
    {
      "text": "Go back to sleep",
      "nextEvent": 1,
      "energy": 5
    }
  ]'
)

# Create one pet
Pet.create!(species: "Dog", name: "Rover", mood: 5, treat: 1, play: 2, talk: -1, to_pet: 3, pet_happy: "http://localhost:3001/images/neko.png", pet_sad: "http://localhost:3001/images/neko.png", pet_neutral: "http://localhost:3001/images/neko.png")
Pet.create!(species: "Cat", name: "Papaya", mood: 5, treat: 3, play: 2, talk: 1, to_pet: -1, pet_happy: "http://localhost:3001/images/neko.png", pet_sad: "http://localhost:3001/images/neko.png", pet_neutral: "http://localhost:3001/images/neko.png")
Pet.create!(species: "Bearded Lizard", name: "Godzilla", mood: 5, treat: -1, play: 3, talk: 2, to_pet: 1, pet_happy: "http://localhost:3001/images/neko.png", pet_sad: "http://localhost:3001/images/neko.png", pet_neutral: "http://localhost:3001/images/neko.png")