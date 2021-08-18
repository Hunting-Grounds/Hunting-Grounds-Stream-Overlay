import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Team from './Team/Team';

// Styles
import useStyles from './styles';

function Form() {
    const teams = useSelector((state) => state.teams);
    const classes = useStyles();

    console.log(teams);

    return (
        !teams.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {teams.map((team) => (
                    <Grid key={team._id} item xs={12} sm={6}>
                        <Team team={team} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Form
