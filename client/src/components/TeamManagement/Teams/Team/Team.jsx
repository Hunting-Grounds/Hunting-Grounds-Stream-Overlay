import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { EditOutlined, DeleteOutlined, SettingOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import { deleteTeam } from '../../../../actions/teams';

import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

import Form from './Form';
import LoadingCard from './LoadingCard';

const Team = ({ team, currentId, setCurrentId }) => {
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
        setCurrentId(team._id);
        showModal();
    };

    return (
        !team.players ? <LoadingCard /> : (
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
                            style={{ height: '150px', objectFit: 'contain', backgroundColor: team.themeColour, }}
                            alt="example"
                            src={team.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        // eslint-disable-next-line
                        <a onClick={clicked}>
                            <EditOutlined key="edit" />
                        </a>,
                        // eslint-disable-next-line
                        <a onClick={() => dispatch(deleteTeam(team._id))}>
                            <DeleteOutlined key="delete" />
                        </a>,
                    ]}
                >
                    <Meta
                        title={team.fullName}
                        description={team.displayName}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'Tag: ' + team.tag}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'Points: ' + team.points}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'Record: ' + team.records}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'Theme Colour: ' + team.themeColour}
                        style={{textAlign: 'left'}}
                    />
                    <Meta
                        description={'Players: ' + team.players.map((player) => ` ${player}`)}
                        style={{textAlign: 'left'}}
                    />
                </Card>
            </>
        )
    )
}

export default Team;