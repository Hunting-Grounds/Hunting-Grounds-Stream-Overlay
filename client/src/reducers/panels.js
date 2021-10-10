import { FETCH_ALL, CREATE, UPDATE, DELETE, ADDSCORE, SUBSCORE } from '../constants/actionTypes';

export default (panels = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case ADDSCORE:
      return panels.map((panel) => (panel._id === action.payload._id ? action.payload : panel));
    case SUBSCORE:
      return panels.map((panel) => (panel._id === action.payload._id ? action.payload : panel));
    case CREATE:
      return [...panels, action.payload];
    case UPDATE:
      return panels.map((panel) => (panel._id === action.payload._id ? action.payload : panel));
    case DELETE:
      return panels.filter((panel) => panel._id !== action.payload);
    default:
      return panels;
  }
};

