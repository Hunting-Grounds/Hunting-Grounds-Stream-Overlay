import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const UpcomingMatchesBody = ({ currentId, setCurrentId }) => {

    const panels = useSelector((state) => state.panels);

    const [panelData, setPanelData] = useState({
        upcomingMatchesName1Row1: '', upcomingMatchesLogo1Row1: '', upcomingMatchesName2Row1: '', upcomingMatchesLogo2Row1: '',
        upcomingMatchesName1Row2: '', upcomingMatchesLogo1Row2: '', upcomingMatchesName2Row2: '', upcomingMatchesLogo2Row2: '',
        upcomingMatchesName1Row3: '', upcomingMatchesLogo1Row3: '', upcomingMatchesName2Row3: '', upcomingMatchesLogo2Row3: '',
        upcomingMatchesName1Row4: '', upcomingMatchesLogo1Row4: '', upcomingMatchesName2Row4: '', upcomingMatchesLogo2Row4: ''
    });

    const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));

    useEffect(() => {
        if (panel) setPanelData(panel);
    }, [panel]);

    return (
        <div>
            {panels.map((panel) => (setCurrentId(panel._id),
                <div>
                    <div className="Upcoming">UPCOMING</div>
                    <div className="UpcomingRow">
                        <div className="UpcomingRowTag">.</div>
                        <div className="UpcomingRowTeamName1">{panelData.upcomingMatchesName1Row1}</div>
                        <div className="UpcomingRowVsText">VS</div>
                        <div className="UpcomingRowTeamName2">{panelData.upcomingMatchesName2Row1}</div>
                        <div className="UpcomingRowTeamLogo1" style={{ backgroundImage: `url(${panelData.upcomingMatchesLogo1Row1})`}}></div>
                        <div className="UpcomingRowTeamLogo2" style={{ backgroundImage: `url(${panelData.upcomingMatchesLogo2Row1})`}}></div>
                    </div>
                    <div className="UpcomingRow">
                        <div className="UpcomingRowTag">.</div>
                        <div className="UpcomingRowTeamName1"></div>
                        <div className="UpcomingRowVsText">VS</div>
                        <div className="UpcomingRowTeamName2"></div>
                        <div className="UpcomingRowTeamLogo1"></div>
                        <div className="UpcomingRowTeamLogo2"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UpcomingMatchesBody
