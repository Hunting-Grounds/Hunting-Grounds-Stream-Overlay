import axios from 'axios';
import axiosConfig from '../helpers/axiosConfig.js'

const url = 'http://195.22.157.230/:5000/teams';
const url2 = 'http://195.22.157.230/:5000/players';
const url3 = 'http://195.22.157.230/:5000/panels';
const url4 = 'http://195.22.157.230/:5000/api/'


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


// Control Panel Management
export const fetchPanels = () => axios.get(url3);
export const createPanel = (newPanel) => {
    axios.post(url3, newPanel)
    console.log(newPanel)
};
export const updatePanel = (id, updatedPanel) => axios.patch(`${url3}/${id}`, updatedPanel);
export const deletePanel = (id) => axios.delete(`${url3}/${id}`);


// Image Upload Handling
export const singleFileUpload = async (data, options, fileParent) => {
    console.log(data, options, fileParent)
    try {
        await axios.post(url4 + "upload", data, options, fileParent);
    } catch (error) {
        throw error;
    }
}
export const getSingleFiles = async () => {
    try {
            const {data} = await axios.get(url4);
            return data;
    } catch (error) {
        throw error;
    }
}