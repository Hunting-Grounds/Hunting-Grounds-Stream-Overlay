import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';

import './style.css'

const VetoMap = ({ currentId, setCurrentId }) => {

    const panels = useSelector((state) => state.panels);

    const [panelData, setPanelData] = useState({
        webcamCasterName1: '', webcamCasterName2: '', lowerThirdTeamName1: '', lowerThirdTeamLogo1: '',
        lowerThirdTeamColor1: '', lowerThirdTeamName2: '', lowerThirdTeamLogo2: '', lowerThirdTeamColor2: '',
        vetoMap1Icon: '', vetoMap1Logo: '', vetoMap1Status: '',
        vetoMap2Icon: '', vetoMap2Logo: '', vetoMap2Status: '',
        vetoMap3Icon: '', vetoMap3Logo: '', vetoMap3Status: '',
        vetoMap4Icon: '', vetoMap4Logo: '', vetoMap4Status: '',
        vetoMap5Icon: '', vetoMap5Logo: '', vetoMap5Status: '',
        vetoMap6Icon: '', vetoMap6Logo: '', vetoMap6Status: ''
    });

    const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));

    useEffect(() => {
        if (panel) setPanelData(panel);
    }, [panel]);

    return (
        <div>
            {panels.map((panel) => (setCurrentId(panel._id),
                <div>
                    <Row>
                        <Col span={4}>
                            <div className="VetoMapWhite">
                                <div className="VetoMapTeam">{panelData.vetoMap1Logo}</div>
                                <div className="VetoMapText" style={{color: (panelData.vetoMap1Status == 'BAN') ? '#c01e1e':'#46ad34', width: '100%'}}>{panelData.vetoMap1Status}</div>
                                <div className="VetoMapImage">{panelData.vetoMap1Icon}</div>
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="VetoMapGrey">
                                <div className="VetoMapTeam">{panelData.vetoMap2Logo}</div>
                                <div className="VetoMapText" style={{color: (panelData.vetoMap2Status == 'BAN') ? '#c01e1e':'#46ad34', width: '100%'}}>{panelData.vetoMap2Status}</div>
                                <div className="VetoMapImage">{panelData.vetoMap2Icon}</div>
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="VetoMapWhite">
                                <div className="VetoMapTeam">{panelData.vetoMap3Logo}</div>
                                <div className="VetoMapText" style={{color: (panelData.vetoMap3Status == 'BAN') ? '#c01e1e':'#46ad34', width: '100%'}}>{panelData.vetoMap3Status}</div>
                                <div className="VetoMapImage">{panelData.vetoMap3Icon}</div>
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="VetoMapGrey">
                                <div className="VetoMapTeam">{panelData.vetoMap4Logo}</div>
                                <div className="VetoMapText" style={{color: (panelData.vetoMap4Status == 'BAN') ? '#c01e1e':'#46ad34', width: '100%'}}>{panelData.vetoMap4Status}</div>
                                <div className="VetoMapImage">{panelData.vetoMap4Icon}</div>
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="VetoMapWhite">
                                <div className="VetoMapTeam">{panelData.vetoMap5Logo}</div>
                                <div className="VetoMapText" style={{color: (panelData.vetoMap5Status == 'BAN') ? '#c01e1e':'#46ad34', width: '100%'}}>{panelData.vetoMap5Status}</div>
                                <div className="VetoMapImage">{panelData.vetoMap5Icon}</div>
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="VetoMapGrey">
                                <div className="VetoMapTeam">{panelData.vetoMap6Logo}</div>
                                <div className="VetoMapText" style={{color: (panelData.vetoMap6Status == 'BAN') ? '#c01e1e':'#46ad34', width: '100%'}}>{panelData.vetoMap6Status}</div>
                                <div className="VetoMapImage">{panelData.vetoMap6Icon}</div>
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    )
}

export default VetoMap
