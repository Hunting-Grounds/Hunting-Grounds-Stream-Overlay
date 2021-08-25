import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { updateTeam } from '../../../../actions/teams';

const Form = ({ currentId, setCurrentId }) => {
  const [teamData, setTeamData] = useState({ fullName: '', displayName: '', tag: '', themeColour: '', players: '', points: '', records: '', selectedFile: '' });
  const team = useSelector((state) => (currentId ? state.teams.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (team) setTeamData(team);
  }, [team]);

  const clear = () => {
    setCurrentId(0);
    setTeamData({ fullName: '', displayName: '', tag: '', themeColour: '', players: '', points: '', records: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateTeam(currentId, teamData));
    clear();
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${team.title}"` : 'Create a Team'}</Typography>
        <TextField name="fullName" variant="outlined" label="Full Name" fullWidth value={teamData.fullName} onChange={(e) => setTeamData({ ...teamData, fullName: e.target.value })} />
        <TextField name="displayName" variant="outlined" label="Display Name" fullWidth value={teamData.displayName} onChange={(e) => setTeamData({ ...teamData, displayName: e.target.value })} />
        <TextField name="tag" variant="outlined" label="Tag" fullWidth value={teamData.tag} onChange={(e) => setTeamData({ ...teamData, tag: e.target.value })} />
        <TextField name="themeColour" variant="outlined" label="Theme Colour (Hex)" fullWidth value={teamData.themeColour} onChange={(e) => setTeamData({ ...teamData, themeColour: e.target.value })} />
        <TextField name="players" variant="outlined" label="Players (coma separated)" fullWidth multiline rows={4} value={teamData.players} onChange={(e) => setTeamData({ ...teamData, players: e.target.value.split(',') })} />
        <TextField name="points" variant="outlined" label="Points" fullWidth value={teamData.points} onChange={(e) => setTeamData({ ...teamData, points: e.target.value })} />
        <TextField name="record" variant="outlined" label="Record" fullWidth value={teamData.records} onChange={(e) => setTeamData({ ...teamData, records: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setTeamData({ ...teamData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;