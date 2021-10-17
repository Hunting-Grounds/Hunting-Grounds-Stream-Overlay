import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import './style.css';

const Webcam = ({ currentId, setCurrentId }) => {
    
    const panels = useSelector((state) => state.panels);

    const [panelData, setPanelData] = useState({
        webcamCasterName1: '', webcamCasterName2: '',
        lowerThirdTitle: '', lowerThirdSubtitle: '', lowerThirdTeamName1: '', lowerThirdTeamLogo1: '',
        lowerThirdTeamColor1: '', lowerThirdTeamName2: '', lowerThirdTeamLogo2: '', lowerThirdTeamColor2: ''
    });
    const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));

    useEffect(() => {
        if (panel) setPanelData(panel);
    }, [panel]);


    return (
        <div>
            {panels.map((panel) => (setCurrentId(panel._id),
                <div>
                    <div className="LeftWebcam">
                        <h1 className="LeftWebcamText">WEBCAM GOES HERE</h1>
                        <div className="LeftWebcamName">
                            <h1 className="LeftWebcamNameText">{panelData.webcamCasterName1}</h1>
                        </div>
                    </div>
                    <div className="RightWebcam">
                        <h1 className="RightWebcamText">WEBCAM GOES HERE</h1>
                        <div className="RightWebcamName">
                            <h1 className="RightWebcamNameText">{panelData.webcamCasterName2}</h1>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Webcam