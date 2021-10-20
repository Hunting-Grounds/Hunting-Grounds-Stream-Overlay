import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import "./CurrentMatchup.css"

import MatchupLeftTeam from './MatchupLeftTeam';
import MatchupRightTeam from './MatchupRightTeam';
import Clock from '../Components/Clock/Clock';

import { getSingleFiles } from '../../../api/index.js';

const MatchupBody = ({ currentId, setCurrentId }) => {

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

    const panels = useSelector((state) => state.panels);

    const [panelData, setPanelData] = useState({
        currentMatchupLogo1: '', currentMatchupName1: '', currentMatchupColor1: '',
        currentMatchupLogo2: '', currentMatchupName2: '', currentMatchupColor2: ''
    });

    const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));

    useEffect(() => {
        if (panel) setPanelData(panel);
    }, [panel]);

    return (
        <div>
            {panels.map((panel) => (setCurrentId(panel._id),
                <div>
                    <div className="UpNext">UP NEXT</div>
                    <div className="CurrentMatchupBox">
                        {singleFiles.filter(file => file.fileParent === "currentMatchupLogo1").map((file, index) =>
                            <MatchupLeftTeam panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                        )}
                        <div className="VSText">VS</div>
                        {singleFiles.filter(file => file.fileParent === "currentMatchupLogo2").map((file, index) =>
                            <MatchupRightTeam panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                        )}
                    </div>
                    <div className="ClockText"><Clock /></div>
                </div>
            ))}
        </div>
    )
}

export default MatchupBody