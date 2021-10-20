import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Col, Row } from 'antd';

import './LeagueTable.css'

import DBImage from '../Components/DBImage/DBImage';
import { getSingleFiles } from '../../../api/index.js';

const LeagueTableBody = ({ currentId, setCurrentId }) => {

    /////// IMAGE STUFF ////////

    const [singleFiles, setSingleFiles] = useState([]);

    const getSingleFileslist = async () => {
        try {
            const fileslist = await getSingleFiles();
            setSingleFiles(fileslist);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleFileslist();
    }, []);

    ///////////////////////////

    const panels = useSelector((state) => state.panels);

    const [panelData, setPanelData] = useState({
        leagueTableNameRow1: '', leagueTableWLRow1: '', leagueTablePTSRow1: '', leagueTableColorRow1: '',
        leagueTableNameRow2: '', leagueTableWLRow2: '', leagueTablePTSRow2: '', leagueTableColorRow2: '',
        leagueTableNameRow3: '', leagueTableWLRow3: '', leagueTablePTSRow3: '', leagueTableColorRow3: '',
        leagueTableNameRow4: '', leagueTableWLRow4: '', leagueTablePTSRow4: '', leagueTableColorRow4: '',
        leagueTableNameRow5: '', leagueTableWLRow5: '', leagueTablePTSRow5: '', leagueTableColorRow5: '',
        leagueTableNameRow6: '', leagueTableWLRow6: '', leagueTablePTSRow6: '', leagueTableColorRow6: '',
        leagueTableNameRow7: '', leagueTableWLRow7: '', leagueTablePTSRow7: '', leagueTableColorRow7: '',
        leagueTableNameRow8: '', leagueTableWLRow8: '', leagueTablePTSRow8: '', leagueTableColorRow8: '',
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
            <Row className="LeagueTableRow Row1" style={{ backgroundColor: panelData.leagueTableColorRow1 }}>
                <Col span={1}>
                    {singleFiles.filter(file => file.fileParent === "leagueTableLogoRow1").map((file, index) =>
                        <DBImage bgColor={panelData.leagueTableColorRow1} cName="LeagueTableLogo" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                    )}
                </Col>
                <Col span={13} className="LeagueTableCol1" style={{ backgroundColor: panelData.leagueTableColorRow1 }}>
                    {panelData.leagueTableNameRow1}
                </Col>
                <Col span={6} className="LeagueTableCol2Black">
                    <span className="VerticalAlign">
                        {panelData.leagueTableWLRow1}
                    </span>
                </Col>
                <Col span={4} className="LeagueTableCol3">
                    <span className="VerticalAlign">
                        {panelData.leagueTablePTSRow1}
                    </span>
                </Col>
            </Row>
            <Row className="LeagueTableRow Row2" style={{ backgroundColor: panelData.leagueTableColorRow2 }}>
                <Col span={1}>
                    {singleFiles.filter(file => file.fileParent === "leagueTableLogoRow2").map((file, index) =>
                        <DBImage bgColor={panelData.leagueTableColorRow2} cName="LeagueTableLogo" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                    )}
                </Col>
                <Col span={13} className="LeagueTableCol1">
                    {panelData.leagueTableNameRow2}
                </Col>
                <Col span={6} className="LeagueTableCol2Grey">
                    <span className='VerticalAlign'>
                        {panelData.leagueTableWLRow2}
                    </span>
                </Col>
                <Col span={4} className="LeagueTableCol3">
                    <span className="VerticalAlign">
                        {panelData.leagueTablePTSRow2}
                    </span>
                </Col>
            </Row>
            <Row className="LeagueTableRow Row3" style={{ backgroundColor: panelData.leagueTableColorRow3 }}>
                <Col span={1}>
                    {singleFiles.filter(file => file.fileParent === "leagueTableLogoRow3").map((file, index) =>
                        <DBImage bgColor={panelData.leagueTableColorRow3} cName="LeagueTableLogo" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                    )}
                </Col>
                <Col span={13} className="LeagueTableCol1">
                    {panelData.leagueTableNameRow3}
                </Col>
                <Col span={6} className="LeagueTableCol2Black">
                    <span className="VerticalAlign">
                        {panelData.leagueTableWLRow3}
                    </span>
                </Col>
                <Col span={4} className="LeagueTableCol3">
                    <span className="VerticalAlign">
                        {panelData.leagueTablePTSRow3}
                    </span>
                </Col>
            </Row>
            <Row className="LeagueTableRow Row4" style={{ backgroundColor: panelData.leagueTableColorRow4 }}>
                <Col span={1}>
                    {singleFiles.filter(file => file.fileParent === "leagueTableLogoRow4").map((file, index) =>
                        <DBImage bgColor={panelData.leagueTableColorRow4} cName="LeagueTableLogo" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                    )}
                </Col>
                <Col span={13} className="LeagueTableCol1">
                    {panelData.leagueTableNameRow4}
                </Col>
                <Col span={6} className="LeagueTableCol2Grey">
                    <span className="VerticalAlign">
                        {panelData.leagueTableWLRow4}
                    </span>
                </Col>
                <Col span={4} className="LeagueTableCol3">
                    <span className="VerticalAlign">
                        {panelData.leagueTablePTSRow4}
                    </span>
                </Col>
            </Row>
            <Row className="LeagueTableRow Row5" style={{ backgroundColor: panelData.leagueTableColorRow5 }}>
                <Col span={1}>
                    {singleFiles.filter(file => file.fileParent === "leagueTableLogoRow5").map((file, index) =>
                        <DBImage bgColor={panelData.leagueTableColorRow5} cName="LeagueTableLogo" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                    )}
                </Col>
                <Col span={13} className="LeagueTableCol1">
                    {panelData.leagueTableNameRow5}
                </Col>
                <Col span={6} className="LeagueTableCol2Black">
                    <span className="VerticalAlign">
                        {panelData.leagueTableWLRow5}
                    </span>
                </Col>
                <Col span={4} className="LeagueTableCol3">
                    <span className="VerticalAlign">
                        {panelData.leagueTablePTSRow5}
                    </span>
                </Col>
            </Row>
            <Row className="LeagueTableRow Row6" style={{ backgroundColor: panelData.leagueTableColorRow6 }}>
                <Col span={1}>
                    {singleFiles.filter(file => file.fileParent === "leagueTableLogoRow6").map((file, index) =>
                        <DBImage bgColor={panelData.leagueTableColorRow6} cName="LeagueTableLogo" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                    )}
                </Col>
                <Col span={13} className="LeagueTableCol1">
                    {panelData.leagueTableNameRow6}
                </Col>
                <Col span={6} className="LeagueTableCol2Grey">
                    <span className="VerticalAlign">
                        {panelData.leagueTableWLRow6}
                    </span>
                </Col>
                <Col span={4} className="LeagueTableCol3">
                    <span className="VerticalAlign">
                        {panelData.leagueTablePTSRow6}
                    </span>
                </Col>
            </Row>
            <Row className="LeagueTableRow Row7" style={{ backgroundColor: panelData.leagueTableColorRow7 }}>
                <Col span={1}>
                    {singleFiles.filter(file => file.fileParent === "leagueTableLogoRow7").map((file, index) =>
                        <DBImage bgColor={panelData.leagueTableColorRow7} cName="LeagueTableLogo" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                    )}
                </Col>
                <Col span={13} className="LeagueTableCol1">
                    {panelData.leagueTableNameRow7}
                </Col>
                <Col span={6} className="LeagueTableCol2Black">
                    <span className="VerticalAlign">
                        {panelData.leagueTableWLRow7}
                    </span>
                </Col>
                <Col span={4} className="LeagueTableCol3">
                    <span className="VerticalAlign">
                        {panelData.leagueTablePTSRow7}
                    </span>
                </Col>
            </Row>
            <Row className="LeagueTableRow Row8" style={{ backgroundColor: panelData.leagueTableColorRow8 }}>
                <Col span={1}>
                    {singleFiles.filter(file => file.fileParent === "leagueTableLogoRow8").map((file, index) =>
                        <DBImage bgColor={panelData.leagueTableColorRow8} cName="LeagueTableLogo" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                    )}
                </Col>
                <Col span={13} className="LeagueTableCol1">
                    {panelData.leagueTableNameRow8}
                </Col>
                <Col span={6} className="LeagueTableCol2Grey">
                    <span className="VerticalAlign">
                        {panelData.leagueTableWLRow8}
                    </span>
                </Col>
                <Col span={4} className="LeagueTableCol3">
                    <span className="VerticalAlign">
                        {panelData.leagueTablePTSRow8}
                    </span>
                </Col>
            </Row>
        </div>
    )
}

export default LeagueTableBody
