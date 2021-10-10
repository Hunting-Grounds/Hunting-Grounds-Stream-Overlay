import { FETCH_ALL, CREATE, UPDATE, DELETE, ADDSCORE, SUBSCORE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPanels = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPanels();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPanel = (panel) => async (dispatch) => {
  try {
    const { data } = await api.createPanel(panel);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePanel = (id, panel) => async (dispatch) => {
  try {
    const { data } = await api.updatePanel(id, panel);

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

export const deletePanel = (id) => async (dispatch) => {
  try {
    await api.deletePanel(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
