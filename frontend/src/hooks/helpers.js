import axios from "axios";
import { ACTIONS } from "./reducer";
import { petsData } from "../data/pets";

export function getBySpecies(species, array) {
  return array.find((pet) => pet.species === species);
}

export function getById(id, array) {
  return array.find((item) => item.id === id);
}

function getPetsByGameId(gameId) {
  const petsArr = [];

  for (let i = 0; i < 3; i++) {
    const petId = gameId * 3 + i - 2;
    petsArr.push(petId);
  }

  return petsArr;
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
      dispatch({
        type: ACTIONS.SET_GAME_STATE,
        value: { key: "dayActions", value: [""] },
      });
      dispatch({
        type: ACTIONS.SET_GAME_STATE,
        value: { key: "isEntering", value: true },
      });
      dispatch({
        type: ACTIONS.SET_GAME_STATE,
        value: { key: "isReacting", value: false },
      });
      dispatch({
        type: ACTIONS.SET_GAME_STATE,
        value: { key: "lastAction", value: null },
      });
      return data.id;
    });

  const petRequests = petsData.map((pet) => {
    return axios.post("/pets.json", { pet });
  });

  axios
    .all(petRequests)
    .then(
      axios.spread((...responses) => {
        // Handle responses here
        responses.forEach((response) => {
          // Handle each response
          console.log("Pet created:", response.data);
        });
      })
    )
    .catch((error) => {
      // Handle errors
      console.error("Error creating pets:", error);
    });

  const fetchPetsData = (arr) => {
    axios
      .get("/pets.json")
      .then((response) => response.data)
      .then((data) => {
        return data.filter((pet) => arr.includes(pet.id));
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PETS_DATA, value: data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const allPromise = Promise.all([fetchEventsData, fetchGameData]);

  allPromise
    .then((data) => {
      return getPetsByGameId(data[1]);
    })
    .then((arr) => fetchPetsData(arr));
};

export const adoptedPet = (pets) => {
  const adoptedPet = pets.find((pet) => pet.mood >= 16);
  return adoptedPet;
};

export const showReaction = (actionValue) => {
  switch (actionValue) {
    case 0:
      return "😑";
    case 1:
      return "😄";
    case 2:
      return "💓";
    case -1:
      return "💢";
    case null:
      return "";
    default:
      return "";
  }
};

export const dispatchTimeout = (dispatch, type, value, timeout) => {
  return setTimeout(() => {
    dispatch({ type: type, value: value });
  }, timeout);
};

// export const fadeIn = (state, stateSetter, timeout) => {
//   return setTimeout(() => {
//     stateSetter((state)=(!state));
//   }, timeout);
// }

export const applyDispatch = (dispatch, type, value) => {
  dispatch({ type: type, value: value });
};

// fade in and stay on screen
export const fadeIn = (dispatch) => {
  applyDispatch(dispatch, ACTIONS.SET_GAME_STATE, {
    key: "isEntering",
    value: true,
  });
  dispatchTimeout(
    dispatch,
    ACTIONS.SET_GAME_STATE,
    {
      key: "isEntering",
      value: false,
    },
    700
  );
};

// pet reaction to events
export const react = (dispatch) => {
  applyDispatch(dispatch, ACTIONS.SET_GAME_STATE, {
    key: "isReacting",
    value: true,
  });
  dispatchTimeout(
    dispatch,
    ACTIONS.SET_GAME_STATE,
    {
      key: "isReacting",
      value: false,
    },
    1000
  );
};
