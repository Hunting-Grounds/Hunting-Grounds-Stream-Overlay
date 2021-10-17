import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

const HUDComponents = ({ currentId, setCurrentId }) => {

    const panels = useSelector((state) => state.panels);

    const [panelData, setPanelData] = useState({
        hudLeftText: '', hudRightText: '', hudLeftOperatorIcon1: '',hudLeftOperatorIcon2: '', hudRightOperatorIcon1: '', 
    hudRightOperatorIcon2: '', hudLeftTeamLogo: '', hudRightTeamLogo: '', lowerThirdTeamColor1: '', lowerThirdTeamColor2: ''
    });
    const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));

    useEffect(() => {
        if (panel) setPanelData(panel);
    }, [panel]);

    return (
        <div>
            {panels.map((panel) => (setCurrentId(panel._id),
                <div className="HUDOverlayBody">
                    <div className="HUDlogobox"></div>

                    <div className="HUDlefttextbox">
                        <div className="HUDlefttext">
                            {panelData.hudLeftText}
                        </div>
                    </div>

                    <div className="HUDlefticon1" style={{ backgroundImage: `url(${panelData.hudLeftOperatorIcon1})`}}></div>
                    <div className="HUDlefticon2" style={{ backgroundImage: `url(${panelData.hudLeftOperatorIcon2})`}}></div>

                    <div className="HUDleftdiamond1"></div>
                    <div className="HUDleftdiamond2"></div>

                    <div className="HUDleftteamlogo" style={{ backgroundColor: panelData.lowerThirdTeamColor2, backgroundImage: `url(${panelData.hudLeftTeamLogo})`}}></div>

                    <div className="HUDrightteamlogo" style={{ backgroundColor: panelData.lowerThirdTeamColor1, backgroundImage: `url(${panelData.hudRightTeamLogo})`}}></div>

                    <div className="HUDrightdiamond1"></div>
                    <div className="HUDrightdiamond2"></div>

                    <div className="HUDrighticon1" style={{ backgroundImage: `url(${panelData.hudRightOperatorIcon1})`}}></div>
                    <div className="HUDrighticon2" style={{ backgroundImage: `url(${panelData.hudRightOperatorIcon2})`}}></div>

                    <div className="HUDrighttextbox">
                        <div className="HUDrighttext">
                            {panelData.hudRightText}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HUDComponents
