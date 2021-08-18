import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Team from './Team/Team';

// Styles
import useStyles from './styles';

const Teams = ({ setCurrentId }) => {
    const teams = useSelector((state) => state.teams);
    const classes = useStyles();
  
    return (
      !teams.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {teams.map((team) => (
            <Grid key={team._id} item xs={12} sm={6} md={6}>
              <Team team={team} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )
    );
  };
  
  export default Teams;

export default Teams
