import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './hud.css';

import HUDComponents from './HUDComponents';

import { getPanels } from '../../../actions/panels';

const HUD = () => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPanels());
    }, [currentId, dispatch]);

    return (
        <div>
            <HUDComponents currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
    )
}

export default HUD
