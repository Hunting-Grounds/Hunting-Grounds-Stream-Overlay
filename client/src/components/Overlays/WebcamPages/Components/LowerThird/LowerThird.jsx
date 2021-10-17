import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const LowerThird = ({ currentId, setCurrentId }) => {

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
                        <div className="LowerThirdTeam1">
                            <div className="LowerThirdTeam1Logo"></div>
                            <div className="LowerThirdTeam1Name">LNSCRD</div>
                        </div>
                        <div className="LowerThirdTeam2">
                            <div className="LowerThirdTeam2Logo"></div>
                            <div className="LowerThirdTeam2Name">AQLX</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LowerThird
