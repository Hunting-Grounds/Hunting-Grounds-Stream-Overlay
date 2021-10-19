import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { Row, Col } from 'antd';

import useStyles from './styles';
import { updatePanel } from '../../../../actions/panels';

import FileUploadScreen from './Components/FileUploadScreen';
import FileCard from './Components/FileCard';
import { getSingleFiles } from '../../../../api/index.js';

const PlaydayUpcomingMatchesTab = ({ currentId, setCurrentId }) => {

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
    upcomingMatchesName1Row1: '', upcomingMatchesName2Row1: '',
    upcomingMatchesName1Row2: '', upcomingMatchesName2Row2: '',
    upcomingMatchesName1Row3: '', upcomingMatchesName2Row3: '',
    upcomingMatchesName1Row4: '', upcomingMatchesName2Row4: ''
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
      upperThirdTitle: '', upperThirdSubtitle: '',
      upcomingMatchesName1Row1: '', upcomingMatchesName2Row1: '',
      upcomingMatchesName1Row2: '', upcomingMatchesName2Row2: '',
      upcomingMatchesName1Row3: '', upcomingMatchesName2Row3: '',
      upcomingMatchesName1Row4: '', upcomingMatchesName2Row4: ''
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
        <Typography variant="h6">Editing Upcoming Matches</Typography>

        <TextField name="upperThirdTitle" variant="outlined" label="Upper Third Title" fullWidth value={panelData.upperThirdTitle} onChange={(e) => setPanelData({ ...panelData, upperThirdTitle: e.target.value })} />
        <TextField name="upperThirdSubtitle" variant="outlined" label="Upper Third Subtitle" fullWidth value={panelData.upperThirdSubtitle} onChange={(e) => setPanelData({ ...panelData, upperThirdSubtitle: e.target.value })} />

        <Row style={{ width: '100%' }}>
          <Col span={7}>
            <TextField name="upcomingMatchesName1Row1" variant="outlined" label="Name 1 Row 1" fullWidth value={panelData.upcomingMatchesName1Row1} onChange={(e) => setPanelData({ ...panelData, upcomingMatchesName1Row1: e.target.value })} />
          </Col>
          <Col span={5}>
            {!singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo1Row1").length ? <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="upcomingMatchesLogo1Row1" fieldName={"Logo 1 Row 1"} /> : (
              singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo1Row1").map((file, index) =>
                <FileCard getsingle={() => getSingleFileslist()} file={file} fieldName={"Logo 1 Row 1"} />
              )
            )}
          </Col>
          <Col span={7}>
            <TextField name="upcomingMatchesName2Row1" variant="outlined" label="Name 2 Row 1" fullWidth value={panelData.upcomingMatchesName2Row1} onChange={(e) => setPanelData({ ...panelData, upcomingMatchesName2Row1: e.target.value })} />
          </Col>
          <Col span={5}>
            {!singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo2Row1").length ? <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="upcomingMatchesLogo2Row1" fieldName={"Logo 2 Row 1"} /> : (
              singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo2Row1").map((file, index) =>
                <FileCard getsingle={() => getSingleFileslist()} file={file} fieldName={"Logo 2 Row 1"} />
              )
            )}
          </Col>
        </Row>

        <Row style={{ width: '100%' }}>
          <Col span={7}>
            <TextField name="upcomingMatchesName1Row2" variant="outlined" label="Name 1 Row 2" fullWidth value={panelData.upcomingMatchesName1Row2} onChange={(e) => setPanelData({ ...panelData, upcomingMatchesName1Row2: e.target.value })} />
          </Col>
          <Col span={5}>
            {!singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo1Row2").length ? <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="upcomingMatchesLogo1Row2" fieldName={"Logo 1 Row 2"} /> : (
              singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo1Row2").map((file, index) =>
                <FileCard getsingle={() => getSingleFileslist()} file={file} fieldName={"Logo 1 Row 2"} />
              )
            )}
          </Col>
          <Col span={7}>
            <TextField name="upcomingMatchesName2Row2" variant="outlined" label="Name 2 Row 2" fullWidth value={panelData.upcomingMatchesName2Row2} onChange={(e) => setPanelData({ ...panelData, upcomingMatchesName2Row2: e.target.value })} />
          </Col>
          <Col span={5}>
            {!singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo2Row2").length ? <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="upcomingMatchesLogo1Row1" fieldName={"Logo 2 Row 2"} /> : (
              singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo2Row2").map((file, index) =>
                <FileCard getsingle={() => getSingleFileslist()} file={file} fieldName={"Logo 2 Row 2"} />
              )
            )}
          </Col>
        </Row>

        <Row style={{ width: '100%' }}>
          <Col span={7}>
            <TextField name="upcomingMatchesName1Row3" variant="outlined" label="Name 1 Row 3" fullWidth value={panelData.upcomingMatchesName1Row3} onChange={(e) => setPanelData({ ...panelData, upcomingMatchesName1Row3: e.target.value })} />
          </Col>
          <Col span={5}>
            {!singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo1Row3").length ? <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="upcomingMatchesLogo1Row3" fieldName={"Logo 1 Row 3"} /> : (
              singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo1Row3").map((file, index) =>
                <FileCard getsingle={() => getSingleFileslist()} file={file} fieldName={"Logo 1 Row 3"} />
              )
            )}
          </Col>
          <Col span={7}>
            <TextField name="upcomingMatchesName2Row3" variant="outlined" label="Name 2 Row 3" fullWidth value={panelData.upcomingMatchesName2Row3} onChange={(e) => setPanelData({ ...panelData, upcomingMatchesName2Row3: e.target.value })} />
          </Col>
          <Col span={5}>
            {!singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo2Row3").length ? <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="upcomingMatchesLogo2Row1" fieldName={"Logo 2 Row 3"} /> : (
              singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo2Row3").map((file, index) =>
                <FileCard getsingle={() => getSingleFileslist()} file={file} fieldName={"Logo 2 Row 3"} />
              )
            )}
          </Col>
        </Row>

        <Row style={{ width: '100%' }}>
          <Col span={7}>
            <TextField name="upcomingMatchesName1Row4" variant="outlined" label="Name 1 Row 4" fullWidth value={panelData.upcomingMatchesName1Row4} onChange={(e) => setPanelData({ ...panelData, upcomingMatchesName1Row4: e.target.value })} />
          </Col>
          <Col span={5}>
            {!singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo1Row4").length ? <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="upcomingMatchesLogo1Row4" fieldName={"Logo 1 Row 4"} /> : (
              singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo1Row4").map((file, index) =>
                <FileCard getsingle={() => getSingleFileslist()} file={file} fieldName={"Logo 1 Row 4"} />
              )
            )}
          </Col>
          <Col span={7}>
            <TextField name="upcomingMatchesName2Row4" variant="outlined" label="Name 2 Row 4" fullWidth value={panelData.upcomingMatchesName2Row4} onChange={(e) => setPanelData({ ...panelData, upcomingMatchesName2Row4: e.target.value })} />
          </Col>
          <Col span={5}>
            {!singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo2Row4").length ? <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="upcomingMatchesLogo2Row4" fieldName={"Logo 2 Row 4"} /> : (
              singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo2Row4").map((file, index) =>
                <FileCard getsingle={() => getSingleFileslist()} file={file} fieldName={"Logo 2 Row 4"} />
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

export default PlaydayUpcomingMatchesTab;