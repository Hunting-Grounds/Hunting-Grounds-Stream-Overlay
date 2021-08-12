import React, {useState} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

// Styles
import useStyles from './styles';

import { createTeam } from '../../actions/teams';

function Form() {
    const [teamData, setTeamData] = useState({
        fullName: '', displayName: '', tag: '', themeColour: '', points: '', record: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createTeam(teamData));
    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Create a Team</Typography>

                <TextField
                    name="fullName"
                    variant="outlined"
                    label="Full Name"
                    fullWidth
                    value={teamData.fullName}
                    onChange={(e) => setTeamData({ ...teamData, fullName: e.target.value })}
                />

                <TextField
                    name="displayName"
                    variant="outlined"
                    label="Display Name"
                    fullWidth
                    value={teamData.displayName}
                    onChange={(e) => setTeamData({ ...teamData, displayName: e.target.value })}
                />

                <TextField
                    name="tag"
                    variant="outlined"
                    label="Tag"
                    fullWidth
                    value={teamData.tag}
                    onChange={(e) => setTeamData({ ...teamData, tag: e.target.value })}
                />

                <TextField
                    name="themeColour"
                    variant="outlined"
                    label="Theme Colour (HEX)"
                    fullWidth
                    value={teamData.themeColour}
                    onChange={(e) => setTeamData({ ...teamData, themeColour: e.target.value })}
                />

                <TextField
                    name="points"
                    variant="outlined"
                    label="Points"
                    fullWidth
                    value={teamData.points}
                    onChange={(e) => setTeamData({ ...teamData, points: e.target.value })}
                />

                <TextField
                    name="Record"
                    variant="outlined"
                    label="Record"
                    fullWidth
                    value={teamData.record}
                    onChange={(e) => setTeamData({ ...teamData, record: e.target.value })}
                />

                <Typography variant={'h6'}>Upload Logo</Typography>

                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setTeamData({ ...teamData, selectedFile: base64 })}
                    />
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    )
}

export default Form
