import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
//import FileBase from 'react-file-base64';

import { Row, Col } from 'antd';

import useStyles from './styles';
import { updatePanel } from '../../../../actions/panels';

const LeagueTableTab = ({ currentId, setCurrentId }) => {
  const [panelData, setPanelData] = useState({
    upperThirdTitle: '', upperThirdSubtitle: '',
    leagueTableNameRow1: '', leagueTableWLRow1: '', leagueTablePTSRow1: '',
    leagueTableNameRow2: '', leagueTableWLRow2: '', leagueTablePTSRow2: '',
    leagueTableNameRow3: '', leagueTableWLRow3: '', leagueTablePTSRow3: '',
    leagueTableNameRow4: '', leagueTableWLRow4: '', leagueTablePTSRow4: '',
    leagueTableNameRow5: '', leagueTableWLRow5: '', leagueTablePTSRow5: '',
    leagueTableNameRow6: '', leagueTableWLRow6: '', leagueTablePTSRow6: '',
    leagueTableNameRow7: '', leagueTableWLRow7: '', leagueTablePTSRow7: '',
    leagueTableNameRow8: '', leagueTableWLRow8: '', leagueTablePTSRow8: ''
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
      leagueTableNameRow1: '', leagueTableWLRow1: '', leagueTablePTSRow1: '',
      leagueTableNameRow2: '', leagueTableWLRow2: '', leagueTablePTSRow2: '',
      leagueTableNameRow3: '', leagueTableWLRow3: '', leagueTablePTSRow3: '',
      leagueTableNameRow4: '', leagueTableWLRow4: '', leagueTablePTSRow4: '',
      leagueTableNameRow5: '', leagueTableWLRow5: '', leagueTablePTSRow5: '',
      leagueTableNameRow6: '', leagueTableWLRow6: '', leagueTablePTSRow6: '',
      leagueTableNameRow7: '', leagueTableWLRow7: '', leagueTablePTSRow7: '',
      leagueTableNameRow8: '', leagueTableWLRow8: '', leagueTablePTSRow8: ''
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
        <Typography variant="h6">Editing League Table</Typography>

        <Row style={{width: '100%'}}>
          <Col span={12}>
            <TextField name="upperThirdSubtitle" variant="outlined" label="Upper Third Subtitle" fullWidth value={panelData.upperThirdSubtitle} onChange={(e) => setPanelData({ ...panelData, upperThirdSubtitle: e.target.value })} />
          </Col>
          <Col span={12}>
            <TextField name="upperThirdTitle" variant="outlined" label="Upper Third Title" fullWidth value={panelData.upperThirdTitle} onChange={(e) => setPanelData({ ...panelData, upperThirdTitle: e.target.value })} />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <TextField name="leagueTableNameRow1" variant="outlined" label="Row 1 Team Name" fullWidth value={panelData.leagueTableNameRow1} onChange={(e) => setPanelData({ ...panelData, leagueTableNameRow1: e.target.value })} />
            <TextField name="leagueTableNameRow2" variant="outlined" label="Row 2 Team Name" fullWidth value={panelData.leagueTableNameRow2} onChange={(e) => setPanelData({ ...panelData, leagueTableNameRow2: e.target.value })} />
            <TextField name="leagueTableNameRow3" variant="outlined" label="Row 3 Team Name" fullWidth value={panelData.leagueTableNameRow3} onChange={(e) => setPanelData({ ...panelData, leagueTableNameRow3: e.target.value })} />
            <TextField name="leagueTableNameRow4" variant="outlined" label="Row 4 Team Name" fullWidth value={panelData.leagueTableNameRow4} onChange={(e) => setPanelData({ ...panelData, leagueTableNameRow4: e.target.value })} />
            <TextField name="leagueTableNameRow5" variant="outlined" label="Row 5 Team Name" fullWidth value={panelData.leagueTableNameRow5} onChange={(e) => setPanelData({ ...panelData, leagueTableNameRow5: e.target.value })} />
            <TextField name="leagueTableNameRow6" variant="outlined" label="Row 6 Team Name" fullWidth value={panelData.leagueTableNameRow6} onChange={(e) => setPanelData({ ...panelData, leagueTableNameRow6: e.target.value })} />
            <TextField name="leagueTableNameRow7" variant="outlined" label="Row 7 Team Name" fullWidth value={panelData.leagueTableNameRow7} onChange={(e) => setPanelData({ ...panelData, leagueTableNameRow7: e.target.value })} />
            <TextField name="leagueTableNameRow8" variant="outlined" label="Row 8 Team Name" fullWidth value={panelData.leagueTableNameRow8} onChange={(e) => setPanelData({ ...panelData, leagueTableNameRow8: e.target.value })} />
          </Col>
          <Col span={8}>
            <TextField name="leagueTableWLRow1" variant="outlined" label="Row 1 Win / Loss" fullWidth value={panelData.leagueTableWLRow1} onChange={(e) => setPanelData({ ...panelData, leagueTableWLRow1: e.target.value })} />
            <TextField name="leagueTableWLRow2" variant="outlined" label="Row 2 Win / Loss" fullWidth value={panelData.leagueTableWLRow2} onChange={(e) => setPanelData({ ...panelData, leagueTableWLRow2: e.target.value })} />
            <TextField name="leagueTableWLRow3" variant="outlined" label="Row 3 Win / Loss" fullWidth value={panelData.leagueTableWLRow3} onChange={(e) => setPanelData({ ...panelData, leagueTableWLRow3: e.target.value })} />
            <TextField name="leagueTableWLRow4" variant="outlined" label="Row 4 Win / Loss" fullWidth value={panelData.leagueTableWLRow4} onChange={(e) => setPanelData({ ...panelData, leagueTableWLRow4: e.target.value })} />
            <TextField name="leagueTableWLRow5" variant="outlined" label="Row 5 Win / Loss" fullWidth value={panelData.leagueTableWLRow5} onChange={(e) => setPanelData({ ...panelData, leagueTableWLRow5: e.target.value })} />
            <TextField name="leagueTableWLRow6" variant="outlined" label="Row 6 Win / Loss" fullWidth value={panelData.leagueTableWLRow6} onChange={(e) => setPanelData({ ...panelData, leagueTableWLRow6: e.target.value })} />
            <TextField name="leagueTableWLRow7" variant="outlined" label="Row 7 Win / Loss" fullWidth value={panelData.leagueTableWLRow7} onChange={(e) => setPanelData({ ...panelData, leagueTableWLRow7: e.target.value })} />
            <TextField name="leagueTableWLRow8" variant="outlined" label="Row 8 Win / Loss" fullWidth value={panelData.leagueTableWLRow8} onChange={(e) => setPanelData({ ...panelData, leagueTableWLRow8: e.target.value })} />
          </Col>
          <Col span={8}>
            <TextField name="leagueTablePTSRow1" variant="outlined" label="Row 1 Points" fullWidth value={panelData.leagueTablePTSRow1} onChange={(e) => setPanelData({ ...panelData, leagueTablePTSRow1: e.target.value })} />
            <TextField name="leagueTablePTSRow2" variant="outlined" label="Row 2 Points" fullWidth value={panelData.leagueTablePTSRow2} onChange={(e) => setPanelData({ ...panelData, leagueTablePTSRow2: e.target.value })} />
            <TextField name="leagueTablePTSRow3" variant="outlined" label="Row 3 Points" fullWidth value={panelData.leagueTablePTSRow3} onChange={(e) => setPanelData({ ...panelData, leagueTablePTSRow3: e.target.value })} />
            <TextField name="leagueTablePTSRow4" variant="outlined" label="Row 4 Points" fullWidth value={panelData.leagueTablePTSRow4} onChange={(e) => setPanelData({ ...panelData, leagueTablePTSRow4: e.target.value })} />
            <TextField name="leagueTablePTSRow5" variant="outlined" label="Row 5 Points" fullWidth value={panelData.leagueTablePTSRow5} onChange={(e) => setPanelData({ ...panelData, leagueTablePTSRow5: e.target.value })} />
            <TextField name="leagueTablePTSRow6" variant="outlined" label="Row 6 Points" fullWidth value={panelData.leagueTablePTSRow6} onChange={(e) => setPanelData({ ...panelData, leagueTablePTSRow6: e.target.value })} />
            <TextField name="leagueTablePTSRow7" variant="outlined" label="Row 7 Points" fullWidth value={panelData.leagueTablePTSRow7} onChange={(e) => setPanelData({ ...panelData, leagueTablePTSRow7: e.target.value })} />
            <TextField name="leagueTablePTSRow8" variant="outlined" label="Row 8 Points" fullWidth value={panelData.leagueTablePTSRow8} onChange={(e) => setPanelData({ ...panelData, leagueTablePTSRow8: e.target.value })} />
          </Col>
        </Row>

        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default LeagueTableTab;