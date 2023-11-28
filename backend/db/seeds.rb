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
  img: "http://localhost:3001/images/background.jpg", 
  dialogue: "You wake up in the morning and you feel rested. What do you want to do?", 
  options: '[
    {
      "text": "Go for a walk",
      "nextEvent": 2
    },
    {
      "text": "Play with your pets",
      "nextEvent": 5
    },
    {
      "text": "Go back to sleep",
      "nextEvent": 4
    }
  ]'
)

# event 2 - walk
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You go for a walk. What do you want to do?",
  options: '[
    {
      "text": "Play with your pets",
      "nextEvent": 5
    },
    {
      "text": "Go back home and sleep",
      "nextEvent": 4
    }
  ]'
)

# event 3 - [[OLD]] play with pet
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You play with your pets. What do you want to do?",
  options: '[
    {
      "text": "Go for a walk",
      "nextEvent": 2
    },
    {
      "text": "Go back home and sleep",
      "nextEvent": 4
    }
  ]'
)


# event 4 - end of day
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "Oops! You're out of energy so you went home. Time to rest.",
  options: '[
    {
      "text": "Go back to sleep",
      "nextEvent": 1
    }
  ]'
)

# event 5 - dog interaction choices
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You are playing with Rover, what do you want to do?",
    petId: 1,
    options: '[
      {
        "text": "Give your pet a treat",
        "nextEvent": 5,
        "actionLabel": "treat"
      },
      {
        "text": "Play with your pet",
        "nextEvent": 5,
        "actionLabel": "play"
      },
      {
        "text": "Talk to your pet",
        "nextEvent": 5,
        "actionLabel": "talk"
      },
      {
        "text": "Pet your pet",
        "nextEvent": 5,
        "actionLabel": "to_pet"
    }
  ]'
)

# event 6 - cat interaction choices
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You are playing with Papaya, what do you want to do?",
    petId: 2,
    options: '[
      {
        "text": "Give your pet a treat",
        "nextEvent": 6,
        "actionLabel": "treat"
      },
      {
        "text": "Play with your pet",
        "nextEvent": 6,
        "actionLabel": "play"
      },
      {
        "text": "Talk to your pet",
        "nextEvent": 6,
        "actionLabel": "talk"
      },
      {
        "text": "Pet your pet",
        "nextEvent": 6,
        "actionLabel": "to_pet"
    }
  ]'
)

# event 7 - lizard interaction choices
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You are playing with Godzilla, what do you want to do?",
    petId: 3,
    options: '[
      {
        "text": "Give your pet a treat",
        "nextEvent": 7,
        "actionLabel": "treat"
      },
      {
        "text": "Play with your pet",
        "nextEvent": 7,
        "actionLabel": "play"
      },
      {
        "text": "Talk to your pet",
        "nextEvent": 7,
        "actionLabel": "talk"
      },
      {
        "text": "Pet your pet",
        "nextEvent": 7,
        "actionLabel": "to_pet"
    }
  ]'
)

# Create one pet
Pet.create!(species: "Dog", name: "Rover", mood: 5, treat: 1, play: 2, talk: 0, to_pet: 3, pet_happy: "http://localhost:3001/images/neko.png", pet_sad: "http://localhost:3001/images/neko.png", pet_neutral: "http://localhost:3001/images/neko.png")
Pet.create!(species: "Cat", name: "Papaya", mood: 5, treat: 3, play: 2, talk: 1, to_pet: 0, pet_happy: "http://localhost:3001/images/neko.png", pet_sad: "http://localhost:3001/images/neko.png", pet_neutral: "http://localhost:3001/images/neko.png")
Pet.create!(species: "Bearded Lizard", name: "Godzilla", mood: 5, treat: 0, play: 3, talk: 2, to_pet: 1, pet_happy: "http://localhost:3001/images/neko.png", pet_sad: "http://localhost:3001/images/neko.png", pet_neutral: "http://localhost:3001/images/neko.png")