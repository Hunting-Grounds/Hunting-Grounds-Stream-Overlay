import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import huntingGroundsLogo from '../../images/HuntingGrounds.png';
import './index.css'
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {
    UsergroupAddOutlined,
    UserAddOutlined,
} from '@ant-design/icons';

import { getPosts } from '../../actions/posts';

import Teams from './Teams/Teams';
import FormModal from './Form/FormModal';

const { Header, Content, Sider } = Layout;

const DesignDashboard = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
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
                            <Teams setCurrentId={setCurrentId}/>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default DesignDashboard;