import Team from "../components/Dashboard/Teams/Team/Team";

export default (teams = [], action) => {
    switch (action.type) {
        case 'UPDATE':
            return teams.map((team) => team._id == action.payload._id ? action.payload : team);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...teams, action.payload];
        default:
            return teams;
    }
}