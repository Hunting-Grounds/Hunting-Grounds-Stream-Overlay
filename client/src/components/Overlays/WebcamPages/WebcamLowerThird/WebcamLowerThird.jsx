import React from 'react';
import './style.css';
import Webcam from '../WebcamBox/Webcam'

function WebcamLowerThird(){
    return (
        <div className="OverlayBodyWCLT">
            <div className="ecslogo" />
            <Webcam/>
            <div className="LowerThird">
                <div className="LowerThirdBox">.</div>
                <h1 className="LowerThirdTitle">PLAY DAY 7 - PREMIER DIVISION</h1>
                <h3 className="LowerThirdSubtitle">LIONSCREED AND AQUALIX BATTLE FOR SECOND PLACE</h3>
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
