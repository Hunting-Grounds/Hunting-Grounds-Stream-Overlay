import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPanel } from '../../../actions/panels';

const Form = ({ currentId, setCurrentId }) => {
  const [panelData, setPanelData] = useState({ name: '', rating: '', kd: '', entry: '', maps: '', kost: '', kpr: '', srv: '', clutchwins: '', plant: '', disable: '', hs: '', atk: '', def: '', selectedFile: '' });
  const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (panel) setPanelData(panel);
  }, [panel]);

  const clear = () => {
    setCurrentId(0);
    setPanelData({ name: '', rating: '', kd: '', entry: '', maps: '', kost: '', kpr: '', srv: '', clutchwins: '', plant: '', disable: '', hs: '', atk: '', def: '', selectedFile: '' });
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
        <TextField name="entry" variant="outlined" label="Entry K/D" fullWidth value={panelData.entry} onChange={(e) => setPanelData({ ...panelData, entry: e.target.value })} />
        <TextField name="maps" variant="outlined" label="Maps Won" fullWidth value={panelData.maps} onChange={(e) => setPanelData({ ...panelData, maps: e.target.value })} />
        <TextField name="kost" variant="outlined" label="KOST" fullWidth value={panelData.kost} onChange={(e) => setPanelData({ ...panelData, kost: e.target.value })} />
        <TextField name="kpr" variant="outlined" label="Kills Per Round" fullWidth value={panelData.kpr} onChange={(e) => setPanelData({ ...panelData, kpr: e.target.value })} />
        <TextField name="srv" variant="outlined" label="Rounds Survived" fullWidth value={panelData.srv} onChange={(e) => setPanelData({ ...panelData, srv: e.target.value })} />
        <TextField name="clutchwins" variant="outlined" label="1vX (Rounds Clutched)" fullWidth value={panelData.clutchwins} onChange={(e) => setPanelData({ ...panelData, clutchwins: e.target.value })} />
        <TextField name="plant" variant="outlined" label="Plants" fullWidth value={panelData.plant} onChange={(e) => setPanelData({ ...panelData, plant: e.target.value })} />
        <TextField name="disable" variant="outlined" label="Disable" fullWidth value={panelData.disable} onChange={(e) => setPanelData({ ...panelData, disable: e.target.value })} />
        <TextField name="hs" variant="outlined" label="Headshot Percentage" fullWidth value={panelData.hs} onChange={(e) => setPanelData({ ...panelData, hs: e.target.value })} />
        <TextField name="atk" variant="outlined" label="Attack Operator" fullWidth value={panelData.atk} onChange={(e) => setPanelData({ ...panelData, atk: e.target.value })} />
        <TextField name="def" variant="outlined" label="Defence Operator" fullWidth value={panelData.def} onChange={(e) => setPanelData({ ...panelData, def: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;