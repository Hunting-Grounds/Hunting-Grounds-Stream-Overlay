import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPanel } from '../../../../actions/panels';

const WebcamLowerThirdTab = ({ currentId, setCurrentId }) => {
  //console.log(currentId);
  const [panelData, setPanelData] = useState({ webcamCasterName1: '', webcamCasterName2: '', 
  lowerThirdTitle: '', lowerThirdSubtitle: '', lowerThirdTeamName1: '', lowerThirdTeamLogo1: '', 
  lowerThirdTeamColor1: '', lowerThirdTeamName2: '', lowerThirdTeamLogo2: '', lowerThirdTeamColor2: '' });
  const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (panel) setPanelData(panel);
  }, [panel]);

  const clear = () => {
    setPanelData({ webcamCasterName1: '', webcamCasterName2: '', 
    lowerThirdTitle: '', lowerThirdSubtitle: '', lowerThirdTeamName1: '', lowerThirdTeamLogo1: '', 
    lowerThirdTeamColor1: '', lowerThirdTeamName2: '', lowerThirdTeamLogo2: '', lowerThirdTeamColor2: '' });
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
        <Typography variant="h6">{currentId ? `Editing "${panelData.webcamCasterName1}"` : 'Editing Webcam & Lower Third'}</Typography>
        <TextField name="webcamCasterName1" variant="outlined" label="Webcam Caster Name 1" fullWidth value={panelData.webcamCasterName1} onChange={(e) => setPanelData({ ...panelData, webcamCasterName1: e.target.value })} />
        <TextField name="webcamCasterName2" variant="outlined" label="Webcam Caster Name 2" fullWidth value={panelData.webcamCasterName2} onChange={(e) => setPanelData({ ...panelData, webcamCasterName2: e.target.value })} />
        <TextField name="lowerThirdTitle" variant="outlined" label="Lower Third Title" fullWidth value={panelData.lowerThirdTitle} onChange={(e) => setPanelData({ ...panelData, lowerThirdTitle: e.target.value })} />
        <TextField name="lowerThirdSubtitle" variant="outlined" label="Lower Third Subtitle" fullWidth value={panelData.lowerThirdSubtitle} onChange={(e) => setPanelData({ ...panelData, lowerThirdSubtitle: e.target.value })} />
        <TextField name="lowerThirdTeamName1" variant="outlined" label="Lower Third Team Name 1" fullWidth value={panelData.lowerThirdTeamName1} onChange={(e) => setPanelData({ ...panelData, lowerThirdTeamName1: e.target.value })} />
        <div className={classes.fileInput}>Lower Third Team Logo 1 <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, lowerThirdTeamLogo1: base64 })} /></div>
        <TextField name="lowerThirdTeamColor1" variant="outlined" label="Lower Third Team Color 1" fullWidth value={panelData.lowerThirdTeamColor1} onChange={(e) => setPanelData({ ...panelData, lowerThirdTeamColor1: e.target.value })} />
        <TextField name="lowerThirdTeamName2" variant="outlined" label="Lower Third Team Name 2" fullWidth value={panelData.lowerThirdTeamName2} onChange={(e) => setPanelData({ ...panelData, lowerThirdTeamName2: e.target.value })} />
        <div className={classes.fileInput}>Lower Third Team Logo 2 <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, lowerThirdTeamLogo2: base64 })} /></div>
        <TextField name="lowerThirdTeamColor2" variant="outlined" label="Lower Third Team Color 2" fullWidth value={panelData.lowerThirdTeamColor2} onChange={(e) => setPanelData({ ...panelData, lowerThirdTeamColor2: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default WebcamLowerThirdTab;