import React from 'react';
import Team from './Team/Team';

// Styles
import useStyles from './styles';

function Form() {
    const classes = useStyles();
    return (
        <>
            <h1>TEAMS</h1>
            <Team />
            <Team />
        </>
    )
}

export default Form
