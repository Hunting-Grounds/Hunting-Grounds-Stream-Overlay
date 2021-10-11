import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

import { getPanels } from '../../actions/panels.js';

import Panels from './Panels/Panels';
import FormModal from './Form/FormModal';

const { Content, Sider } = Layout;

const ControlPanel = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPanels());
    }, [currentId, dispatch]);

    return (
        <div>
            <Layout>
                <Layout className="site-layout">
                    <Content className="site-layout-background" style={{ overflow: 'initial' }}>
                        <div style={{ justifyContent: 'space-evenly', padding: 24, textAlign: 'center'}}>
                            <Panels currentId={currentId} setCurrentId={setCurrentId} />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default ControlPanel;