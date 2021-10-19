import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { Row, Col } from 'antd';

import useStyles from './styles';
import { updatePanel } from '../../../../actions/panels';

import FileUploadScreen from './Components/FileUploadScreen';
import FileCard from './Components/FileCard';
import { getSingleFiles } from '../../../../api/index.js';

const WebcamVetoTab = ({ currentId, setCurrentId }) => {

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
    webcamCasterName1: '', webcamCasterName2: '', lowerThirdTeamName1: '',
    lowerThirdTeamColor1: '', lowerThirdTeamName2: '', lowerThirdTeamColor2: '',
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
      webcamCasterName1: '', webcamCasterName2: '', lowerThirdTeamName1: '',
      lowerThirdTeamColor1: '', lowerThirdTeamName2: '', lowerThirdTeamColor2: '',
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

        <Typography variant="h6">Editing Veto</Typography>

        <Row justify="space-around" align="middle" style={{ width: '100%' }}>
          <Col span={12}>
            <TextField name="webcamCasterName1" variant="outlined" label="Webcam Caster Name 1" fullWidth value={panelData.webcamCasterName1} onChange={(e) => setPanelData({ ...panelData, webcamCasterName1: e.target.value })} />
            <TextField name="webcamCasterName2" variant="outlined" label="Webcam Caster Name 2" fullWidth value={panelData.webcamCasterName2} onChange={(e) => setPanelData({ ...panelData, webcamCasterName2: e.target.value })} />
            <TextField name="lowerThirdTeamName1" variant="outlined" label="Lower Third Team Name 1" fullWidth value={panelData.lowerThirdTeamName1} onChange={(e) => setPanelData({ ...panelData, lowerThirdTeamName1: e.target.value })} />
            <TextField name="lowerThirdTeamColor1" variant="outlined" label="Lower Third Team Color 1" fullWidth value={panelData.lowerThirdTeamColor1} onChange={(e) => setPanelData({ ...panelData, lowerThirdTeamColor1: e.target.value })} />
            <Row justify="space-around" align="middle" style={{ width: '100%' }}>
              <Col span={12} offset={6}>
                {!singleFiles.filter(file => file.fileParent === "lowerThirdTeamLogo1").length ? <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="lowerThirdTeamLogo1" fieldName={"Lower Third Team Logo 1"} /> : (
                  singleFiles.filter(file => file.fileParent === "lowerThirdTeamLogo1").map((file, index) =>
                    <FileCard getsingle={() => getSingleFileslist()} file={file} fieldName={"Lower Third Team Logo 1"} />
                  )
                )}
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <TextField name="lowerThirdTitle" variant="outlined" label="Lower Third Title" fullWidth value={panelData.lowerThirdTitle} onChange={(e) => setPanelData({ ...panelData, lowerThirdTitle: e.target.value })} />
            <TextField name="lowerThirdSubtitle" variant="outlined" label="Lower Third Subtitle" fullWidth value={panelData.lowerThirdSubtitle} onChange={(e) => setPanelData({ ...panelData, lowerThirdSubtitle: e.target.value })} />
            <TextField name="lowerThirdTeamName2" variant="outlined" label="Lower Third Team Name 2" fullWidth value={panelData.lowerThirdTeamName2} onChange={(e) => setPanelData({ ...panelData, lowerThirdTeamName2: e.target.value })} />
            <TextField name="lowerThirdTeamColor2" variant="outlined" label="Lower Third Team Color 2" fullWidth value={panelData.lowerThirdTeamColor2} onChange={(e) => setPanelData({ ...panelData, lowerThirdTeamColor2: e.target.value })} />
            <Row justify="space-around" align="middle" style={{ width: '100%' }}>
              <Col span={12} offset={6}>
                {!singleFiles.filter(file => file.fileParent === "lowerThirdTeamLogo2").length ? <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="lowerThirdTeamLogo2" fieldName={"Lower Third Team Logo 2"} /> : (
                  singleFiles.filter(file => file.fileParent === "lowerThirdTeamLogo2").map((file, index) =>
                    <FileCard getsingle={() => getSingleFileslist()} file={file} fieldName={"Lower Third Team Logo 2"} />
                  )
                )}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify="space-around" align="middle" style={{ width: '100%' }}>
          <Col span={8}>
            {!singleFiles.filter(file => file.fileParent === "vetoMap1Icon").length ? <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="vetoMap1Icon" fieldName={"Map 1 Icon"} /> : (
              singleFiles.filter(file => file.fileParent === "vetoMap1Icon").map((file, index) =>
                <FileCard getsingle={() => getSingleFileslist()} file={file} fieldName={"Map 1 Icon"} />
              )
            )}
          </Col>
          <Col span={8}>
            {!singleFiles.filter(file => file.fileParent === "vetoMap2Icon").length ? <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="vetoMap2Icon" fieldName={"Map 2 Icon"} /> : (
              singleFiles.filter(file => file.fileParent === "vetoMap2Icon").map((file, index) =>
                <FileCard getsingle={() => getSingleFileslist()} file={file} fieldName={"Map 2 Icon"} />
              )
            )}
          </Col>
          <Col span={8}>
            {!singleFiles.filter(file => file.fileParent === "vetoMap3Icon").length ? <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="vetoMap3Icon" fieldName={"Map 3 Icon"} /> : (
              singleFiles.filter(file => file.fileParent === "vetoMap3Icon").map((file, index) =>
                <FileCard getsingle={() => getSingleFileslist()} file={file} fieldName={"Map 3 Icon"} />
              )
            )}
          </Col>
        </Row>
        <Row justify="space-around" align="middle" style={{ width: '100%' }}>
          <Col span={8}>
            {!singleFiles.filter(file => file.fileParent === "vetoMap4Icon").length ? <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="vetoMap4Icon" fieldName={"Map 4 Icon"} /> : (
              singleFiles.filter(file => file.fileParent === "vetoMap4Icon").map((file, index) =>
                <FileCard getsingle={() => getSingleFileslist()} file={file} fieldName={"Map 4 Icon"} />
              )
            )}
          </Col>
          <Col span={8}>
            {!singleFiles.filter(file => file.fileParent === "vetoMap5Icon").length ? <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="vetoMap5Icon" fieldName={"Map 5 Icon"} /> : (
              singleFiles.filter(file => file.fileParent === "vetoMap5Icon").map((file, index) =>
                <FileCard getsingle={() => getSingleFileslist()} file={file} fieldName={"Map 5 Icon"} />
              )
            )}
          </Col>
          <Col span={8}>
            {!singleFiles.filter(file => file.fileParent === "vetoMap6Icon").length ? <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="vetoMap6Icon" fieldName={"Map 6 Icon"} /> : (
              singleFiles.filter(file => file.fileParent === "vetoMap6Icon").map((file, index) =>
                <FileCard getsingle={() => getSingleFileslist()} file={file} fieldName={"Map 6 Icon"} />
              )
            )}
          </Col>
        </Row>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default WebcamVetoTab;