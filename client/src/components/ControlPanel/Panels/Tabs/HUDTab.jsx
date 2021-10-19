import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { updatePanel } from '../../../../actions/panels';

import FileUploadScreen from './Components/FileUploadScreen';
import FileCard from './Components/FileCard';
import { getSingleFiles } from '../../../../api/index.js';

const HUDTab = ({ currentId, setCurrentId }) => {

  /////// IMAGE STUFF ////////

  const [singleFiles, setSingleFiles] = useState([]);

  const getSingleFileslist = async () => {
    try {
      const fileslist = await getSingleFiles();
      setSingleFiles(fileslist);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSingleFileslist();
  }, []);

  ///////////////////////////

  const [panelData, setPanelData] = useState({
    hudLeftText: '', hudRightText: '', hudLeftOperatorIcon1: '', hudLeftOperatorIcon2: '', hudRightOperatorIcon1: '',
    hudRightOperatorIcon2: '', hudLeftTeamLogo: '', hudRightTeamLogo: ''
  });
  const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (panel) setPanelData(panel);
  }, [panel]);

  const clear = () => {
    setCurrentId(0);
    setPanelData({
      hudLeftText: '', hudRightText: '', hudLeftOperatorIcon1: '', hudLeftOperatorIcon2: '', hudRightOperatorIcon1: '',
      hudRightOperatorIcon2: '', hudLeftTeamLogo: '', hudRightTeamLogo: ''
    });
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
        <Typography variant="h6">Editing HUD</Typography>

        <TextField name="hudLeftText" variant="outlined" label="HUD Left Text" fullWidth value={panelData.hudLeftText} onChange={(e) => setPanelData({ ...panelData, hudLeftText: e.target.value })} />
        <TextField name="hudRightText" variant="outlined" label="HUD Right Text" fullWidth value={panelData.hudRightText} onChange={(e) => setPanelData({ ...panelData, hudRightText: e.target.value })} />

        <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="hudLeftOperatorIcon1" fieldName={"Left Operator Icon 1"}/>
        {singleFiles.filter(file => file.fileParent === "hudLeftOperatorIcon1").map((file, index) =>
          <FileCard getsingle={() => getSingleFileslist()} file={file} />
        )}

        <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="hudLeftOperatorIcon2" fieldName={"Left Operator Icon 2"}/>
        {singleFiles.filter(file => file.fileParent === "hudLeftOperatorIcon2").map((file, index) =>
          <FileCard getsingle={() => getSingleFileslist()} file={file} />
        )}

        <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="hudRightOperatorIcon1" fieldName={"Right Operator Icon 1"}/>
        {singleFiles.filter(file => file.fileParent === "hudRightOperatorIcon1").map((file, index) =>
          <FileCard getsingle={() => getSingleFileslist()} file={file} />
        )}

        <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="hudRightOperatorIcon2" fieldName={"Right Operator Icon 2"}/>
        {singleFiles.filter(file => file.fileParent === "hudRightOperatorIcon2").map((file, index) =>
          <FileCard getsingle={() => getSingleFileslist()} file={file} />
        )}

        <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="hudLeftTeamLogo" fieldName={"Left Team Logo"}/>
        {singleFiles.filter(file => file.fileParent === "hudLeftTeamLogo").map((file, index) =>
          <FileCard getsingle={() => getSingleFileslist()} file={file} />
        )}

        <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="hudRightTeamLogo" fieldName={"Right Team Logo"}/>
        {singleFiles.filter(file => file.fileParent === "hudRightTeamLogo").map((file, index) =>
          <FileCard getsingle={() => getSingleFileslist()} file={file} />
        )}

        <div className={classes.fileInput}>Left Operator Icon 1 <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, hudLeftOperatorIcon1: base64 })} /></div>
        <div className={classes.fileInput}>Left Operator Icon 2 <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, hudLeftOperatorIcon2: base64 })} /></div>
        <div className={classes.fileInput}>Right Operator Icon 1 <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, hudRightOperatorIcon1: base64 })} /></div>
        <div className={classes.fileInput}>Right Operator Icon 2 <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, hudRightOperatorIcon2: base64 })} /></div>
        <div className={classes.fileInput}>Left Team Logo <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, hudLeftTeamLogo: base64 })} /></div>
        <div className={classes.fileInput}>Right Team Logo <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, hudRightTeamLogo: base64 })} /></div>

        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default HUDTab;