import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Clock from '../Clock/Clock';

import './UpperThird.css'

const UpperThird = ({ currentId, setCurrentId }) => {

    const panels = useSelector((state) => state.panels);

    const [panelData, setPanelData] = useState({
        upperThirdTitle: '', upperThirdSubtitle: '',
    });

    const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));

    useEffect(() => {
        if (panel) setPanelData(panel);
    }, [panel]);

    return (
        <div>
            {panels.map((panel) => (setCurrentId(panel._id),
                <div className="UpperThird">
                    <div className="UpperThirdBox"/>
                    <h1 className="UpperThirdTitle">{panelData.upperThirdTitle}</h1><h1 className="UpperThirdTime"><Clock/></h1>
                    <h3 className="UpperThirdSubtitle">.   {panelData.upperThirdSubtitle}</h3>
                </div>
            ))}
        </div>
    )
}

export default UpperThird
