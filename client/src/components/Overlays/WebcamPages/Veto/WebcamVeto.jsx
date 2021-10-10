import React from 'react';
import './style.css';
import Webcam from '../WebcamBox/Webcam'
import VetoMap from './Maps/VetoMap';

function WebcamVeto() {
    return (
        <div className="OverlayBodyWV">
            <div className="ecslogo" />
            <Webcam/>
            <div className="LowerThird">
                <div>
                    <div className="VetoBox">
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
            {/* <div className="LowerThird">
                <div className="VetoBox">
                    <div className="VetoBoxVetoText">
                        VETO
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
            </div> */}
        </div>
    )
}

export default WebcamVeto
