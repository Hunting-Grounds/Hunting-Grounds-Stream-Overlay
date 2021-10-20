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
        upcomingMatchesName1Row1: '', upcomingMatchesLogo1Row1: '', upcomingMatchesName2Row1: '', upcomingMatchesLogo2Row1: '',
        upcomingMatchesName1Row2: '', upcomingMatchesLogo1Row2: '', upcomingMatchesName2Row2: '', upcomingMatchesLogo2Row2: '',
        upcomingMatchesName1Row3: '', upcomingMatchesLogo1Row3: '', upcomingMatchesName2Row3: '', upcomingMatchesLogo2Row3: '',
        upcomingMatchesName1Row4: '', upcomingMatchesLogo1Row4: '', upcomingMatchesName2Row4: '', upcomingMatchesLogo2Row4: ''
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
                    {/* <div className="UpcomingRow1">
                        <div className="UpcomingRowTag">.</div>
                        <div className="wrapper">
                            <div className="UpcomingRowTeamName1">{panelData.upcomingMatchesName1Row1}</div>
                        </div>
                        <div className="UpcomingRowVsText">VS</div>
                        <div className="wrapper">
                            <div className="UpcomingRowTeamName1">{panelData.upcomingMatchesName2Row1}</div>
                        </div>
                        <div className="UpcomingRowTeamLogoBackground1">

                            {singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo1Row1").map((file, index) =>
                                <DBImage bgColor='inherit' cName="UpcomingRowTeamLogo1" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                            )}

                        </div>
                        <div className="UpcomingRowTeamLogoBackground2">

                            {singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo2Row1").map((file, index) =>
                                <DBImage bgColor='inherit' cName="UpcomingRowTeamLogo2" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                            )}

                        </div>
                    </div>

                    <div className="UpcomingRow2">
                        <div className="UpcomingRowTag">.</div>
                        <div className="wrapper">
                            <div className="UpcomingRowTeamName1">{panelData.upcomingMatchesName1Row2}</div>
                        </div>
                        <div className="UpcomingRowVsText">VS</div>
                        <div className="wrapper">
                            <div className="UpcomingRowTeamName1">{panelData.upcomingMatchesName2Row2}</div>
                        </div>
                        <div className="UpcomingRowTeamLogoBackground1">

                            {singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo1Row2").map((file, index) =>
                                <DBImage bgColor='inherit' cName="UpcomingRowTeamLogo1" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                            )}

                        </div>
                        <div className="UpcomingRowTeamLogoBackground2">

                            {singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo2Row2").map((file, index) =>
                                <DBImage bgColor='inherit' cName="UpcomingRowTeamLogo2" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                            )}

                        </div>
                    </div>

                    <div className="UpcomingRow3">
                        <div className="UpcomingRowTag">.</div>
                        <div className="wrapper">
                            <div className="UpcomingRowTeamName1">{panelData.upcomingMatchesName1Row3}</div>
                        </div>
                        <div className="UpcomingRowVsText">VS</div>
                        <div className="wrapper">
                            <div className="UpcomingRowTeamName1">{panelData.upcomingMatchesName2Row3}</div>
                        </div>
                        <div className="UpcomingRowTeamLogoBackground1">

                            {singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo1Row3").map((file, index) =>
                                <DBImage bgColor='inherit' cName="UpcomingRowTeamLogo1" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                            )}

                        </div>
                        <div className="UpcomingRowTeamLogoBackground2">

                            {singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo2Row3").map((file, index) =>
                                <DBImage bgColor='inherit' cName="UpcomingRowTeamLogo2" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                            )}

                        </div>
                    </div> */}

                    <div className="UpcomingRow4">
                        <Row style={{backgroundColor: 'white'}}>
                            <Col span={1}>
                                <div className="UpcomingRowTag">.</div>
                            </Col>
                            <Col span={7}>
                                <div className="UpcomingRowTeamName1">{panelData.upcomingMatchesName1Row4}</div>
                            </Col>
                            <Col span={3}>
                                <div className="UpcomingRowVsText">VS</div>
                            </Col>
                            <Col span={7}>
                                <div className="UpcomingRowTeamName1">{panelData.upcomingMatchesName2Row4}</div>
                            </Col>
                            <Col span={3}>
                                <div className="UpcomingRowTeamLogoBackground1">
                                    {singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo1Row4").map((file, index) =>
                                        <DBImage bgColor='inherit' cName="UpcomingRowTeamLogo1" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                                    )}
                                </div>
                            </Col>
                            <Col span={3}>
                                <div className="UpcomingRowTeamLogoBackground2">
                                    {singleFiles.filter(file => file.fileParent === "upcomingMatchesLogo2Row4").map((file, index) =>
                                        <DBImage bgColor='inherit' cName="UpcomingRowTeamLogo2" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default UpcomingMatchesBody
