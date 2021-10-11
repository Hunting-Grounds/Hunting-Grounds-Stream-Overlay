import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { EditOutlined, DeleteOutlined, SettingOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import { deletePlayer } from '../../../../actions/players';

import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

import Form from './Form';
import LoadingCard from './LoadingCard';

const Player = ({ player, currentId, setCurrentId }) => {
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
        setCurrentId(player._id);
        showModal();
    };

    return (
        !player.name ? <LoadingCard /> : (
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
                    style={{ width: '22vw'}}
                    cover={
                        <img
                            style={{ height: '150px', objectFit: 'cover' }}
                            alt="example"
                            src={player.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        // eslint-disable-next-line
                        <a onClick={clicked}>
                            <EditOutlined key="edit" />
                        </a>,
                        // eslint-disable-next-line
                        <a onClick={() => dispatch(deletePlayer(player._id))}>
                            <DeleteOutlined key="delete" />
                        </a>,
                    ]}
                >
                    <Meta
                        title={player.name}
                        description={'Rating: ' + player.rating}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'KD: ' + player.kd}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'Entry: ' + player.entry}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'Maps: ' + player.maps}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'KOST: ' + player.kost}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'KPR: ' + player.kpr}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'SRV: ' + player.srv}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'1vX: ' + player.clutchwins}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'Plant: ' + player.plant}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'Disable: ' + player.disable}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'HS: ' + player.hs}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'ATK: ' + player.atk}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'DEF: ' + player.def}
                        style={{textAlign: 'left'}}
                    />
                </Card>
            </>
        )
    )
}

export default Player;