import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

import DataManagerForm from './Forms/DataManagerForm';
import ProducerForm from './Forms/ProducerForm';
import AdminForm from './Forms/AdminForm';

const { TabPane } = Tabs;

const LoginTabs = ({ changeAuthLevel }) => {
  const handleChange = (key) => {
    if (key === '1') {
      changeAuthLevel('producer');
    } else if (key === '2') {
      changeAuthLevel('datamanager');
    } else if (key === '3') {
      changeAuthLevel('admin');
    }
  };

  return (
    <>
      <br />
      <Tabs
        defaultActiveKey="1"
        centered
        size="50%"
        onChange={handleChange}
      >
        <TabPane tab="Producer" key="1">
          <ProducerForm />
        </TabPane>
        <TabPane tab="Data Manager" key="2">
          <DataManagerForm />
        </TabPane>
        <TabPane tab="Admin" key="3">
          <AdminForm />
        </TabPane>
      </Tabs>
    </>
  );
};

export default LoginTabs;
