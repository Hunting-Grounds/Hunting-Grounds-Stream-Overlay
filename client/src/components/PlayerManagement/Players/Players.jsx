import React from 'react'
import Player from './Player/Player'
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';


const Players = ({ currentId, setCurrentId }) => {
    const players = useSelector((state) => state.players);

    return (
        !players.length ? <CircularProgress /> : (
            <Grid container alignItems="stretch" spacing={2}>
              {players.map((player) => (
                <Grid key={player._id} item xs={12} sm={4} md={3}>
                  <Player currentId={currentId} player={player} setCurrentId={setCurrentId} />
                </Grid>
              ))}
            </Grid>
          )
    )
}

export default Players;
