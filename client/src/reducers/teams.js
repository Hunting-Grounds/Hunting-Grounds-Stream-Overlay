export default (teams = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return teams;
        case 'CREATE':
            return teams;
        default:
            return teams;
    }
}