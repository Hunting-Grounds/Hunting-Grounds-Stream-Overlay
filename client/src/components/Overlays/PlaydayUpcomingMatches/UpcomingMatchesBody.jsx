import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Row, Col } from 'antd'

import DBImage from '../Components/DBImage/DBImage';
import { getSingleFiles } from '../../../api/index.js';

const UpcomingMatchesBody = ({ currentId, setCurrentId }) => {

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
        lowerThirdTeamColor1: '',
        upcomingMatchesName1Row1: '', upcomingMatchesName2Row1: '', upcomingMatchesColor1Row1: '', upcomingMatchesColor2Row1: '',
        upcomingMatchesName1Row2: '', upcomingMatchesName2Row2: '', upcomingMatchesColor1Row2: '', upcomingMatchesColor2Row2: '',
        upcomingMatchesName1Row3: '', upcomingMatchesName2Row3: '', upcomingMatchesColor1Row3: '', upcomingMatchesColor2Row3: '',
        upcomingMatchesName1Row4: '', upcomingMatchesName2Row4: '', upcomingMatchesColor1Row4: '', upcomingMatchesColor2Row4: ''
    });

    const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));

    useEffect(() => {
        if (panel) setPanelData(panel);
    }, [panel]);

    return (
        <div>
            {panels.map((panel) => (setCurrentId(panel._id),
                <div>
                    <div className="Upcoming">UPCOMING</div>

                    <Row className="UpcomingRow1">
                        <Col span={1} className="UpcomingCol">
                            <div className="UpcomingRowTag">.</div>
                        </Col>
                        <Col span={7} className="UpcomingCol">
                            <div className="UpcomingRowTeamName1">{panelData.upcomingMatchesName1Row1}</div>
                        </Col>
                        <Col span={3} className="UpcomingCol">
                            <div className="UpcomingRowVsText">VS</div>
                        </Col>
                        <Col span={7} className="UpcomingCol">
                            <div className="UpcomingRowTeamName1">{panelData.upcomingMatchesName2Row1}</div>
                        </Col>
                        <Col span={3} className="UpcomingCol">
                            {singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo1Row1").map((file, index) =>
                                <DBImage bgColor={panelData.upcomingMatchesColor1Row1} cName="UpcomingRowTeamLogo1" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                            )}
                        </Col>
                        <Col span={3} className="UpcomingCol">
                            {singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo2Row1").map((file, index) =>
                                <DBImage bgColor={panelData.upcomingMatchesColor2Row1} cName="UpcomingRowTeamLogo2" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                            )}
                        </Col>
                    </Row>

                    <Row className="UpcomingRow2">
                        <Col span={1} className="UpcomingCol">
                            <div className="UpcomingRowTag">.</div>
                        </Col>
                        <Col span={7} className="UpcomingCol">
                            <div className="UpcomingRowTeamName1">{panelData.upcomingMatchesName1Row2}</div>
                        </Col>
                        <Col span={3} className="UpcomingCol">
                            <div className="UpcomingRowVsText">VS</div>
                        </Col>
                        <Col span={7} className="UpcomingCol">
                            <div className="UpcomingRowTeamName1">{panelData.upcomingMatchesName2Row2}</div>
                        </Col>
                        <Col span={3} className="UpcomingCol">
                            {singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo1Row2").map((file, index) =>
                                <DBImage bgColor={panelData.upcomingMatchesColor1Row2} cName="UpcomingRowTeamLogo1" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                            )}
                        </Col>
                        <Col span={3} className="UpcomingCol">
                            {singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo2Row2").map((file, index) =>
                                <DBImage bgColor={panelData.upcomingMatchesColor2Row2} cName="UpcomingRowTeamLogo2" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                            )}
                        </Col>
                    </Row>

                    <Row className="UpcomingRow3">
                        <Col span={1} className="UpcomingCol">
                            <div className="UpcomingRowTag">.</div>
                        </Col>
                        <Col span={7} className="UpcomingCol">
                            <div className="UpcomingRowTeamName1">{panelData.upcomingMatchesName1Row3}</div>
                        </Col>
                        <Col span={3} className="UpcomingCol">
                            <div className="UpcomingRowVsText">VS</div>
                        </Col>
                        <Col span={7} className="UpcomingCol">
                            <div className="UpcomingRowTeamName1">{panelData.upcomingMatchesName2Row3}</div>
                        </Col>
                        <Col span={3} className="UpcomingCol">
                            {singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo1Row3").map((file, index) =>
                                <DBImage bgColor={panelData.upcomingMatchesColor1Row3} cName="UpcomingRowTeamLogo1" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                            )}
                        </Col>
                        <Col span={3} className="UpcomingCol">
                            {singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo2Row3").map((file, index) =>
                                <DBImage bgColor={panelData.upcomingMatchesColor2Row3} cName="UpcomingRowTeamLogo2" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                            )}
                        </Col>
                    </Row>

                    <Row className="UpcomingRow4">
                        <Col span={1} className="UpcomingCol">
                            <div className="UpcomingRowTag">.</div>
                        </Col>
                        <Col span={7} className="UpcomingCol">
                            <div className="UpcomingRowTeamName1">{panelData.upcomingMatchesName1Row4}</div>
                        </Col>
                        <Col span={3} className="UpcomingCol">
                            <div className="UpcomingRowVsText">VS</div>
                        </Col>
                        <Col span={7} className="UpcomingCol">
                            <div className="UpcomingRowTeamName1">{panelData.upcomingMatchesName2Row4}</div>
                        </Col>
                        <Col span={3} className="UpcomingCol">
                            {singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo1Row4").map((file, index) =>
                                <DBImage bgColor={panelData.upcomingMatchesColor1Row4} cName="UpcomingRowTeamLogo1" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                            )}
                        </Col>
                        <Col span={3} className="UpcomingCol">
                            {singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo2Row4").map((file, index) =>
                                <DBImage bgColor={panelData.upcomingMatchesColor2Row4} cName="UpcomingRowTeamLogo2" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                            )}
                        </Col>
                    </Row>

                </div>
            ))}
        </div>
    )
}

export default UpcomingMatchesBody
