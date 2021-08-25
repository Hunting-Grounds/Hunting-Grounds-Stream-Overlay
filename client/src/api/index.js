import axios from 'axios';

const url = 'http://localhost:5000/teams';
const url2 = 'http://localhost:5000/players';

// Team Management
export const fetchTeams = () => axios.get(url);
export const createTeam = (newTeam) => {
    axios.post(url, newTeam)
    console.log(newTeam)
};
export const addScore = (id) => axios.patch(`${url}/${id}/addScore`);
export const subScore = (id) => axios.patch(`${url}/${id}/subScore`);
export const updateTeam = (id, updatedTeam) => axios.patch(`${url}/${id}`, updatedTeam);
export const deleteTeam = (id) => axios.delete(`${url}/${id}`);


// Player Management
export const fetchPlayers = () => axios.get(url2);
export const createPlayer = (newPlayer) => {
    axios.post(url2, newPlayer)
    console.log(newPlayer)
};
export const updatePlayer = (id, updatedPlayer) => axios.patch(`${url2}/${id}`, updatedPlayer);
export const deletePlayer = (id) => axios.delete(`${url2}/${id}`);