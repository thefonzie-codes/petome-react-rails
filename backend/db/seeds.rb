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
      "nextEvent": 2,
      "energy": -1
    },
    {
      "text": "Play with your pets",
      "nextEvent": 5,
      "energy": 0
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
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You go for a walk. What do you want to do?",
  options: '[
    {
      "text": "Play with your pets",
      "nextEvent": 5,
      "energy": 0
    },
    {
      "text": "Go back home and sleep",
      "nextEvent": 4,
      "energy": 0
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
  dialogue: "Oops! You're out of energy so you went home. Time to rest.",
  options: '[
    {
      "text": "Go back to sleep",
      "nextEvent": 1,
      "energy": 0
    }
  ]'
)

# event 5 - pet interaction choices
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You are playing with your pet, what do you want to do?",
    options: '[
      {
        "text": "Give your pet a treat",
        "nextEvent": 6,
        "energy": -1
      },
      {
        "text": "Play with your pet",
        "nextEvent": 7,
        "energy": -1
      },
      {
        "text": "Talk to your pet",
        "nextEvent": 8,
        "energy": -1
      },
      {
        "text": "Pet your pet",
        "nextEvent": 9,
        "energy": -1
    }
  ]'
)

# event 6 - pet treat
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You give your pet a treat, yum!",
    options: '[
      {
        "text": "Go back to actions",
        "nextEvent": 5,
        "energy": 0
      },
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

# event 7 - pet play
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You play with your pet, yay!",
    options: '[
      {
        "text": "Go back to actions",
        "nextEvent": 5,
        "energy": 0
      },
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

# event 8 - pet talk
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You talk to your pet, how cute!",
    options: '[
      {
        "text": "Go back to actions",
        "nextEvent": 5,
        "energy": 0
      },
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

# event 9 - pet pet
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You pet your pet, aww!",
    options: '[
      {
        "text": "Go back to actions",
        "nextEvent": 5,
        "energy": 0
      },
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




# Create one pet
Pet.create!(species: "Dog", name: "Rover", mood: 5, treat: 1, play: 2, talk: -1, to_pet: 3, pet_happy: "http://localhost:3001/images/neko.png", pet_sad: "http://localhost:3001/images/neko.png", pet_neutral: "http://localhost:3001/images/neko.png")
Pet.create!(species: "Cat", name: "Papaya", mood: 5, treat: 3, play: 2, talk: 1, to_pet: -1, pet_happy: "http://localhost:3001/images/neko.png", pet_sad: "http://localhost:3001/images/neko.png", pet_neutral: "http://localhost:3001/images/neko.png")
Pet.create!(species: "Bearded Lizard", name: "Godzilla", mood: 5, treat: -1, play: 3, talk: 2, to_pet: 1, pet_happy: "http://localhost:3001/images/neko.png", pet_sad: "http://localhost:3001/images/neko.png", pet_neutral: "http://localhost:3001/images/neko.png")