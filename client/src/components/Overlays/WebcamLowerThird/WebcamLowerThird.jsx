import React from 'react';
import './style.css';

function WebcamLowerThird() {
    return (
        <div className="OverlayBody">
            <div className="ecslogo" />
            <div className="LeftWebcam">
                <h1 className="LeftWebcamText">WEBCAM HERE</h1>
                <div className="LeftWebcamName">
                    <h1 className="LeftWebcamNameText">TEAM 1 NAME</h1>
                </div>
            </div>
            <div className="RightWebcam">
                <h1 className="RightWebcamText">WEBCAM HERE</h1>
                <div className="RightWebcamName">
                    <h1 className="RightWebcamNameText">TEAM 2 NAME</h1>
                </div>
            </div>
            <div className="LowerThird">
                <div className="LowerThirdBox">.</div>
                <h1 className="LowerThirdTitle">PLAY DAY 7 - PREMIER DIVISION</h1>
                <h3 className="LowerThirdSubtitle">A LONG SUBTITLE HERE</h3>
                <div>
                    <div className="LowerThirdVsBox">
                        <div className="LowerThirdVsText">
                            VERSUS
                        </div>
                    </div>
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

export default WebcamLowerThird
