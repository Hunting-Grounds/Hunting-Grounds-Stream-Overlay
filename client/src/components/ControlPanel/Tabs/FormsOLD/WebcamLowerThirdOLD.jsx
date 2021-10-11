import React from 'react';
import 'antd/dist/antd.css';
import {
  Input, Form, Button,
} from 'antd';

const WebcamLowerThird = () => (
  <>
    <Form.Item name="team1Title">
      <Input placeholder="Team 1 Title" size="large" />
    </Form.Item>

    <Form.Item name="team2Title">
      <Input placeholder="Team 2 Title" size="large" />
    </Form.Item>

    <Form.Item name="lowerThirdTitle">
      <Input placeholder="Lower Third Title" size="large" />
    </Form.Item>

    <Form.Item name="lowerThirdSubtitle">
      <Input placeholder="Lower Third Subtitle" size="large" />
    </Form.Item>

    <Form.Item name="lowerThirdTeam1Name">
      <Input placeholder="Lower Third Team 1 Name" size="large" />
    </Form.Item>

    <Form.Item name="lowerThirdTeam1Logo">
      <Input placeholder="Lower Third Team 1 Logo" size="large" />
    </Form.Item>

    <Form.Item name="lowerThirdTeam2Name">
      <Input placeholder="Lower Third Team 2 Name" size="large" />
    </Form.Item>

    <Form.Item name="lowerThirdTeam2Logo">
      <Input placeholder="Lower Third Team 2 Logo" size="large" />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 20, span: 20 }}>
      <Button block type="primary" htmlType="submit" size="large"> Update </Button>
    </Form.Item>
  </>
);

export default WebcamLowerThird;
