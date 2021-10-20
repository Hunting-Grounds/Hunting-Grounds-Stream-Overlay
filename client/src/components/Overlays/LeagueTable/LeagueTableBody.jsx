import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Col, Row } from 'antd';

import './LeagueTable.css'

const LeagueTableBody = ({ currentId, setCurrentId }) => {

    const panels = useSelector((state) => state.panels);

    const [panelData, setPanelData] = useState({
        leagueTableNameRow1: '', leagueTableWLRow1: '', leagueTablePTSRow1: '',
        leagueTableNameRow2: '', leagueTableWLRow2: '', leagueTablePTSRow2: '',
        leagueTableNameRow3: '', leagueTableWLRow3: '', leagueTablePTSRow3: '',
        leagueTableNameRow4: '', leagueTableWLRow4: '', leagueTablePTSRow4: '',
        leagueTableNameRow5: '', leagueTableWLRow5: '', leagueTablePTSRow5: '',
        leagueTableNameRow6: '', leagueTableWLRow6: '', leagueTablePTSRow6: '',
        leagueTableNameRow7: '', leagueTableWLRow7: '', leagueTablePTSRow7: '',
        leagueTableNameRow8: '', leagueTableWLRow8: '', leagueTablePTSRow8: ''
    });

    const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));

    useEffect(() => {
        if (panel) setPanelData(panel);
    }, [panel]);

    return (
        <div className="OverlayBodyLeagueTable">
            <Row className="LeagueTableTitleRow">
                <Col span={14} className="LeagueTableTeamTitle">
                    TEAM
                </Col>
                <Col span={6}>
                    WIN/LOSS
                </Col>
                <Col span={4}>
                    PTS
                </Col>
            </Row>
            <Row className="LeagueTableRow Row1">
                <Col span={14} className="LeagueTableCol1" style={{backgroundColor: 'orange'}}>
                    {panelData.leagueTableNameRow1}
                </Col>
                <Col span={6} className="LeagueTableCol2Black">
                    {panelData.leagueTableWLRow1}
                </Col>
                <Col span={4} className="LeagueTableCol3">
                    {panelData.leagueTablePTSRow1}
                </Col>
            </Row>
            <Row className="LeagueTableRow Row2" style={{backgroundColor: 'lightskyblue'}}>
                <Col span={14} className="LeagueTableCol1">
                    {panelData.leagueTableNameRow2}
                </Col>
                <Col span={6} className="LeagueTableCol2Grey">
                    {panelData.leagueTableWLRow2}
                </Col>
                <Col span={4} className="LeagueTableCol3">
                    {panelData.leagueTablePTSRow2}
                </Col>
            </Row>
            <Row className="LeagueTableRow Row3" style={{backgroundColor: 'lightskyblue'}}>
                <Col span={14} className="LeagueTableCol1">
                    {panelData.leagueTableNameRow3}
                </Col>
                <Col span={6} className="LeagueTableCol2Grey">
                    {panelData.leagueTableWLRow3}
                </Col>
                <Col span={4} className="LeagueTableCol3">
                    {panelData.leagueTablePTSRow3}
                </Col>
            </Row>
            <Row className="LeagueTableRow Row4" style={{backgroundColor: 'lightskyblue'}}>
                <Col span={14} className="LeagueTableCol1">
                    {panelData.leagueTableNameRow4}
                </Col>
                <Col span={6} className="LeagueTableCol2Grey">
                    {panelData.leagueTableWLRow4}
                </Col>
                <Col span={4} className="LeagueTableCol3">
                    {panelData.leagueTablePTSRow4}
                </Col>
            </Row>
            <Row className="LeagueTableRow Row5" style={{backgroundColor: 'lightskyblue'}}>
                <Col span={14} className="LeagueTableCol1">
                    {panelData.leagueTableNameRow5}
                </Col>
                <Col span={6} className="LeagueTableCol2Grey">
                    {panelData.leagueTableWLRow5}
                </Col>
                <Col span={4} className="LeagueTableCol3">
                    {panelData.leagueTablePTSRow5}
                </Col>
            </Row>
            <Row className="LeagueTableRow Row6" style={{backgroundColor: 'lightskyblue'}}>
                <Col span={14} className="LeagueTableCol1">
                    {panelData.leagueTableNameRow6}
                </Col>
                <Col span={6} className="LeagueTableCol2Grey">
                    {panelData.leagueTableWLRow6}
                </Col>
                <Col span={4} className="LeagueTableCol3">
                    {panelData.leagueTablePTSRow6}
                </Col>
            </Row>
            <Row className="LeagueTableRow Row7" style={{backgroundColor: 'lightskyblue'}}>
                <Col span={14} className="LeagueTableCol1">
                    {panelData.leagueTableNameRow7}
                </Col>
                <Col span={6} className="LeagueTableCol2Grey">
                    {panelData.leagueTableWLRow7}
                </Col>
                <Col span={4} className="LeagueTableCol3">
                    {panelData.leagueTablePTSRow7}
                </Col>
            </Row>
            <Row className="LeagueTableRow Row8" style={{backgroundColor: 'lightskyblue'}}>
                <Col span={14} className="LeagueTableCol1">
                    {panelData.leagueTableNameRow8}
                </Col>
                <Col span={6} className="LeagueTableCol2Grey">
                    {panelData.leagueTableWLRow8}
                </Col>
                <Col span={4} className="LeagueTableCol3">
                    {panelData.leagueTablePTSRow8}
                </Col>
            </Row>
        </div>
    )
}

export default LeagueTableBody
