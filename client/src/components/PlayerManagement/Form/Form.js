import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPlayer } from '../../../actions/players';

const Form = ({ currentId, setCurrentId }) => {
  const [playerData, setPlayerData] = useState({ name: '', kd: '', hs: '', favops: '', selectedFile: '' });
  const player = useSelector((state) => (currentId ? state.players.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (player) setPlayerData(player);
  }, [player]);

  const clear = () => {
    setCurrentId(0);
    setPlayerData({ name: '', kd: '', hs: '', favops: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(playerData);
    dispatch(createPlayer(playerData));
    clear();
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${player.name}"` : 'Create a Player'}</Typography>
        <TextField name="name" variant="outlined" label="Name" fullWidth value={playerData.name} onChange={(e) => setPlayerData({ ...playerData, name: e.target.value })} />
        <TextField name="kd" variant="outlined" label="K/D Ratio" fullWidth value={playerData.kd} onChange={(e) => setPlayerData({ ...playerData, kd: e.target.value })} />
        <TextField name="hs" variant="outlined" label="Headshots" fullWidth value={playerData.hs} onChange={(e) => setPlayerData({ ...playerData, hs: e.target.value })} />
        <TextField name="favops" variant="outlined" label="Favorite Operators (coma separated)" fullWidth multiline rows={4} value={playerData.favops} onChange={(e) => setPlayerData({ ...playerData, favops: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPlayerData({ ...playerData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;