import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import 'antd/dist/antd.css';
import { Select } from 'antd';

import useStyles from './styles';
import { updatePanel } from '../../../../actions/panels';

const { Option } = Select;

import FileUploadScreen from './Components/FileUploadScreen';
import FileCard from './Components/FileCard';
import { getSingleFiles } from '../../../../api/index.js';

const WebcamLowerThirdTab = ({ currentId, setCurrentId, currentTeamId, setCurrentTeamId }) => {

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

  const teams = useSelector((state) => state.teams);

  const [panelData, setPanelData] = useState({
    webcamCasterName1: '', webcamCasterName2: '',
    lowerThirdTitle: '', lowerThirdSubtitle: '', lowerThirdTeamName1: '', lowerThirdTeamLogo1: '',
    lowerThirdTeamColor1: '', lowerThirdTeamName2: '', lowerThirdTeamLogo2: '', lowerThirdTeamColor2: ''
  });

  const [teamData, setTeamData] = useState({ fullName: '', displayName: '', tag: '', themeColour: '', players: '', points: '', records: '', selectedFile: '' });

  const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));
  const team = useSelector((state) => (currentId ? state.teams.find((message) => message._id === currentTeamId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (panel) setPanelData(panel);
  }, [panel]);

  useEffect(() => {
    if (team) setTeamData(team);
  }, [team]);

  const clear = () => {
    setCurrentId(0);
    setPanelData({
      webcamCasterName1: '', webcamCasterName2: '',
      lowerThirdTitle: '', lowerThirdSubtitle: '', lowerThirdTeamName1: '', lowerThirdTeamLogo1: '',
      lowerThirdTeamColor1: '', lowerThirdTeamName2: '', lowerThirdTeamLogo2: '', lowerThirdTeamColor2: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(panelData);
    dispatch(updatePanel(panelData._id, panelData));
    clear();
  };

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    // console.log('blur');
  }

  function onFocus() {
    // console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Editing Webcam & Lower Third</Typography>
        <TextField name="webcamCasterName1" variant="outlined" label="Webcam Caster Name 1" fullWidth value={panelData.webcamCasterName1} onChange={(e) => setPanelData({ ...panelData, webcamCasterName1: e.target.value })} />
        <TextField name="webcamCasterName2" variant="outlined" label="Webcam Caster Name 2" fullWidth value={panelData.webcamCasterName2} onChange={(e) => setPanelData({ ...panelData, webcamCasterName2: e.target.value })} />
        <TextField name="lowerThirdTitle" variant="outlined" label="Lower Third Title" fullWidth value={panelData.lowerThirdTitle} onChange={(e) => setPanelData({ ...panelData, lowerThirdTitle: e.target.value })} />
        <TextField name="lowerThirdSubtitle" variant="outlined" label="Lower Third Subtitle" fullWidth value={panelData.lowerThirdSubtitle} onChange={(e) => setPanelData({ ...panelData, lowerThirdSubtitle: e.target.value })} />
        <TextField name="lowerThirdTeamName1" variant="outlined" label="Lower Third Team Name 1" fullWidth value={panelData.lowerThirdTeamName1} onChange={(e) => setPanelData({ ...panelData, lowerThirdTeamName1: e.target.value })} />

        <Select
          showSearch
          style={{ width: '100%' }}
          size="large"
          placeholder="Select a team"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {teams.map((team) => (
            console.log('LOG:' + team._id),
            <Option value={team.fullName}> {team.fullName}</Option>
          ))}
        </Select>

        <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="lowerThirdTeamLogo1" fieldName={"Lower Third Team Logo 1"} />
        {singleFiles.filter(file => file.fileParent === "lowerThirdTeamLogo1").map((file, index) =>
          <FileCard getsingle={() => getSingleFileslist()} file={file} />
        )}

        <TextField name="lowerThirdTeamColor1" variant="outlined" label="Lower Third Team Color 1" fullWidth value={panelData.lowerThirdTeamColor1} onChange={(e) => setPanelData({ ...panelData, lowerThirdTeamColor1: e.target.value })} />
        <TextField name="lowerThirdTeamName2" variant="outlined" label="Lower Third Team Name 2" fullWidth value={panelData.lowerThirdTeamName2} onChange={(e) => setPanelData({ ...panelData, lowerThirdTeamName2: e.target.value })} />

        <FileUploadScreen getsingle={() => getSingleFileslist()} fileParent="lowerThirdTeamLogo2" fieldName={"Lower Third Team Logo 2"} />
        {singleFiles.filter(file => file.fileParent === "lowerThirdTeamLogo2").map((file, index) =>
          <FileCard getsingle={() => getSingleFileslist()} file={file} />
        )}

        <TextField name="lowerThirdTeamColor2" variant="outlined" label="Lower Third Team Color 2" fullWidth value={panelData.lowerThirdTeamColor2} onChange={(e) => setPanelData({ ...panelData, lowerThirdTeamColor2: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper >
  );
};

export default WebcamLowerThirdTab;