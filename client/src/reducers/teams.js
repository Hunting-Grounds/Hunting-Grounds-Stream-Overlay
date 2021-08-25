import { FETCH_ALL, CREATE, UPDATE, DELETE, ADDSCORE, SUBSCORE } from '../constants/actionTypes';

export default (teams = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case ADDSCORE:
      return teams.map((team) => (team._id === action.payload._id ? action.payload : team));
    case SUBSCORE:
      return teams.map((team) => (team._id === action.payload._id ? action.payload : team));
    case CREATE:
      return [...teams, action.payload];
    case UPDATE:
      return teams.map((team) => (team._id === action.payload._id ? action.payload : team));
    case DELETE:
      return teams.filter((team) => team._id !== action.payload);
    default:
      return teams;
  }
};

