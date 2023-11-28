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


# Create pets
Pet.create!(species: "Dog", name: "Rover", mood: 5, treat: 1, play: 2, talk: 0, to_pet: 3, pet_happy: "http://localhost:3001/images/neko.png", pet_sad: "http://localhost:3001/images/neko.png", pet_neutral: "http://localhost:3001/images/neko.png")
Pet.create!(species: "Cat", name: "Papaya", mood: 5, treat: 3, play: 2, talk: 1, to_pet: 0, pet_happy: "http://localhost:3001/images/neko.png", pet_sad: "http://localhost:3001/images/neko.png", pet_neutral: "http://localhost:3001/images/neko.png")
Pet.create!(species: "Bearded Lizard", name: "Godzilla", mood: 5, treat: 0, play: 3, talk: 2, to_pet: 1, pet_happy: "http://localhost:3001/images/neko.png", pet_sad: "http://localhost:3001/images/neko.png", pet_neutral: "http://localhost:3001/images/neko.png")


# Create events

# Event 1
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You wake up and open your eyes, staring blankly at the ceiling.",
  options: '[
    {
      "text": "Next",
      "nextEvent": 2
    }
  ]'
)

# Event 2
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "“Lucia... it feels like a dream.”",
  options: '[
    {
      "text": "Next",
      "nextEvent": 3
    }
  ]'
)

# Event 3
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "“... you wouldn’t want me to keep sulking here, would you?”",
  options: '[
    {
      "text": "Next",
      "nextEvent": 4
    }
  ]'
)

# Event 4
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "“Heh, I guess not.”",
  options: '[
    {
      "text": "Next",
      "nextEvent": 5
    }
  ]'
)

# Event 5
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "“...I should probably drop off the wood I chopped up yesterday to the town. The axe needs sharpening too, anyway. ”",
  options: '[
    {
      "text": "Leave home",
      "nextEvent": 6
    }
  ]'
)

# Event 6
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You get up and walk through the woods and hear some rustling in a nearby bush.",
  options: '[
    {
      "text": "Next",
      "nextEvent": 7
    }
  ]'
)

# Event 7
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "“There's never anything around here… wonder what that could be…“",
  options: '[
    {
      "text": "I dont have time for this.",
      "nextEvent": 8
    },
    {
      "text": "I should check it out.",
      "nextEvent": 8
    }
  ]'
)

# Event 8
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "A wolf jumps out of the bush and growls at you.",
  # petId: 1,
  options: '[
    {
      "text": "Maybe he’s hungry",
      "nextEvent": 9
    }
  ]'
)

# Event 9
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You toss it a piece of jerky and it eats it, sniffs your hand, and leaves.",
  # petId: 1,
  options: '[
    {
      "text": "Next",
      "nextEvent": 10
    }
  ]'
)

# Event 10
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "“Never seen one of those around here before…”",
  options: '[
    {
      "text": "Enter town",
      "nextEvent": 11
    }
  ]'
)

# Event 11
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You enter the town and hear a loud BOOM coming from a nearby shop.",
  options: '[
    {
      "text": "Next",
      "nextEvent": 12
    }
  ]'
)

# Event 12
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "“...what are those magicians up to this time?”",
  options: '[
    { "text": "Next",
      "nextEvent": 13
    }
  ]'
)

# Event 13
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You turn away to keep walking and you hear a meow down at your feet.",
  # petId: 2,
  options: '[
    { "text": "”Hey little grimmelkin, what can I do for you?”",
      "nextEvent": 14
    },
    { "text": "Shoo it away",
      "nextEvent": 14
    }
  ]'
)

# Event 14
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "The cat rubs against your leg and trots away.",
  # petId: 2,
  options: '[
    { "text": "Go drop off lumber and axe at the shop",
      "nextEvent": 15
    }
  ]'
)

# Event 15
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "“Lumber’s been dropped off, and the smith’s got my axe for a bit… might as well sit.”",
  options: '[
    { "text": "Go sit in the field",
      "nextEvent": 16
    }
  ]'
)

