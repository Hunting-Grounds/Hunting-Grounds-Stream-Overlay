import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';

import './veto.css';
import VetoMap from './Maps/VetoMap';

const VetoThird = ({ currentId, setCurrentId }) => {

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
                    <Row>
                        <div className="VetoTextBox">
                            <div className="VetoBoxVetoText">
                                VETO
                            </div>
                        </div>
                        <Col span={18} offset={1}>
                            <VetoMap currentId={currentId} setCurrentId={setCurrentId} />
                        </Col>
                        <div style={{}}>
                            <div className="VetoThirdTeam1" style={{ backgroundColor: panelData.lowerThirdTeamColor1 }}>
                                <div className="LowerThirdTeam1Logo" style={{ backgroundImage: `url(${panelData.lowerThirdTeamLogo1})`}}></div>
                                <div className="LowerThirdTeam1Name">{panelData.lowerThirdTeamName1}</div>
                            </div>
                            <div className="VetoThirdTeam2" style={{ backgroundColor: panelData.lowerThirdTeamColor2 }}>
                                <div className="LowerThirdTeam2Logo" style={{ backgroundImage: `url(${panelData.lowerThirdTeamLogo2})`}}></div>
                                <div className="LowerThirdTeam2Name">{panelData.lowerThirdTeamName2}</div>
                            </div>
                        </div>
                    </Row>
                </div>
            ))}
        </div>
    )
}

export default VetoThird
