import React from 'react';
import '../style.css';
import './veto.css';
import Webcam from '../Components/WebcamBox/Webcam'
import VetoMap from './Maps/VetoMap';

function WebcamVeto() {
    return (
        <div className="OverlayBodyWebcam">
            <div className="ecslogo" />
            <Webcam/>
            <div className="LowerThird">
                <div>
                    <div className="VetoTextBox">
                        <div className="VetoBoxVetoText">
                            VETO
                        </div>
                    </div>
                    <VetoMap/>
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
