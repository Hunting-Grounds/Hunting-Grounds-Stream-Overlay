import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import "./CurrentMatchup.css"

import Clock from '../Components/Clock/Clock';

const MatchupBody = ({ currentId, setCurrentId }) => {

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
                        <div className="leftTeam" style={{ backgroundColor: panelData.currentMatchupColor1}}>
                            <div className="LeftTeamLogo" style={{ backgroundImage: `url(${panelData.currentMatchupLogo1})`}}/>
                            <div className="LeftTeamName">
                                <h1 className="LeftTeamNameText">{panelData.currentMatchupName1}</h1>
                            </div>
                        </div>
                        <div className="rightTeam" style={{ backgroundColor: panelData.currentMatchupColor2}}>
                            <div className="RightTeamLogo" style={{ backgroundImage: `url(${panelData.currentMatchupLogo2})`}}/>
                            <div className="RightTeamName">
                                <h1 className="RightTeamNameText">{panelData.currentMatchupName2}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="ClockText"><Clock/></div>
                </div>
            ))}
        </div>
    )
}

export default MatchupBody
