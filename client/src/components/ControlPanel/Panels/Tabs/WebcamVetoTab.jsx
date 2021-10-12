import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { updatePanel } from '../../../../actions/panels';

const WebcamVetoTab = ({ currentId, setCurrentId }) => {
  const [panelData, setPanelData] = useState({ webcamCasterName1: '', webcamCasterName2: '', lowerThirdTeamName1: '', lowerThirdTeamLogo1: '', 
  lowerThirdTeamColor1: '', lowerThirdTeamName2: '', lowerThirdTeamLogo2: '', lowerThirdTeamColor2: '',
  vetoMap1Icon: '', vetoMap1Logo: '', vetoMap1Status: '', 
  vetoMap2Icon: '', vetoMap2Logo: '', vetoMap2Status: '',
  vetoMap3Icon: '', vetoMap3Logo: '', vetoMap3Status: '',
  vetoMap4Icon: '', vetoMap4Logo: '', vetoMap4Status: '',
  vetoMap5Icon: '', vetoMap5Logo: '', vetoMap5Status: '',
  vetoMap6Icon: '', vetoMap6Logo: '', vetoMap6Status: ''});
  const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (panel) setPanelData(panel);
  }, [panel]);

  const clear = () => {
    setCurrentId(0);
    setPanelData({ webcamCasterName1: '', webcamCasterName2: '', lowerThirdTeamName1: '', lowerThirdTeamLogo1: '', 
    lowerThirdTeamColor1: '', lowerThirdTeamName2: '', lowerThirdTeamLogo2: '', lowerThirdTeamColor2: '',
    vetoMap1Icon: '', vetoMap1Logo: '', vetoMap1Status: '', 
    vetoMap2Icon: '', vetoMap2Logo: '', vetoMap2Status: '',
    vetoMap3Icon: '', vetoMap3Logo: '', vetoMap3Status: '',
    vetoMap4Icon: '', vetoMap4Logo: '', vetoMap4Status: '',
    vetoMap5Icon: '', vetoMap5Logo: '', vetoMap5Status: '',
    vetoMap6Icon: '', vetoMap6Logo: '', vetoMap6Status: ''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(panelData);
    dispatch(updatePanel(panelData._id, panelData));
    clear();
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${panelData._id}"` : 'Editing Webcam & Lower Third'}</Typography>
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

        <div className={classes.fileInput}>Map 1 Icon <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, lowerThirdTeamLogo1: base64 })} /></div>
        <div className={classes.fileInput}>Team 1 Logo <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, lowerThirdTeamLogo1: base64 })} /></div>
        <TextField name="vetoMap1Status" variant="outlined" label="Map 1 Status" fullWidth value={panelData.vetoMap1Status} onChange={(e) => setPanelData({ ...panelData, vetoMap1Status: e.target.value })} />

        <div className={classes.fileInput}>Map 2 Icon <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, lowerThirdTeamLogo2: base64 })} /></div>
        <div className={classes.fileInput}>Team 2 Logo <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, lowerThirdTeamLogo2: base64 })} /></div>
        <TextField name="vetoMap2Status" variant="outlined" label="Map 2 Status" fullWidth value={panelData.vetoMap2Status} onChange={(e) => setPanelData({ ...panelData, vetoMap2Status: e.target.value })} />

        <div className={classes.fileInput}>Map 3 Icon <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, lowerThirdTeamLogo3: base64 })} /></div>
        <div className={classes.fileInput}>Team 3 Logo <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, lowerThirdTeamLogo3: base64 })} /></div>
        <TextField name="vetoMap3Status" variant="outlined" label="Map 3 Status" fullWidth value={panelData.vetoMap3Status} onChange={(e) => setPanelData({ ...panelData, vetoMap3Status: e.target.value })} />

        <div className={classes.fileInput}>Map 4 Icon <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, lowerThirdTeamLogo4: base64 })} /></div>
        <div className={classes.fileInput}>Team 4 Logo <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, lowerThirdTeamLogo4: base64 })} /></div>
        <TextField name="vetoMap4Status" variant="outlined" label="Map 4 Status" fullWidth value={panelData.vetoMap4Status} onChange={(e) => setPanelData({ ...panelData, vetoMap4Status: e.target.value })} />

        <div className={classes.fileInput}>Map 5 Icon <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, lowerThirdTeamLogo5: base64 })} /></div>
        <div className={classes.fileInput}>Team 5 Logo <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, lowerThirdTeamLogo5: base64 })} /></div>
        <TextField name="vetoMap5Status" variant="outlined" label="Map 5 Status" fullWidth value={panelData.vetoMap5Status} onChange={(e) => setPanelData({ ...panelData, vetoMap5Status: e.target.value })} />

        <div className={classes.fileInput}>Map 6 Icon <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, lowerThirdTeamLogo6: base64 })} /></div>
        <div className={classes.fileInput}>Team 6 Logo <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, lowerThirdTeamLogo6: base64 })} /></div>
        <TextField name="vetoMap6Status" variant="outlined" label="Map 6 Status" fullWidth value={panelData.vetoMap6Status} onChange={(e) => setPanelData({ ...panelData, vetoMap6Status: e.target.value })} />

        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default WebcamVetoTab;