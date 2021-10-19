import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import DBImage from '../../../Components/DBImage/DBImage';
import { getSingleFiles } from '../../../../../api/index.js';

const LowerThird = ({ currentId, setCurrentId }) => {

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
        webcamCasterName1: '', webcamCasterName2: '',
        lowerThirdTitle: '', lowerThirdSubtitle: '', lowerThirdTeamName1: '', lowerThirdTeamLogo1: '',
        lowerThirdTeamColor1: '', lowerThirdTeamName2: '', lowerThirdTeamLogo2: '', lowerThirdTeamColor2: ''
    });
    const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));

    useEffect(() => {
        if (panel) setPanelData(panel);
    }, [panel]);

    return (
        <div className="LowerThird">
            {panels.map((panel) => (setCurrentId(panel._id),
                <div>
                    <div className="LowerThirdBox">.</div>
                    <h1 className="LowerThirdTitle">{panelData.lowerThirdTitle}</h1>
                    <h3 className="LowerThirdSubtitle">{panelData.lowerThirdSubtitle}</h3>
                    <div>
                        <div className="LowerThirdVsBox">
                            <div className="LowerThirdVsText">
                                VERSUS
                            </div>
                        </div>
                        <div className="LowerThirdTeam1" style={{ backgroundColor: panelData.lowerThirdTeamColor1 }}>
                            {singleFiles.filter(file => file.fileParent === "lowerThirdTeamLogo1").map((file, index) =>
                                <DBImage bgColor='inherit' cName="LowerThirdTeam1Logo" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                            )}
                            <div className="LowerThirdTeam1Name">{panelData.lowerThirdTeamName1}</div>
                        </div>
                        <div className="LowerThirdTeam2" style={{ backgroundColor: panelData.lowerThirdTeamColor2 }}>
                            {singleFiles.filter(file => file.fileParent === "lowerThirdTeamLogo2").map((file, index) =>
                                <DBImage bgColor='inherit' cName="LowerThirdTeam2Logo" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                            )}
                            <div className="LowerThirdTeam2Name">{panelData.lowerThirdTeamName2}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LowerThird
