import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPanels } from '../../../actions/panels';

import UpperThird from '../Components/UpperThird/UpperThird';
import UpcomingMatchesBody from './UpcomingMatchesBody';

import './PlaydayUpcomingMatches.css';

const PlaydayUpcomingMatches = () => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPanels());
    }, [currentId, dispatch]);

    return (
        <div className="OverlayBodyUpcoming">
            <UpperThird currentId={currentId} setCurrentId={setCurrentId} />
            <UpcomingMatchesBody currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
    )
}

export default PlaydayUpcomingMatches
