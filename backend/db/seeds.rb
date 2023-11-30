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
Game.create!(user: "default")


# Create pets
Pet.create!(species: "Wolf", name: "Fang", mood: 5, treat: 2, play: 1, talk: 0, to_pet: -1, pet_happy: "http://localhost:3001/images/sprites/wolf_happy.png", pet_sad: "http://localhost:3001/images/sprites/wolf_sad.png", pet_neutral: "http://localhost:3001/images/sprites/wolf_neutral.png")
Pet.create!(species: "Cat", name: "Noctis", mood: 5, treat: 1, play: -1, talk: 2, to_pet: 0, pet_happy: "http://localhost:3001/images/sprites/cat_happy.png", pet_sad: "http://localhost:3001/images/sprites/cat_sad.png", pet_neutral: "http://localhost:3001/images/sprites/cat_neutral.png")
Pet.create!(species: "Slime", name: "Wiggy", mood: 5, treat: 0, play: 2, talk: 1, to_pet: 1, pet_happy: "http://localhost:3001/images/sprites/slime_happy.png", pet_sad: "http://localhost:3001/images/sprites/slime_neutral.png", pet_neutral: "http://localhost:3001/images/sprites/slime_neutral.png")


Event.destroy_all

# Create events

# Event 1
Event.create!(
  img: "http://localhost:3001/images/backgrounds/wake.jpeg",
  dialogue: "You wake up to the sun filtering into your eyes from the skylight, early birds still making their victory songs. 'Another day, more to do...' you take a moment to stare blankly at the ceiling.",
  options: '[
    {
      "text": "Next",
      "nextEvent": 2
    }
  ]'
)

# Event 2
Event.create!(
  img: "http://localhost:3001/images/backgrounds/wake.jpeg",
  dialogue: "With a deep sigh, your body finds itself again. “Lucia... it feels like a dream.” ...the war was over, and you were finally home.",
  options: '[
    {
      "text": "Next",
      "nextEvent": 3
    }
  ]'
)

# Event 3
Event.create!(
  img: "http://localhost:3001/images/backgrounds/wifu.jpeg",
  dialogue: "But it's not the same without her. “... you wouldn’t want me to keep sulking here, would you?”",
  options: '[
    {
      "text": "Next",
      "nextEvent": 4
    }
  ]'
)

# Event 4
Event.create!(
  img: "http://localhost:3001/images/backgrounds/wifu.jpeg",
  dialogue: "“Heh, defintiely not. You'd have a lot to say. I guess you're right, it's time to work.”",
  options: '[
    {
      "text": "Next",
      "nextEvent": 5
    }
  ]'
)

# Event 5
Event.create!(
  img: "http://localhost:3001/images/backgrounds/depart.jpeg",
  dialogue: "“...I should probably drop yesterday's cord into the town. The axe could use a sharpening too.”",
  options: '[
    {
      "text": "Head Out",
      "nextEvent": 6
    }
  ]'
)

# Event 6
Event.create!(
  img: "http://localhost:3001/images/backgrounds/forest_1.jpeg",
  dialogue: "As you walk an ever-familiar path from your secret lot into town you hear rustling from a bush beside you.",
  options: '[
    {
      "text": "Next",
      "nextEvent": 7
    }
  ]'
)

# Event 7
Event.create!(
  img: "http://localhost:3001/images/backgrounds/forest_1.jpeg",
  dialogue: "“Hm. There's never anything around here… wonder what that could be…”",
  options: '[
    {
      "text": "Proably just a tree sprite.",
      "nextEvent": 8
    },
    {
      "text": "I should check that out.",
      "nextEvent": 8
    }
  ]'
)

# Event 8
Event.create!(
  img: "http://localhost:3001/images/backgrounds/forest_1.jpeg",
  dialogue: "You get close and a wolf pounces out of the bush with a low growl.",
  petId: 1,
  options: '[
    {
      "text": "Maybe he’s hungry?",
      "nextEvent": 9
    }
  ]'
)

