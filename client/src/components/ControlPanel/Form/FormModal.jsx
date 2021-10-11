import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Menu } from 'antd';

import { UserAddOutlined } from '@ant-design/icons';

import Form from './Form';

const FormModal = ({currentId, setCurrentId}) => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    return (
        <>
            <a type="primary" onClick={showModal}>
            <Menu.Item style={{marginLeft: '25px'}} key="1" icon={<UserAddOutlined />}>
                Create a Panel
            </Menu.Item>
            </a>
            <Modal
                visible={visible}
                width={500}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                      Return
                    </Button>,
                ]}
            >
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Modal>
        </>
    );
};

export default FormModal;