import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './LeagueTable.css'

const LeagueTableBody = ({ currentId, setCurrentId }) => {

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
            
        </div>
    )
}

export default LeagueTableBody
