import React from 'react';
import './hud.css';

function HUD() {
    return (
        <div className="HUDOverlayBody">
            <div className="HUDlogobox"></div>

            <div className="HUDlefttextbox">
                <div className="HUDlefttext">
                PLAY DAY 7
                </div>
            </div>

            <div className="HUDlefticon1"></div>
            <div className="HUDlefticon2"></div>

            <div className="HUDleftdiamond1"></div>
            <div className="HUDleftdiamond2"></div>

            <div className="HUDleftteamlogo"></div>
            
            <div className="HUDrightteamlogo"></div>

            <div className="HUDrightdiamond1"></div>
            <div className="HUDrightdiamond2"></div>

            <div className="HUDrighticon1"></div>
            <div className="HUDrighticon2"></div>

            <div className="HUDrighttextbox">
                <div className="HUDrighttext">
                    OFL PLAY
                </div>
            </div> 
        </div>
    )
}

export default HUD
