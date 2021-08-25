import React from 'react';
import { Row, Col } from 'antd';
import Player from './Player/Player';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';


const Players = ({ currentId, setCurrentId }) => {
    const players = useSelector((state) => state.players);

    return (
        !players.length ? <Spin size="large" /> : (
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
