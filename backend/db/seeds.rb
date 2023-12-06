# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

puts "Seeding database..."

Event.destroy_all

# Create events

# Event 1
Event.create!(
  img: "http://localhost:3001/images/backgrounds/wake.jpeg",
  dialogue: "You wake up to the sun filtering in from the skylight, early birds still singing their victory songs. 'Another day, more to do...' you take a moment to stare at the ceiling.",
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
  dialogue: "With a deep sigh, your body finds itself again. It feels like a dream ...the war is over, you're finally home.",
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
  dialogue: "But it's not the same without her. “... but you wouldn’t want me to keep sulking here, would you?”",
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
  dialogue: "“Yeah, definitely not. You'd have a lot to say... I guess you're right, it's time to work.”",
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
  dialogue: "“...I should probably drop yesterday's cord of wood into the town. The axe could use a sharpening too.”",
  options: '[
    {
      "text": "Head Out",
      "nextEvent": 6
    }
  ]'
)

# Event 6
Event.create!(
  img: "http://localhost:3001/images/backgrounds/forest_4.jpeg",
  dialogue: "As you walk the familiar path from your secret timber lot into town you hear rustling from a bush beside you.",
  options: '[
    {
      "text": "Next",
      "nextEvent": 7
    }
  ]'
)

# Event 7
Event.create!(
  img: "http://localhost:3001/images/backgrounds/forest_4.jpeg",
  dialogue: "“Hm. There's never much around here… wonder what that could be…”",
  options: '[
    {
      "text": "Probably just a tree sprite.",
      "nextEvent": 8
    },
    {
      "text": "I should really check that out.",
      "nextEvent": 8
    }
  ]'
)

# Event 8
Event.create!(
  img: "http://localhost:3001/images/backgrounds/forest_4.jpeg",
  dialogue: "You get close and a grey wolf pounces out of the bush with a low growl.",
  species: "Wolf",
  options: '[
    {
      "text": "Maybe he’s hungry?",
      "nextEvent": 9
    }
  ]'
)

# Event 9
Event.create!(
  img: "http://localhost:3001/images/backgrounds/forest_4.jpeg",
  dialogue: "You toss the beast a piece of your lunch. Without hesitating it eats, sniffs your hand, then leaves.",
  species: "Wolf",
  options: '[
    {
      "text": "Keep towing the wood",
      "nextEvent": 10
    }
  ]'
)

# Event 10
Event.create!(
  img: "http://localhost:3001/images/backgrounds/forest_4.jpeg",
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
  img: "http://localhost:3001/images/backgrounds/market_4.jpeg",
  dialogue: "You finish selling your firewood close to market when you catch a loud *BOOM* from a nearby shop.",
  options: '[
    {
      "text": "Turn the corner to see what happened",
      "nextEvent": 12
    }
  ]'
)

# Event 12
Event.create!(
  img: "http://localhost:3001/images/backgrounds/market_4.jpeg",
  dialogue: "“Egh... what are those magicians up to this time?”",
  options: '[
    { "text": "Get a little closer",
      "nextEvent": 13
    }
  ]'
)

# Event 13
Event.create!(
  img: "http://localhost:3001/images/backgrounds/market_4.jpeg",
  dialogue: "You lurk outside the perimeter of a gathering crowd as your left ankle is met with a soft nudge and a little *meow*.",
  species: "Cat",
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
  img: "http://localhost:3001/images/backgrounds/market_4.jpeg",
  dialogue: "The cat rubs its bum against your leg then daintily trots away.",
  species: "Cat",
  options: '[
    { "text": "Go drop your axe off at the smithy",
      "nextEvent": 15
    }
  ]'
)

# Event 15
Event.create!(
  img: "http://localhost:3001/images/backgrounds/market_4.jpeg",
  dialogue: "“Great. Wood’s been dropped, and the smith’s got my axe for a bit… might as well sit.”",
  options: '[
    { "text": "Go sit in the field",
      "nextEvent": 16
    }
  ]'
)

# Event 16
Event.create!(
  img: "http://localhost:3001/images/backgrounds/field_3.jpeg",
  dialogue: "You find a lonely patch of shade and close your eyes for all but a moment before you're shaken alert by a giant *SQUISH*",
  options: '[
    { "text": "“WHAT in the?...”",
      "nextEvent": 17
    }
  ]'
)

# Event 17
Event.create!(
  img: "http://localhost:3001/images/backgrounds/field_3.jpeg",
  dialogue: "Alarmed, you jump to your feet and look down to see a blobby slime. “Oh, uh, sorry bud...”",
  species: "Slime",
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
  img: "http://localhost:3001/images/backgrounds/field_3.jpeg",
  dialogue: "The slime stares at you, boops your foot, then gloops out a flower from its belly.",
  species: "Slime",
  options: '[
    { "text": "“...thanks?”",
      "nextEvent": 19
    }
  ]'
)

