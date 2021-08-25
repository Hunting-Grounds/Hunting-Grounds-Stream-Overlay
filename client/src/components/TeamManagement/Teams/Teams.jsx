import React from 'react';
import Team from './Team/Team';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';


const Teams = ({ currentId, setCurrentId }) => {
    const teams = useSelector((state) => state.teams);

    return (
        !teams.length ? <CircularProgress /> : (
            <Row justify="space-around" gutter={[24, 24]}>
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
