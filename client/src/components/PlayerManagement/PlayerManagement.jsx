import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './index.css'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
// import { UserAddOutlined } from '@ant-design/icons';

import { getPlayers } from '../../actions/players';

import Players from './Players/Players';
import FormModal from './Form/FormModal';

const { Content } = Layout;

const PlayerManagement = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlayers());
    }, [currentId, dispatch]);

    return (
        <div>
            <Layout>
                <FormModal currentId={currentId} setCurrentId={setCurrentId}/>
                <Layout className="site-layout">
                    <Content className="site-layout-background" style={{ overflow: 'auto' }}>
                        <div style={{ justifyContent: 'space-evenly', padding: 24, textAlign: 'center'}}>
                            <Players currentId={currentId} setCurrentId={setCurrentId} />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default PlayerManagement;