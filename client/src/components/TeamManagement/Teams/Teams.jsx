import React from 'react'
import Team from './Team/Team'
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';


const Teams = ({ currentId, setCurrentId }) => {
    const teams = useSelector((state) => state.teams);

    return (
        !teams.length ? <CircularProgress /> : (
            <Grid container alignItems="stretch" spacing={2}>
              {teams.map((team) => (
                <Grid key={team._id} item xs={12} sm={4} md={3}>
                  <Team currentId={currentId} team={team} setCurrentId={setCurrentId} />
                </Grid>
              ))}
            </Grid>
          )
    )
}

export default Teams;
