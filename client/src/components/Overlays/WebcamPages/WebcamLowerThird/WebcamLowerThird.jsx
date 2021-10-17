import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './webcamlowerthird.css';
import '../style.css';
import '../Components/LowerThird/lowerthird.css'
import Webcam from '../Components/WebcamBox/Webcam'
import LowerThird from '../Components/LowerThird/LowerThird'

import { getPanels } from '../../../../actions/panels';

const WebcamLowerThird = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPanels());
    }, [currentId, dispatch]);

    return (
        <div className="OverlayBodyWebcam">
            <div className="ecslogo" />
            <Webcam currentId={currentId} setCurrentId={setCurrentId}/>
            <LowerThird currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
    )
}

export default WebcamLowerThird