# Event 19
Event.create!(
  img: "http://localhost:3001/images/backgrounds/field_3.jpeg",
  dialogue: "Obviously content, the slime squishes away into a cropping.",
  options: '[
    { "text": "Grab your axe and head home",
      "nextEvent": 20
    }
  ]'
) 

# Event 20
Event.create!(
  img: "http://localhost:3001/images/backgrounds/home.jpeg",
  dialogue: "“What a strange day... lots of those monsters out and about now...”",
  options: '[
    { "text": "Go to sleep",
      "nextEvent": 21
    }
  ]'
)

# Event 21
Event.create!(
  img: "http://localhost:3001/images/backgrounds/dream_2.jpeg",
  dialogue: "“mhmmm...am I dreaming? Who... no... what?”",
  options: '[
    { "text": "Wake up",
      "nextEvent": 22
    }
  ]'
)

# Event 22
Event.create!(
  img: "http://localhost:3001/images/backgrounds/wake.jpeg",
  dialogue: "“Wha? Strange... Anyway.. A new day it is.”",
  options: '[
    { "text": "Head out",
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
    },
    { "text": "Go back to bed",
      "nextEvent": 27
    }
  ]'
)

# Event 24 - Wolf interaction event
Event.create!(
  img: "http://localhost:3001/images/backgrounds/forest_3.jpeg",
  dialogue: "You go to your timber site to chop some wood. Rustling from a familiar bush reveals the same wolf from before, Fang.",
  species: "Wolf",
  options: '[
    {
      "text": "Give him more jerky",
      "nextEvent": 24,
      "actionLabel": "treat"
    },
    {
      "text": "Throw a bone for him to fetch",
      "nextEvent": 24,
      "actionLabel": "play"
    },
    {
      "text": "Tell him about your day",
      "nextEvent": 24,
      "actionLabel": "talk"
    },
    {
      "text": "Risk it - pet his fluffy ears.",
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
  img: "http://localhost:3001/images/backgrounds/town_3.jpeg",
  dialogue: "You make your way into town. At the market you hear a familiar meow at your feet and find Noctis, the cat from before.",
  species: "Cat",
  options: '[
    {
      "text": "Give her a nibble of cheese",
      "nextEvent": 25,
      "actionLabel": "treat"
    },
    {
      "text": "Throw a piece of parchment for her to play with",
      "nextEvent": 25,
      "actionLabel": "play"
    },
    {
      "text": "Meow back at her",
      "nextEvent": 25,
      "actionLabel": "talk"
    },
    {
      "text": "Give her a belly rub",
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
  dialogue: "You go for a stroll in the field. At the bottom of a willow tree you meet the same slime from before, Wiggy.",
  species: "Slime",
  options: '[
    {
      "text": "Toss them some flowers",
      "nextEvent": 26,
      "actionLabel": "treat"
    },
    {
      "text": "Roll around with them",
      "nextEvent": 26,
      "actionLabel": "play"
    },
    {
      "text": "Lay down and talk to them",
      "nextEvent": 26,
      "actionLabel": "talk"
    },
    {
      "text": "Poke them with a stick",
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
  dialogue: "“... been a long day.”",
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
  dialogue: "You wake up; more sun, more birds. It's time to start another day.",
  options: '[
    {
      "text": "Head out",
      "nextEvent": 23
    }
  ]'
)

# event 29 - success event start
Event.create!(
  img: "http://localhost:3001/images/backgrounds/rest.jpeg",
  dialogue: "“...huh?”",
  species: "Wolf",
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
  dialogue: "“Hold on there, where are you headed to? Wait up!”",
  species: "Wolf",
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
  dialogue: "Your curious friend follows you home, entering comfortably as ever with a curious look around the room.",
  species: "Wolf",
  options: '[
    {
      "text": "Sit in your chair",
      "nextEvent": 32
    }
  ]'
)

# event 32 - success event end wolf
Event.create!(
  img: "http://localhost:3001/images/backgrounds/home.jpeg",
  dialogue: "As you sit down after a long week, Fang gives a shy quip and curls up at your feet.",
  species: "Wolf",
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
  dialogue: "As you sit down after a long week, Noctis gracefully hops onto your lap, tucks into a ball, and falls asleep.",
  species: "Cat",
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
  dialogue: "As you sit down after a long week, Wiggy promptly jumps into your sink and settles in.",
  species: "Slime",
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
  dialogue: "You discover a smile creeping across your face... it's been a while since you've had a friend around.",
  species: "Wolf",
  options: '[
    {
      "text": "“Alright, I guess you can stay.”",
      "nextEvent": 36
    }
  ]'
)

# event 36 - success event ending with wife
Event.create!(
  img: "http://localhost:3001/images/backgrounds/wifu.jpeg",
  dialogue: "“Lucia, it seems we just got adopted. You can rest easy now, my love.”",
  options: '[
    {
      "text": "Fini",
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
      "text": "End Game",
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
      "text": "Start a new game",
      "nextEvent": 1
    }
  ]'
)

