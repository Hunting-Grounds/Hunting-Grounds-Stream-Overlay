import React, {useState} from 'react'
import './ControlPanel.css';
import 'antd/dist/antd.css';
import {
  Card, Form, Row, Col,
} from 'antd';
import axios from 'axios';
import ControlPanelTabs from './Tabs/ControlPanelTabs';

// const BASE_URI = process.env.BASE_API_URI;
const BASE_URI = 'http://localhost:5000/';

const ControlPanel = () => {

    const [authLevel, setAuthLevel] = useState('producer');

    const changeAuthLevel = (value) => {
        setAuthLevel(value);
    };

    const handleSubmit = async (values) => {
        const { email, password } = values;
        const res = await axios.post(`${BASE_URI}/${authLevel}/signin`, {
          email,
          password,
        });

        console.log(authLevel);
        console.log(res);
        };

    return (
        <div className="ControlPanelBody">
            <Row gutter={[0,0]} type="flex" justify="center">
              <Col className="gutter-row" lg={20} sm={24} xs={24}>
                <div className="controlPanelCardAlignment controlPanelCardPadding">
                  <Card className="controlPanelCardStyling" style={{ boxShadow: '5px 8px 24px 5px rgba(0, 0, 0, 0.2)' }}>
                    <h1 className="centerText">Hunting Grounds Stream Overlay Control Panel</h1>
                    <Form
                        name="basic"
                        type="flex"
                        justify="center"
                        align="middle"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={handleSubmit}
                    >
                      <ControlPanelTabs changeAuthLevel={changeAuthLevel}/>
                    </Form>
                  </Card>
                </div>
              </Col>
            </Row>
        </div>
    )
}
    
export default ControlPanel;