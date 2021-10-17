import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './index.css'
import 'antd/dist/antd.css';
import { Layout } from 'antd';

import { getTeams } from '../../actions/teams';

import Teams from './Teams/Teams';
import FormModal from './Form/FormModal';

const { Content } = Layout;

const TeamManagement = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeams());
    }, [currentId, dispatch]);

    return (
        <div>
            <Layout>
                <FormModal currentId={currentId} setCurrentId={setCurrentId}/>
                <Layout className="site-layout">
                    <Content className="site-layout-background" style={{ overflow: 'auto' }}>
                        <div style={{ justifyContent: 'space-evenly', padding: 24, textAlign: 'center'}}>
                            <Teams currentId={currentId} setCurrentId={setCurrentId}/>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default TeamManagement;