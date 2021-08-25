import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Menu.Item key="1"><Link to="/db/teams">Manage Teams</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/db/players">Manage Players</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/controlpanel">Control Panel</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/overlays">Overlays</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/login">Login</Link></Menu.Item>
                    </Menu>
                </Header>
            </Layout>
            <div style={{marginTop: '64px'}}/>
        </div>
    )
}

export default Navbar