import axios from "axios";
import { ACTIONS } from "./reducer";

export function getBySpecies(species, array) {
  console.log(species, array)
  return array.find((pet) => pet.species === species);
}

export function getById(id, array) {
  return array.find((item) => item.id === id);
}

function getPetsByGameId(gameId) {
  const petsArr = []
  
  for (let i=0; i<3; i++) {
    const petId = ((gameId * 3) + i ) - 2;
    petsArr.push(petId);
  }

  console.log(petsArr)
  
  return petsArr;
};

export const createGame = (input, dispatch) => {
  console.log(input)

  const fetchEventsData = axios.get("/events.json")
  .then((response) => response.data)
  .then((data) => {
    dispatch({ type: ACTIONS.SET_EVENT_DATA, value: data })
    return data;
  })
  .catch((error) => {console.error(error)})

  const fetchGameData = axios.post("/games.json", { game: {user: input} })
  .then((response) => response.data)
  .then((data) => {
    dispatch({ type: ACTIONS.SET_GAME_DATA, value: data })
    return data.id;
  })

  const fetchPetsData = (arr) => {
    axios.get("/pets.json")
      .then((response) => response.data)
      .then((data) => {
        return data.filter((pet) => arr.includes(pet.id))
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PETS_DATA, value: data })
      })
      .catch((error) => {console.error(error)})
  }

  const allPromise = Promise.all([fetchEventsData, fetchGameData])
  console.log(allPromise)
  
  allPromise.then((data) => {
    console.log(data)
    return getPetsByGameId(data[1])
    })
    .then(arr => fetchPetsData(arr))
  }

  /////

export const adoptedPet = (pets) => {
  const adoptedPet = pets.find((pet) => pet.mood >= 15);
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
