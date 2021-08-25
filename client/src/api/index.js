import axios from 'axios';

const url = 'http://localhost:5000/teams';

export const fetchTeams = () => axios.get(url);
export const createTeam = (newTeam) => {
    axios.post(url, newTeam)
    console.log(newTeam)
};
export const addScore = (id) => axios.patch(`${url}/${id}/addScore`);
export const subScore = (id) => axios.patch(`${url}/${id}/subScore`);
export const updateTeam = (id, updatedTeam) => axios.patch(`${url}/${id}`, updatedTeam);
export const deleteTeam = (id) => axios.delete(`${url}/${id}`);
