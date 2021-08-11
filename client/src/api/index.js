import axios from 'axios';

const url = 'http://localhost:5000/teams';

export const fetchTeams = () => axios.get(url);