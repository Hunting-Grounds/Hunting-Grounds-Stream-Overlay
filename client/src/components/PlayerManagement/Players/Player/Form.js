import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { updatePlayer } from '../../../../actions/players';

const Form = ({ currentId, setCurrentId }) => {
  const [playerData, setPlayerData] = useState({ name: '', kd: '', entry: '', maps: '', kost: '', kpr: '', srv: '', clutchwins: '', plant: '', disable: '', hs: '', atk: '', def: '', selectedFile: '' });
  const player = useSelector((state) => (currentId ? state.players.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (player) setPlayerData(player);
  }, [player]);

  const clear = () => {
    setCurrentId(0);
    setPlayerData({ name: '', kd: '', entry: '', maps: '', kost: '', kpr: '', srv: '', clutchwins: '', plant: '', disable: '', hs: '', atk: '', def: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updatePlayer(currentId, playerData));
    clear();
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${player.name}"` : 'Create a Player'}</Typography>
        <TextField name="name" variant="outlined" label="Name" fullWidth value={playerData.name} onChange={(e) => setPlayerData({ ...playerData, name: e.target.value })} />
        <TextField name="rating" variant="outlined" label="Rating" fullWidth value={playerData.rating} onChange={(e) => setPlayerData({ ...playerData, rating: e.target.value })} />
        <TextField name="kd" variant="outlined" label="K/D Ratio" fullWidth value={playerData.kd} onChange={(e) => setPlayerData({ ...playerData, kd: e.target.value })} />
        <TextField name="entry" variant="outlined" label="Entry K/D" fullWidth value={playerData.entry} onChange={(e) => setPlayerData({ ...playerData, entry: e.target.value })} />
        <TextField name="maps" variant="outlined" label="Maps Won" fullWidth value={playerData.maps} onChange={(e) => setPlayerData({ ...playerData, maps: e.target.value })} />
        <TextField name="kost" variant="outlined" label="KOST" fullWidth value={playerData.kost} onChange={(e) => setPlayerData({ ...playerData, kost: e.target.value })} />
        <TextField name="kpr" variant="outlined" label="Kills Per Round" fullWidth value={playerData.kpr} onChange={(e) => setPlayerData({ ...playerData, kpr: e.target.value })} />
        <TextField name="srv" variant="outlined" label="Rounds Survived" fullWidth value={playerData.srv} onChange={(e) => setPlayerData({ ...playerData, srv: e.target.value })} />
        <TextField name="clutchwins" variant="outlined" label="1vX (Rounds Clutched)" fullWidth value={playerData.clutchwins} onChange={(e) => setPlayerData({ ...playerData, clutchwins: e.target.value })} />
        <TextField name="plant" variant="outlined" label="Plants" fullWidth value={playerData.plant} onChange={(e) => setPlayerData({ ...playerData, plant: e.target.value })} />
        <TextField name="disable" variant="outlined" label="Disable" fullWidth value={playerData.disable} onChange={(e) => setPlayerData({ ...playerData, disable: e.target.value })} />
        <TextField name="hs" variant="outlined" label="Headshot Percentage" fullWidth value={playerData.hs} onChange={(e) => setPlayerData({ ...playerData, hs: e.target.value })} />
        <TextField name="atk" variant="outlined" label="Attack Operator" fullWidth value={playerData.atk} onChange={(e) => setPlayerData({ ...playerData, atk: e.target.value })} />
        <TextField name="def" variant="outlined" label="Defence Operator" fullWidth value={playerData.def} onChange={(e) => setPlayerData({ ...playerData, def: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPlayerData({ ...playerData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;