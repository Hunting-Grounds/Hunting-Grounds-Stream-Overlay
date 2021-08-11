import React from 'react';
import { useSelector } from 'react-redux';

import Team from './Team/Team';

// Styles
import useStyles from './styles';

function Form() {
    const teams = useSelector((state) => state.teams);
    const classes = useStyles();

    console.log(teams);

    return (
        <>
            <h1>TEAMS</h1>
            <Team />
            <Team />
        </>
    )
}

export default Form
