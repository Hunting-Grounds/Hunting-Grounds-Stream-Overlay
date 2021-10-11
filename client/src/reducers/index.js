import { combineReducers } from 'redux';

import teams from './teams';
import players from "./players"
import panels from "./panels"

export const reducers = combineReducers({ teams, players, panels });