# Event 9
Event.create!(
  img: "http://localhost:3001/images/backgrounds/forest_1.jpeg",
  dialogue: "You toss the beast a piece of your lunch. Without hesitancy it eats it, sniffs your hand, then leaves.",
  petId: 1,
  options: '[
    {
      "text": "Keep going",
      "nextEvent": 10
    }
  ]'
)

# Event 10
Event.create!(
  img: "http://localhost:3001/images/backgrounds/forest_1.jpeg",
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
  img: "http://localhost:3001/images/backgrounds/town_1.jpeg",
  dialogue: "You finish selling your firewood to a loyal partner close to market when you catch a loud *BOOM* coming from a nearby shop.",
  options: '[
    {
      "text": "Next",
      "nextEvent": 12
    }
  ]'
)

# Event 12
Event.create!(
  img: "http://localhost:3001/images/backgrounds/town_1.jpeg",
  dialogue: "“Egh... what are those magicians up to this time?”",
  options: '[
    { "text": "Get a little closer",
      "nextEvent": 13
    }
  ]'
)

# Event 13
Event.create!(
  img: "http://localhost:3001/images/backgrounds/town_1.jpeg",
  dialogue: "You lurk outside the perimeter of a gathering crowd as your left ankle is met with a soft nudge and a *meow*.",
  petId: 2,
  options: '[
    { "text": "“Oh hey little grimmelkin, what can I do for you?”",
      "nextEvent": 14
    },
    { "text": "Shoo it away",
      "nextEvent": 14
    }
  ]'
)

# Event 14
Event.create!(
  img: "http://localhost:3001/images/backgrounds/town_1.jpeg",
  dialogue: "The cat rubs its cheek against your leg then daintily trots away.",
  petId: 2,
  options: '[
    { "text": "Go drop your axe off at the smithy",
      "nextEvent": 15
    }
  ]'
)

# Event 15
Event.create!(
  img: "http://localhost:3001/images/backgrounds/town_1.jpeg",
  dialogue: "“Wood’s been dropped, and the smith’s got my axe for a bit… might as well sit.”",
  options: '[
    { "text": "Go sit in the field",
      "nextEvent": 16
    }
  ]'
)

# Event 16
Event.create!(
  img: "http://localhost:3001/images/backgrounds/field_1.jpeg",
  dialogue: "You find a lonely patch of shade and close your eyes for all but two minutes before you're shaken by a giant *SQUISH*",
  options: '[
    { "text": "“What in the?...”",
      "nextEvent": 17
    }
  ]'
)

# Event 17
Event.create!(
  img: "http://localhost:3001/images/backgrounds/field_1.jpeg",
  dialogue: "Alarmed, you jump to your feet and look down to see a slime. “Ah, sorry bud...”",
  petId: 3,
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
  img: "http://localhost:3001/images/backgrounds/field_1.jpeg",
  dialogue: "The slime stares at you, boops your foot, then gloops a flower from its belly for you.",
  petId: 3,
  options: '[
    { "text": "“...thanks?”",
      "nextEvent": 19
    }
  ]'
)

# Event 19
Event.create!(
  img: "http://localhost:3001/images/backgrounds/field_1.jpeg",
  dialogue: "Content, the slime squishes away into an alley.",
  options: '[
    { "text": "Retrieve your axe and head home",
      "nextEvent": 20
    }
  ]'
) 

# Event 20
Event.create!(
  img: "http://localhost:3001/images/backgrounds/home.jpeg",
  dialogue: "“What a strange day... lots of them monsters out and about now...”",
  options: '[
    { "text": "Go to sleep",
      "nextEvent": 21
    }
  ]'
)

# Event 21
Event.create!(
  img: "http://localhost:3001/images/backgrounds/dream_2.jpeg",
  dialogue: "“mhmmm...am I dreaming? Who...”",
  options: '[
    { "text": "Wake up",
      "nextEvent": 22
    }
  ]'
)

# Event 22
Event.create!(
  img: "http://localhost:3001/images/backgrounds/wake.jpeg",
  dialogue: "“Wha? Strange... Anyway. Time to get going.”",
  options: '[
    { "text": "Next",
      "nextEvent": 23
    }
  ]'
)

