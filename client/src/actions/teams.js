import * as api from "../api";

// Action Creators
export const getTeams = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTeams();
        
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const createTeam = (team) => async (dispatch) => {
    try {
        const { data } = await api.createTeam(team);
        
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error)
    }
}