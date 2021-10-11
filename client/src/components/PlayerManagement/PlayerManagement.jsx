import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './index.css'
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
// import { UserAddOutlined } from '@ant-design/icons';

import { getPlayers } from '../../actions/players';

import Players from './Players/Players';
import FormModal from './Form/FormModal';

const { Content, Sider } = Layout;

const PlayerManagement = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlayers());
    }, [currentId, dispatch]);

    return (
        <div>
            <Layout>
                {/* <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <Menu theme="dark" mode="inline">
                        <FormModal currentId={currentId} setCurrentId={setCurrentId}/>
                        <Menu.Item key="2" icon={<UserAddOutlined />}>
                            Create a Player
                        </Menu.Item>
                    </Menu>
                </Sider> */}
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