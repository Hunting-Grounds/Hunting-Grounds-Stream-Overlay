import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

function Navbar() {
    return (
        <div>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">Manage Teams</Menu.Item>
                        <Menu.Item key="2">Manage Players</Menu.Item>
                        <Menu.Item key="3">Overlays</Menu.Item>
                    </Menu>
                </Header>
            </Layout>
            <div style={{marginTop: '64px'}}/>
        </div>
    )
}

export default Navbar