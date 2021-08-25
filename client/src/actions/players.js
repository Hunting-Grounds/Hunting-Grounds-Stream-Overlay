import { FETCH_ALL, CREATE, UPDATE, DELETE, ADDSCORE, SUBSCORE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPlayers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPlayers();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPlayer = (player) => async (dispatch) => {
  try {
    const { data } = await api.createPlayer(player);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePlayer = (id, player) => async (dispatch) => {
  try {
    const { data } = await api.updatePlayer(id, player);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addScore = (id) => async (dispatch) => {
  try {
    const { data } = await api.addScore(id);

    dispatch({ type: ADDSCORE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const subScore = (id) => async (dispatch) => {
  try {
    const { data } = await api.subScore(id);

    dispatch({ type: SUBSCORE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePlayer = (id) => async (dispatch) => {
  try {
    await api.deletePlayer(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
