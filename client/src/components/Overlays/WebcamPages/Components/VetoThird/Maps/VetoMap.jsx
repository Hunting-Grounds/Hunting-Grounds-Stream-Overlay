import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';

import './style.css'

const VetoMap = ({ currentId, setCurrentId }) => {

    const panels = useSelector((state) => state.panels);

    const [panelData, setPanelData] = useState({
        webcamCasterName1: '', webcamCasterName2: '', lowerThirdTeamName1: '', lowerThirdTeamLogo1: '',
        lowerThirdTeamColor1: '', lowerThirdTeamName2: '', lowerThirdTeamLogo2: '', lowerThirdTeamColor2: '',
        vetoMap1Icon: '', vetoMap2Icon: '', vetoMap3Icon: '',
        vetoMap4Icon: '', vetoMap5Icon: '', vetoMap6Icon: ''
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
                                <div className="VetoMapTeam" style={{ backgroundColor: panelData.lowerThirdTeamColor1, backgroundImage: `url(${panelData.lowerThirdTeamLogo1})`}}></div>
                                <div className="VetoMapText" style={{color: '#c01e1e', width: '100%',}}>BAN</div>
                                <div className="VetoMapImage" style={{ backgroundImage: `url(${panelData.vetoMap1Icon})`}}></div>
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="VetoMapGrey">
                                <div className="VetoMapTeam" style={{ backgroundColor: panelData.lowerThirdTeamColor2, backgroundImage: `url(${panelData.lowerThirdTeamLogo2})`}}></div>
                                <div className="VetoMapText" style={{color: '#c01e1e', width: '100%',}}>BAN</div>
                                <div className="VetoMapImage" style={{ backgroundImage: `url(${panelData.vetoMap2Icon})`}}></div>
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="VetoMapWhite">
                                <div className="VetoMapTeam" style={{ backgroundColor: panelData.lowerThirdTeamColor1, backgroundImage: `url(${panelData.lowerThirdTeamLogo1})`}}></div>
                                <div className="VetoMapText" style={{color: '#c01e1e', width: '100%',}}>BAN</div>
                                <div className="VetoMapImage" style={{ backgroundImage: `url(${panelData.vetoMap3Icon})`}}></div>
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="VetoMapGrey">
                                <div className="VetoMapTeam" style={{ backgroundColor: panelData.lowerThirdTeamColor2, backgroundImage: `url(${panelData.lowerThirdTeamLogo2})`}}></div>
                                <div className="VetoMapText" style={{color: '#c01e1e', width: '100%',}}>BAN</div>
                                <div className="VetoMapImage" style={{ backgroundImage: `url(${panelData.vetoMap4Icon})`}}></div>
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="VetoMapWhite">
                                <div className="VetoMapTeam" style={{ backgroundColor: panelData.lowerThirdTeamColor1, backgroundImage: `url(${panelData.lowerThirdTeamLogo1})`}}></div>
                                <div className="VetoMapText" style={{color: '#46ad34', width: '100%'}}>PICK</div>
                                <div className="VetoMapImage" style={{ backgroundImage: `url(${panelData.vetoMap5Icon})`}}></div>
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="VetoMapGrey">
                                <div className="VetoMapTeam" style={{ backgroundColor: panelData.lowerThirdTeamColor2, backgroundImage: `url(${panelData.lowerThirdTeamLogo2})`}}></div>
                                <div className="VetoMapText" style={{color: '#46ad34', width: '100%'}}>PICK</div>
                                <div className="VetoMapImage" style={{ backgroundImage: `url(${panelData.vetoMap6Icon})`}}></div>
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    )
}

export default VetoMap
