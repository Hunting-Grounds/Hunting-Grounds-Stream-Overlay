import React from 'react';
import 'antd/dist/antd.css';
import { Skeleton, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

function LoadingCard() {
  return (
    <>
      <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={true} avatar active>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </>
  );
}

export default LoadingCard;