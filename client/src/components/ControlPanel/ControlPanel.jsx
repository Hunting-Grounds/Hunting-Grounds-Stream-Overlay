import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import 'antd/dist/antd.css';
import { Layout } from 'antd';

import { getPanels } from '../../actions/panels';

import { getTeams } from '../../actions/teams';

import Panels from './Panels/Panels';

const { Content } = Layout;

const ControlPanel = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPanels());
    }, [currentId, dispatch]);

    const [currentTeamId, setCurrentTeamId] = useState(0);

    useEffect(() => {
        dispatch(getTeams());
    }, [currentTeamId, dispatch]);

    return (
        <div>
            <Layout>
                <Layout className="site-layout">
                    <Content className="site-layout-background" style={{ overflow: 'initial' }}>
                        <div style={{ justifyContent: 'space-evenly', padding: 24, textAlign: 'center' }}>
                            <Panels currentId={currentId} setCurrentId={setCurrentId} currentTeamId={currentTeamId} setCurrentTeamId={setCurrentTeamId}/>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default ControlPanel;