import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPanel } from '../../../../actions/panels';

const HUDTab = ({ currentId, setCurrentId }) => {
  const [panelData, setPanelData] = useState({ 
  hudLeftText: '', hudRightText: '', hudLeftOperatorIcon1: '',hudLeftOperatorIcon2: '', hudRightOperatorIcon1: '', 
  hudRightOperatorIcon2: '', hudLeftTeamLogo: '', hudRightTeamLogo: '' });
  const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (panel) setPanelData(panel);
  }, [panel]);

  const clear = () => {
    setCurrentId(0);
    setPanelData({ hudLeftText: '', hudRightText: '', hudLeftOperatorIcon1: '',hudLeftOperatorIcon2: '', hudRightOperatorIcon1: '', 
    hudRightOperatorIcon2: '', hudLeftTeamLogo: '', hudRightTeamLogo: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(panelData);
    dispatch(createPanel(panelData));
    clear();
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${panel.name}"` : 'Create a Panel'}</Typography>
        <TextField name="name" variant="outlined" label="Name" fullWidth value={panelData.name} onChange={(e) => setPanelData({ ...panelData, name: e.target.value })} />
        <TextField name="rating" variant="outlined" label="Rating" fullWidth value={panelData.rating} onChange={(e) => setPanelData({ ...panelData, rating: e.target.value })} />
        <TextField name="kd" variant="outlined" label="K/D Ratio" fullWidth value={panelData.kd} onChange={(e) => setPanelData({ ...panelData, kd: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default HUDTab;