import axios from "axios";
import { ACTIONS } from "./reducer";

export function getBySpecies(species, array) {
  return array.find((pet) => pet.species === species);
}

export function getById(id, array) {
  return array.find((item) => item.id === id);
}

export const createGame = (input, dispatch) => {
  const fetchEventsData = axios
    .get("/events.json")
    .then((response) => response.data)
    .then((data) => {
      dispatch({ type: ACTIONS.SET_EVENT_DATA, value: data });
      return data;
    })
    .catch((error) => {
      console.error(error);
    });

  const fetchGameData = axios
    .post("/games.json", { game: { user: input } })
    .then((response) => response.data)
    .then((data) => {
      dispatch({ type: ACTIONS.SET_GAME_DATA, value: data });
      dispatch({ type: ACTIONS.SET_DAY_ACTIONS, value: [""] });
      dispatch({ type: ACTIONS.SET_IS_ENTERING, value: true });
      dispatch({ type: ACTIONS.SET_IS_REACTING, value: false });
      dispatch({ type: ACTIONS.SET_LAST_ACTION, value: null });
      return data.id;
    });

  // helper that creates Pet data using game_id and passes game_id to FetchPetsData
  const createPetData = (gameId) => {
    const petsData = [
      {
        species: "Wolf",
        name: "Fang",
        mood: 5,
        treat: 1,
        play: 2,
        talk: 0,
        to_pet: -1,
        pet_happy: "http://localhost:3001/images/sprites/wolf_happy.png",
        pet_sad: "http://localhost:3001/images/sprites/wolf_sad.png",
        pet_neutral: "http://localhost:3001/images/sprites/wolf_neutral.png",
        game_id: gameId,
      },
      {
        species: "Cat",
        name: "Noctis",
        mood: 5,
        treat: 2,
        play: -1,
        talk: 1,
        to_pet: 0,
        pet_happy: "http://localhost:3001/images/sprites/cat_happy.png",
        pet_sad: "http://localhost:3001/images/sprites/cat_sad.png",
        pet_neutral: "http://localhost:3001/images/sprites/cat_neutral.png",
        game_id: gameId,
      },
      {
        species: "Slime",
        name: "Wiggy",
        mood: 5,
        treat: 1,
        play: 2,
        talk: 1,
        to_pet: 1,
        pet_happy: "http://localhost:3001/images/sprites/slime_happy.png",
        pet_sad: "http://localhost:3001/images/sprites/slime_neutral.png",
        pet_neutral: "http://localhost:3001/images/sprites/slime_neutral.png",
        game_id: gameId,
      },
    ];

    // Create an array of promises for each pet
    const petRequests = petsData.map((pet) => {
      return axios.post("/pets.json", { pet });
    });

  // Create all pets and return gameId
  return axios
    .all(petRequests)
    .then(
      axios.spread((...responses) => {
        responses.forEach((response) => {
          console.log("Pet created:", response.data);
        });
        return gameId;
      })
    )
    .catch((error) => {
      console.error("Error creating pets:", error);
    });
};

  // helper that fetches and sets Pet data using gameId
  const fetchPetsData = (gameId) => {
    axios
      .get("/pets.json")
      .then((response) => response.data)
      .then((data) => {
        return data.filter((pet) => pet.game_id === gameId);
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PETS_DATA, value: data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // helper that creates a promise for both fetches
  const allPromise = Promise.all([fetchEventsData, fetchGameData]);

  // After game and event data is set, this helper creates Pet data using game_id and passes game_id to FetchPetsData
  allPromise
    .then((data) => {
      return createPetData(data[1]);
    })
    .then((data) => {
      fetchPetsData(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const adoptedPet = (pets) => {
  const adoptedPet = pets.find((pet) => pet.mood >= 16);
  return adoptedPet;
};

export const showReaction = (actionValue) => {
  if (actionValue === 0) {
    return "😑";
  }
  if (actionValue === 1) {
    return "😄";
  }
  if (actionValue === 2) {
    return "💓";
  }
  if (actionValue === -1) {
    return "💢";
  }
  if (actionValue === null) {
    return "";
  }
};

export const eventTransition = (dispatch, eventValue, timeout) => {
  return setTimeout(() => {
    dispatch({ type: ACTIONS.NEXT_EVENT, value: eventValue });
  }, timeout);
};
