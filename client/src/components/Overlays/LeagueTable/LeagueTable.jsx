import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPanels } from '../../../actions/panels';
import UpperThird from "../Components/UpperThird/UpperThird"
import LeagueTableBody from './LeagueTableBody';

import './LeagueTable.css'

const LeagueTable = () => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPanels());
    }, [currentId, dispatch]);

    return (
        <div>
            <UpperThird currentId={currentId} setCurrentId={setCurrentId}/>
            <LeagueTableBody currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
    )
}

export default LeagueTable;