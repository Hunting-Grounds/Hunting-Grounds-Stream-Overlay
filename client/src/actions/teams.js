import { FETCH_ALL, CREATE, UPDATE, DELETE, ADDSCORE, SUBSCORE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getTeams = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTeams();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTeam = (team) => async (dispatch) => {
  try {
    const { data } = await api.createTeam(team);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTeam = (id, team) => async (dispatch) => {
  try {
    const { data } = await api.updateTeam(id, team);

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

export const deleteTeam = (id) => async (dispatch) => {
  try {
    await api.deleteTeam(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
