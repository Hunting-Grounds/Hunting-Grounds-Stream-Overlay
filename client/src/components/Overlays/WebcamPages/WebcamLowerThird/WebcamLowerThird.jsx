import React from 'react';
import './webcamlowerthird.css';
import '../style.css';
import '../Components/LowerThird/lowerthird.css'
import Webcam from '../Components/WebcamBox/Webcam'
import LowerThird from '../Components/LowerThird/LowerThird'

const WebcamLowerThird = ({webcamLowerThirdData}) => {
    return (
        <div className="OverlayBodyWebcam">
            <div className="ecslogo" />
            <Webcam/>
            <LowerThird webcamLowerThirdData={webcamLowerThirdData}/>
        </div>
    )
}

export default WebcamLowerThird
