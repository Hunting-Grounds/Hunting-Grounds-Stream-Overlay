import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { EditOutlined, DeleteOutlined, SettingOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import { deletePanel } from '../../../../actions/panels';

import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

import Form from './Form';
import LoadingCard from './LoadingCard';

const Panel = ({ panel, currentId, setCurrentId }) => {
    const { Meta } = Card;
    const dispatch = useDispatch();

    //
    const [visible, setVisible] = React.useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };
    //

    const clicked = () => {
        setCurrentId(panel._id);
        showModal();
    };

    return (
        !panel.name ? <LoadingCard /> : (
            <>
                {}
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
                {}
                <Card
                    style={{ width: 300 }}
                    cover={
                        <img
                            style={{ height: '150px', objectFit: 'cover' }}
                            alt="example"
                            src={panel.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        // eslint-disable-next-line
                        <a onClick={clicked}>
                            <EditOutlined key="edit" />
                        </a>,
                        // eslint-disable-next-line
                        <a onClick={() => dispatch(deletePanel(panel._id))}>
                            <DeleteOutlined key="delete" />
                        </a>,
                    ]}
                >
                    <Meta
                        title={panel.name}
                        description={'Rating: ' + panel.rating}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'KD: ' + panel.kd}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'Entry: ' + panel.entry}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'Maps: ' + panel.maps}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'KOST: ' + panel.kost}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'KPR: ' + panel.kpr}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'SRV: ' + panel.srv}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'1vX: ' + panel.clutchwins}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'Plant: ' + panel.plant}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'Disable: ' + panel.disable}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'HS: ' + panel.hs}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'ATK: ' + panel.atk}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'DEF: ' + panel.def}
                        style={{textAlign: 'left'}}
                    />
                </Card>
            </>
        )
    )
}

export default Panel;