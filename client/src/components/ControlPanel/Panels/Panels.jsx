import React from 'react';
import Panel from './Panel/Panel';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';


const Panels = ({ currentId, setCurrentId }) => {
    const panels = useSelector((state) => state.panels);

    return (
        !panels.length ? <Spin size="large" /> : (
            <Row justify="space-around" gutter={[24, 24]}>
              {panels.map((panel) => (
                <Col key={panel._id}>
                  <Panel currentId={currentId} panel={panel} setCurrentId={setCurrentId} />
                </Col>
              ))}
            </Row>
          )
    )
}

export default Panels;
