import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { Row, Col } from 'antd';

import useStyles from './styles';
import { updatePanel } from '../../../../actions/panels';

import FileUploadScreen from './Components/FileUploadScreen';
import FileCard from './Components/FileCard';
import { getSingleFiles } from '../../../../api/index.js';

const CurrentMatchupTab = ({ currentId, setCurrentId }) => {

  const dispatch = useDispatch();

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
    upperThirdTitle: '', upperThirdSubtitle: '',
    currentMatchupName1: '', currentMatchupColor1: '',
    currentMatchupName2: '', currentMatchupColor2: ''
  });
  const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));
  const classes = useStyles();

  useEffect(() => {
    if (panel) setPanelData(panel);
  }, [panel]);

  const clear = () => {
    setCurrentId(0);
    setPanelData({
      upperThirdTitle: '', upperThirdSubtitle: '',
      currentMatchupName1: '', currentMatchupColor1: '',
      currentMatchupName2: '', currentMatchupColor2: ''
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
        <Typography variant="h6">Editing Current Matchup</Typography>
        <TextField name="upperThirdTitle" variant="outlined" label="Upper Third Title" fullWidth value={panelData.upperThirdTitle} onChange={(e) => setPanelData({ ...panelData, upperThirdTitle: e.target.value })} />
        <TextField name="upperThirdSubtitle" variant="outlined" label="Upper Third Subtitle" fullWidth value={panelData.upperThirdSubtitle} onChange={(e) => setPanelData({ ...panelData, upperThirdSubtitle: e.target.value })} />
        <Row style={{ width: '100%' }}>
          <Col span={12}>
            <TextField name="currentMatchupName1" variant="outlined" label="Name 1" fullWidth value={panelData.currentMatchupName1} onChange={(e) => setPanelData({ ...panelData, currentMatchupName1: e.target.value })} />
            <TextField name="currentMatchupColor1" variant="outlined" label="Color 1" fullWidth value={panelData.currentMatchupColor1} onChange={(e) => setPanelData({ ...panelData, currentMatchupColor1: e.target.value })} />

            {!singleFiles.filter(file => file.fileParent === "currentMatchupLogo1").length ? <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="currentMatchupLogo1" fieldName={"Logo 1"} /> : (
              singleFiles.filter(file => file.fileParent === "currentMatchupLogo1").map((file, index) =>
                <FileCard getsingle={() => getSingleFileslist()} file={file} fieldName={"Logo 1"} />
              )
            )}

          </Col>
          <Col span={12}>
            <TextField name="currentMatchupName2" variant="outlined" label="Name 2" fullWidth value={panelData.currentMatchupName2} onChange={(e) => setPanelData({ ...panelData, currentMatchupName2: e.target.value })} />
            <TextField name="currentMatchupColor2" variant="outlined" label="Color 2" fullWidth value={panelData.currentMatchupColor2} onChange={(e) => setPanelData({ ...panelData, currentMatchupColor2: e.target.value })} />

            {!singleFiles.filter(file => file.fileParent === "currentMatchupLogo2").length ? <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="currentMatchupLogo2" fieldName={"Logo 2"} /> : (
              singleFiles.filter(file => file.fileParent === "currentMatchupLogo2").map((file, index) =>
                <FileCard getsingle={() => getSingleFileslist()} file={file} fieldName={"Logo 2"} />
              )
            )}

          </Col>
        </Row>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper >
  );
};

export default CurrentMatchupTab;