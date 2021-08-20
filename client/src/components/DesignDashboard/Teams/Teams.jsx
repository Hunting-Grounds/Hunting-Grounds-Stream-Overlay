import React from 'react'
import Team from './Team/Team'
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';


const Teams = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid container alignItems="stretch" spacing={2}>
              {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={4} md={3}>
                  <Team post={post} setCurrentId={setCurrentId}/>
                </Grid>
              ))}
            </Grid>
          )
    )
}

export default Teams;
