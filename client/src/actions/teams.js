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