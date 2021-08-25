import React from 'react';
import { Row, Col } from 'antd';
import Player from './Player/Player';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';


const Players = ({ currentId, setCurrentId }) => {
    const players = useSelector((state) => state.players);

    return (
        !players.length ? <CircularProgress /> : (
            <Row justify="space-around" gutter={[24, 24]}>
              {players.map((player) => (
                <Col key={player._id}>
                  <Player currentId={currentId} player={player} setCurrentId={setCurrentId} />
                </Col>
              ))}
            </Row>
          )
    )
}

export default Players;
