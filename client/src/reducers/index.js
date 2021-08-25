import { combineReducers } from 'redux';

import teams from './teams';
import players from "./players"

export const reducers = combineReducers({ teams, players });
