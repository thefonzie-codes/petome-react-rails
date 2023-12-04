export const events = [
  {
    id: 1,
    dialogue: "You wake up in the morning and you feel rested. What do you want to do?",
    options: [
      {
        text: "Go for a walk",
        nextEvent: 2,
      },
      {
        text: "Play with your pets",
        nextEvent: 3,
        energy: -1,
      },
      {
        text: "Go back to sleep",
        nextEvent: 4,
      },
    ],
  },
  {
    id: 2,
    dialogue: "You go for a walk. What do you want to do?",
    options: [
      {
        text: "Play with your pets",
        nextEvent: 3,
        energy: -1,
      },
      {
        text: "Go back to sleep",
        nextEvent: 1,
        energy: 5,
      },
    ],
  },
  {
    id: 3,
    dialogue: "You play with your pets. What do you want to do?",
    options: [
      {
        text: "Go for a walk",
        nextEvent: 2,
        energy: -1,
      },
      {
        text: "Go back to sleep",
        nextEvent: 1,
        energy: 5,
      },
    ],
  }
];