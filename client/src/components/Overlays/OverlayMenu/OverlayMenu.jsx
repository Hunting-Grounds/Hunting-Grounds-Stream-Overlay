import React from 'react'
import 'antd/dist/antd.css';
import { Divider, Row, Col, Card } from 'antd';

function OverlayMenu() {
    return (
        <div>
            <Row justify="space-around" gutter={[24, 24]}>
                <Col>
                    <Card>
                        <a><h1>League Table</h1></a>
                        <Divider />
                        <a><h1>League Table</h1></a>
                        <Divider />
                        <a><h1>League Table</h1></a>
                        <Divider />
                        <a><h1>League Table</h1></a>
                        <Divider />
                        <a><h1>League Table</h1></a>
                        <Divider />
                        <a><h1>League Table</h1></a>
                        <Divider />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default OverlayMenu;