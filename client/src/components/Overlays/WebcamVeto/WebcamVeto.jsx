import React from 'react';
import './style.css';

function WebcamVeto() {
    return (
        <div className="OverlayBodyWV">
            <div className="ecslogo" />
            <div className="LeftWebcam">
                <h1 className="LeftWebcamText">WEBCAM HERE</h1>
                <div className="LeftWebcamName">
                    <h1 className="LeftWebcamNameText">EBAC</h1>
                </div>
            </div>
            <div className="RightWebcam">
                <h1 className="RightWebcamText">WEBCAM HERE</h1>
                <div className="RightWebcamName">
                    <h1 className="RightWebcamNameText">ELDER BRAIN</h1>
                </div>
            </div>
            <div className="LowerThird">
            <div className="VetoBox">
                        <div className="VetoBoxVetoText">
                            VETO
                        </div>
                    </div>
                <div>
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
        </div>
    )
}

export default WebcamVeto
