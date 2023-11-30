import axios from "axios";
import { ACTIONS } from "./reducer";

export function getById(id, array) {
  return array.find((item) => item.id === id);
}

export const fetchData = async (dispatch) => {
  try {
    const gamesResponse = await axios.get("/games/1.json");
    const eventsResponse = await axios.get("/events.json");
    const petsResponse = await axios.get("/pets.json");

    dispatch({ type: ACTIONS.SET_GAME_DATA, value: gamesResponse.data });
    dispatch({ type: ACTIONS.SET_EVENT_DATA, value: eventsResponse.data });
    dispatch({ type: ACTIONS.SET_PETS_DATA, value: petsResponse.data });
  } catch (err) {
    console.error(err);
  }
}

export const createGame = (input) => {
  const obj = { game :{
    user: input
  }}

  const JSONobj = JSON.stringify(obj);

  axios.post("/games.json", {
    JSONobj
  })
  .then((response) => console.log(response))
  .catch((error) => {console.error(error)})
}

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
