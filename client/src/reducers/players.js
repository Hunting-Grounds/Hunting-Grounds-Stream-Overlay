import { FETCH_ALL, CREATE, UPDATE, DELETE, ADDSCORE, SUBSCORE } from '../constants/actionTypes';

export default (players = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case ADDSCORE:
      return players.map((player) => (player._id === action.payload._id ? action.payload : player));
    case SUBSCORE:
      return players.map((player) => (player._id === action.payload._id ? action.payload : player));
    case CREATE:
      return [...players, action.payload];
    case UPDATE:
      return players.map((player) => (player._id === action.payload._id ? action.payload : player));
    case DELETE:
      return players.filter((player) => player._id !== action.payload);
    default:
      return players;
  }
};

