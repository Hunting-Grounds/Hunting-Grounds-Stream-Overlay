import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { EditOutlined, DeleteOutlined, SettingOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../../actions/posts';

const Team = ({ post, setCurrentId }) => {
    const { Meta } = Card;
    const dispatch = useDispatch();

    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    style={{ height: '150px', objectFit: 'cover' }}
                    alt="example"
                    src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                <a onClick={() => setCurrentId(post._id)}>
                    <EditOutlined key="edit" />
                </a>,
                <a onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteOutlined key="delete" />
                </a>,
            ]}
        >
            <Meta
                title={post.creator}
                description={post.message}
            />
        </Card>
    )
}

export default Team;