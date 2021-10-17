import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import '../style.css';

import '../Components/LowerThird/lowerthird.css'
import Webcam from '../Components/WebcamBox/Webcam'
import VetoThird from '../Components/VetoThird/VetoThird';

import { getPanels } from '../../../../actions/panels';

const WebcamVeto = () => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPanels());
    }, [currentId, dispatch]);

    return (
        <div className="OverlayBodyWebcam">
            <div className="ecslogo" />
            <Webcam currentId={currentId} setCurrentId={setCurrentId} />
            <VetoThird currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
    )
}

export default WebcamVeto
