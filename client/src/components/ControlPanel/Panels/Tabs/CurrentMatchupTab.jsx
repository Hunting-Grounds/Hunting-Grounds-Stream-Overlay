import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { Row, Col } from 'antd';
import { Card, Avatar } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import useStyles from './styles';
import { updatePanel } from '../../../../actions/panels';

import FileUploadScreen from './FileUploadScreen';
import { getSingleFiles } from '../../../../api/index.js';

const { Meta } = Card;

const CurrentMatchupTab = ({ currentId, setCurrentId }) => {

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
    currentMatchupLogo1: '', currentMatchupName1: '', currentMatchupColor1: '',
    currentMatchupLogo2: '', currentMatchupName2: '', currentMatchupColor2: ''
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
      currentMatchupLogo1: '', currentMatchupName1: '', currentMatchupColor1: '',
      currentMatchupLogo2: '', currentMatchupName2: '', currentMatchupColor2: ''
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
            <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="currentMatchupLogo1" />
            {singleFiles.filter(file => file.fileParent === "currentMatchupLogo1").map((file, index) =>
              <Card
              style={{ width: '20vw', position: 'absolute', left: '10' }}
              cover={
                <img
                  alt={file.fileParent}
                  src={`http://195.22.157.230:5000/${file.filePath}`}
                />
              }
              actions={[<DeleteOutlined key="delete" />]}
            >
            </Card>
            )}
          </Col>
          <Col span={12}>
            <TextField name="currentMatchupName2" variant="outlined" label="Name 2" fullWidth value={panelData.currentMatchupName2} onChange={(e) => setPanelData({ ...panelData, currentMatchupName2: e.target.value })} />
            <TextField name="currentMatchupColor2" variant="outlined" label="Color 2" fullWidth value={panelData.currentMatchupColor2} onChange={(e) => setPanelData({ ...panelData, currentMatchupColor2: e.target.value })} />
            <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="currentMatchupLogo2" />
            {singleFiles.filter(file => file.fileParent === "currentMatchupLogo2").map((file, index) =>
              <div className="col-6">
                <div className="card mb-2 border-0 p-0">
                  <img src={`http://195.22.157.230:5000/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img" />
                </div>
              </div>
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