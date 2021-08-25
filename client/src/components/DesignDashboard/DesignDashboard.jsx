import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './index.css'
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

import { getTeams } from '../../actions/teams';

import Teams from './Teams/Teams';
import FormModal from './Form/FormModal';

const { Content, Sider } = Layout;

const DesignDashboard = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeams());
    }, [currentId, dispatch]);

    return (
        <div>
            <Layout>
                <Sider
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
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <Content className="site-layout-background" style={{ overflow: 'initial' }}>
                        <div style={{ justifyContent: 'space-evenly', padding: 24, textAlign: 'center'}}>
                            <Teams currentId={currentId} setCurrentId={setCurrentId} />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default DesignDashboard;