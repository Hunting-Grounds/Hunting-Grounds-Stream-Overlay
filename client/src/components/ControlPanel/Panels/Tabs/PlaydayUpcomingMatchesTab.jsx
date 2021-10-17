import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { Row, Col } from 'antd';

import useStyles from './styles';
import { updatePanel } from '../../../../actions/panels';

const PlaydayUpcomingMatchesTab = ({ currentId, setCurrentId }) => {
  const [panelData, setPanelData] = useState({ upperThirdTitle: '', upperThirdSubtitle: '',
  upcomingMatchesName1Row1: '', upcomingMatchesLogo1Row1: '', upcomingMatchesName2Row1: '', upcomingMatchesLogo2Row1: '',
  upcomingMatchesName1Row2: '', upcomingMatchesLogo1Row2: '', upcomingMatchesName2Row2: '', upcomingMatchesLogo2Row2: '',
  upcomingMatchesName1Row3: '', upcomingMatchesLogo1Row3: '', upcomingMatchesName2Row3: '', upcomingMatchesLogo2Row3: '',
  upcomingMatchesName1Row4: '', upcomingMatchesLogo1Row4: '', upcomingMatchesName2Row4: '', upcomingMatchesLogo2Row4: ''});
  const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (panel) setPanelData(panel);
  }, [panel]);

  const clear = () => {
    setCurrentId(0);
    setPanelData({ upperThirdTitle: '', upperThirdSubtitle: '',
    upcomingMatchesName1Row1: '', upcomingMatchesLogo1Row1: '', upcomingMatchesName2Row1: '', upcomingMatchesLogo2Row1: '',
    upcomingMatchesName1Row2: '', upcomingMatchesLogo1Row2: '', upcomingMatchesName2Row2: '', upcomingMatchesLogo2Row2: '',
    upcomingMatchesName1Row3: '', upcomingMatchesLogo1Row3: '', upcomingMatchesName2Row3: '', upcomingMatchesLogo2Row3: '',
    upcomingMatchesName1Row4: '', upcomingMatchesLogo1Row4: '', upcomingMatchesName2Row4: '', upcomingMatchesLogo2Row4: ''});
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

        <Row style={{width: '100%'}}>
          <Col span={7}>
            <TextField name="upcomingMatchesName1Row1" variant="outlined" label="Name 1 Row 1" fullWidth value={panelData.upcomingMatchesName1Row1} onChange={(e) => setPanelData({ ...panelData, upcomingMatchesName1Row1: e.target.value })} />
          </Col>
          <Col span={5}>
            <div className={classes.fileInput}>Logo 1 Row 1 <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, upcomingMatchesLogo1Row1: base64 })} /></div>
          </Col>
          <Col span={7}>
            <TextField name="upcomingMatchesName2Row1" variant="outlined" label="Name 2 Row 1" fullWidth value={panelData.upcomingMatchesName2Row1} onChange={(e) => setPanelData({ ...panelData, upcomingMatchesName2Row1: e.target.value })} />
          </Col>
          <Col span={5}>
            <div className={classes.fileInput}>Logo 2 Row 1 <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, upcomingMatchesLogo2Row1: base64 })} /></div>
          </Col>
        </Row>

        <Row style={{width: '100%'}}>
          <Col span={7}>
            <TextField name="upcomingMatchesName1Row2" variant="outlined" label="Name 1 Row 2" fullWidth value={panelData.upcomingMatchesName1Row2} onChange={(e) => setPanelData({ ...panelData, upcomingMatchesName1Row2: e.target.value })} />
          </Col>
          <Col span={5}>
            <div className={classes.fileInput}>Logo 1 row 2 <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, upcomingMatchesLogo1row2: base64 })} /></div>
          </Col>
          <Col span={7}>
          <TextField name="upcomingMatchesName2row2" variant="outlined" label="Name 2 row 2" fullWidth value={panelData.upcomingMatchesName2row2} onChange={(e) => setPanelData({ ...panelData, upcomingMatchesName2row2: e.target.value })} />
          </Col>
          <Col span={5}>
          <div className={classes.fileInput}>Logo 2 row 2 <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, upcomingMatchesLogo2row2: base64 })} /></div>
          </Col>
        </Row>

        <Row style={{width: '100%'}}>
          <Col span={7}>
            <TextField name="upcomingMatchesName1row3" variant="outlined" label="Name 1 row 3" fullWidth value={panelData.upcomingMatchesName1row3} onChange={(e) => setPanelData({ ...panelData, upcomingMatchesName1row3: e.target.value })} />
          </Col>
          <Col span={5}>
            <div className={classes.fileInput}>Logo 1 row 3 <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, upcomingMatchesLogo1row3: base64 })} /></div>
          </Col>
          <Col span={7}>
            <TextField name="upcomingMatchesName2row3" variant="outlined" label="Name 2 row 3" fullWidth value={panelData.upcomingMatchesName2row3} onChange={(e) => setPanelData({ ...panelData, upcomingMatchesName2row3: e.target.value })} />
          </Col>
          <Col span={5}>
            <div className={classes.fileInput}>Logo 2 row 3 <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, upcomingMatchesLogo2row3: base64 })} /></div>
          </Col>
        </Row>

        <Row style={{width: '100%'}}>
          <Col span={7}>
            <TextField name="upcomingMatchesName1row4" variant="outlined" label="Name 1 row 4" fullWidth value={panelData.upcomingMatchesName1row4} onChange={(e) => setPanelData({ ...panelData, upcomingMatchesName1row4: e.target.value })} />
          </Col>
          <Col span={5}>
          <div className={classes.fileInput}>Logo 1 row 4 <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, upcomingMatchesLogo1row4: base64 })} /></div>
          </Col>
          <Col span={7}>
            <TextField name="upcomingMatchesName2row4" variant="outlined" label="Name 2 row 4" fullWidth value={panelData.upcomingMatchesName2row4} onChange={(e) => setPanelData({ ...panelData, upcomingMatchesName2row4: e.target.value })} />
          </Col>
          <Col span={5}>
            <div className={classes.fileInput}>Logo 2 row 4 <FileBase type="file" multiple={false} onDone={({ base64 }) => setPanelData({ ...panelData, upcomingMatchesLogo2row4: base64 })} /></div>
          </Col>
        </Row>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default PlaydayUpcomingMatchesTab;