# Event 23 - controller event
Event.create!(
  img: "http://localhost:3001/images/backgrounds/home.jpeg",
  dialogue: "What should I get up to?",
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
  img: "http://localhost:3001/images/backgrounds/forest_2.jpeg",
  dialogue: "You go to your site to chop some wood. Rustling from a familiar bush reveals the same wolf from before, Fang.",
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
      "text": "Tell him about your day",
      "nextEvent": 24,
      "actionLabel": "talk"
    },
    {
      "text": "Hes really fluffy. Risk it and pet him",
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
  img: "http://localhost:3001/images/backgrounds/market_2.jpeg",
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
  img: "http://localhost:3001/images/backgrounds/field_2.jpeg",
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
      "nextEvent": 26,
      "actionLabel": "play"
    },
    {
      "text": "Lay down and talk to it",
      "nextEvent": 26,
      "actionLabel": "talk"
    },
    {
      "text": "Poke it with a stick",
      "nextEvent": 26,
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
  img: "http://localhost:3001/images/backgrounds/rest.jpeg",
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
  img: "http://localhost:3001/images/backgrounds/wake.jpeg",
  dialogue: "You wake up and it's time to start the next day.",
  options: '[
    {
      "text": "Next",
      "nextEvent": 23
    }
  ]'
)

# event 29 - success event start
Event.create!(
  img: "http://localhost:3001/images/backgrounds/rest.jpeg",
  dialogue: "“...huh?”",
  petId: 1,
  options: '[
    {
      "text": "Next",
      "nextEvent": 30
    }
  ]'
)

# event 30
Event.create!(
  img: "http://localhost:3001/images/backgrounds/rest.jpeg",
  dialogue: "“where are you headed, little guy?”",
  petId: 1,
  options: '[
    {
      "text": "Head back home",
      "nextEvent": 31
    }
  ]'
)

# event 31 - back home with monster
Event.create!(
  img: "http://localhost:3001/images/backgrounds/home.jpeg",
  dialogue: "They follow you home and look around curiously.",
  petId: 1,
  options: '[
    {
      "text": "Sit in chair",
      "nextEvent": 32
    }
  ]'
)

# event 32 - success event end wolf
Event.create!(
  img: "http://localhost:3001/images/backgrounds/home.jpeg",
  dialogue: "As you sit in the chair, the wolf barks and curls up at your feet.",
  petId: 1,
  options: '[
    {
      "text": "Next",
      "nextEvent": 35
    }
  ]'
)

# event 33 - success event end cat
Event.create!(
  img: "http://localhost:3001/images/backgrounds/home.jpeg",
  dialogue: "As you sit in the chair, the cat hops on your lap and falls asleep.",
  petId: 2,
  options: '[
    {
      "text": "Next",
      "nextEvent": 35
    }
  ]'
)

# event 34 - success event end slime
Event.create!(
  img: "http://localhost:3001/images/backgrounds/home.jpeg",
  dialogue: "As you sit in the chair, the slime hops in the sink and settles in.",
  petId: 3,
  options: '[
    {
      "text": "Next",
      "nextEvent": 35
    }
  ]'
)

# event 35 - success event ending
Event.create!(
  img: "http://localhost:3001/images/backgrounds/home.jpeg",
  dialogue: "You feel a smile creep across your face.",
  petId: 1,
  options: '[
    {
      "text": "“I guess you can stay.”",
      "nextEvent": 36
    }
  ]'
)

# event 36 - success event ending with wife
Event.create!(
  img: "http://localhost:3001/images/backgrounds/wifu.jpeg",
  dialogue: "“Lucia, looks like we just got adopted.”",
  options: '[
    {
      "text": "Next",
      "nextEvent": 37
    }
  ]'
)

# event 37 - Outro event
Event.create!(
  img: "http://localhost:3001/images/backgrounds/end.jpeg",
  dialogue: "The end.",
  options: '[
    {
      "text": "End",
      "nextEvent": 38
    }
  ]'
)

# event 38 - Restart event page 
Event.create!(
  img: "http://localhost:3001/images/backgrounds/end.jpeg",
  dialogue: "Restart?",
  options: '[
    {
      "text": "Restart",
      "nextEvent": 1
    }
  ]'
)
