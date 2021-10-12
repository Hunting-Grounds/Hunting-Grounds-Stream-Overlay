import React from 'react';
import Team from './Team/Team';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';


const Teams = ({ currentId, setCurrentId }) => {
    const teams = useSelector((state) => state.teams);

    return (
        !teams.length ? <Spin size="large" /> : (
            <Row justify="space-around" gutter={[24, 24]} style={{paddingBottom : '10vh'}}>
              {teams.map((team) => (
                <Col key={team._id}>
                  <Team currentId={currentId} team={team} setCurrentId={setCurrentId} />
                </Col>
              ))}
            </Row>
          )
    )
}

export default Teams;
