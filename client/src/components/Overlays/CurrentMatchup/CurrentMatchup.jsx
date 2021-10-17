import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPanels } from '../../../actions/panels';
import UpperThird from '../Components/UpperThird/UpperThird'

import "./CurrentMatchup.css"

function CurrentMatchup() {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPanels());
    }, [currentId, dispatch]);

    return (
        <div className="OverlayBodyCurrentMatchup">
            <UpperThird currentId={currentId} setCurrentId={setCurrentId} />
        </div>
    )
}

export default CurrentMatchup