# Event 16
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You sit in the field and hear a loud *SQUISH*",
  options: '[
    { "text": "”What in the?...”",
      "nextEvent": 17
    }
  ]'
)

# Event 17
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You get up and look down to see a slime. “Ah, sorry bud...“",
  # petId: 3,
  options: '[
    { "text": "Sit down next it",
      "nextEvent": 18
    },
    { "text": "Walk away",
      "nextEvent": 18
    }
  ]'
)

# Event 18
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "The slime stares at you, boops your foot, pops out a flower",
  # petId: 3,
  options: '[
    { "text": "”...what is this all about?”",
      "nextEvent": 19
    }
  ]'
)

# Event 19
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "The slime squishes away into the distance.",
  # petId: 3,
  options: '[
    { "text": "Go back home",
      "nextEvent": 20
    }
  ]'
) 

# Event 20
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "“What a strange day... lots of them monsters out and about...“",
  options: '[
    { "text": "Go to sleep",
      "nextEvent": 21
    }
  ]'
)

# Event 21
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "“...am I dreaming?“",
  options: '[
    { "text": "Wake up",
      "nextEvent": 22
    }
  ]'
)

# Event 22
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "“Strange... I guess I should get my day started now.”",
  options: '[
    { "text": "Next",
      "nextEvent": 23
    }
  ]'
)

# Event 23 - controller event
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "What should I do today?",
  options: '[
    { "text": "Go chop some wood",
      "nextEvent": 24
    },
    { "text": "Go to the town",
      "nextEvent": 25
    },
    { "text": "Go for a walk in the field",
      "nextEvent": 26
    }
  ]'
)

# Event 24 - Wolf interaction event
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You go to the woods to chop some wood. You hear a rustling in the bushes and out comes the same wolf from before.",
  petId: 1,
  options: '[
    {
      "text": "Give him some more jerky",
      "nextEvent": 24,
      "actionLabel": "treat"
    },
    {
      "text": "Throw a stick for him to fetch",
      "nextEvent": 24,
      "actionLabel": "play"
    },
    {
      "text": "Talk to him",
      "nextEvent": 24,
      "actionLabel": "talk"
    },
    {
      "text": "He looks fluffy. Risk it and pet him",
      "nextEvent": 24,
      "actionLabel": "to_pet"
    },
    {
      "text": "Go do something else",
      "nextEvent": 23
    }
]'
)

# Event 25 - Cat interaction event
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You go to the town. You hear the same meow down at your feet again.",
  petId: 2,
  options: '[
    {
      "text": "Give it a treat",
      "nextEvent": 25,
      "actionLabel": "treat"
    },
    {
      "text": "Dangle a string for it to play with",
      "nextEvent": 25,
      "actionLabel": "play"
    },
    {
      "text": "Meow back at it",
      "nextEvent": 25,
      "actionLabel": "talk"
    },
    {
      "text": "Give a belly rub",
      "nextEvent": 25,
      "actionLabel": "to_pet"
    },
    {
      "text": "Go do something else",
      "nextEvent": 23
    }
]'
)

# Event 26 - Slime interaction event
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You go to the field. You see the same slime from before.",
  petId: 3,
  options: '[
    {
      "text": "Toss it some leftovers",
      "nextEvent": 26,
      "actionLabel": "treat"
    },
    {
      "text": "Roll around with it",
      "nextEvent": 24,
      "actionLabel": "play"
    },
    {
      "text": "Lay down and talk to it",
      "nextEvent": 24,
      "actionLabel": "talk"
    },
    {
      "text": "Poke it with a stick",
      "nextEvent": 24,
      "actionLabel": "to_pet"
    },
    {
      "text": "Go do something else",
      "nextEvent": 23
    }
]'
)

# event 27 - end of day 
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "...been a long day.",
  options: '[
    {
      "text": "Go to sleep",
      "nextEvent": 28
    }
  ]'
)

# event 28 - New day
Event.create!(
  img: "http://localhost:3001/images/background.jpg",
  dialogue: "You wake up and it's time to start the next day.",
  options: '[
    {
      "text": "Next",
      "nextEvent": 23
    }
  ]'
)

