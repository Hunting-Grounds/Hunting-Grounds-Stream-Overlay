import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';

import './style.css'

import DBImage from '../../../../Components/DBImage/DBImage';
import { getSingleFiles } from '../../../../../../api/index.js';

const VetoMap = ({ currentId, setCurrentId }) => {

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
        webcamCasterName1: '', webcamCasterName2: '', lowerThirdTeamName1: '', lowerThirdTeamLogo1: '',
        lowerThirdTeamColor1: '', lowerThirdTeamName2: '', lowerThirdTeamLogo2: '', lowerThirdTeamColor2: '',
        vetoMap1Icon: '', vetoMap2Icon: '', vetoMap3Icon: '',
        vetoMap4Icon: '', vetoMap5Icon: '', vetoMap6Icon: ''
    });

    const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));

    useEffect(() => {
        if (panel) setPanelData(panel);
    }, [panel]);

    return (
        <div>
            {panels.map((panel) => (setCurrentId(panel._id),
                <div>
                    <Row>
                        <Col span={4}>
                            <div className="VetoMapWhite">
                                {singleFiles.filter(file => file.fileParent === "lowerThirdTeamLogo1").map((file, index) =>
                                    <DBImage bgColor={panelData.lowerThirdTeamColor1} cName="VetoMapTeam" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                                )}
                                <div className="VetoMapText" style={{ color: '#c01e1e', width: '100%', }}>BAN</div>
                                {singleFiles.filter(file => file.fileParent === "vetoMap1Icon").map((file, index) =>
                                    <DBImage bgColor='inherit' cName="VetoMapImage" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                                )}
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="VetoMapGrey">
                                {singleFiles.filter(file => file.fileParent === "lowerThirdTeamLogo2").map((file, index) =>
                                    <DBImage bgColor={panelData.lowerThirdTeamColor2} cName="VetoMapTeam" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                                )}
                                <div className="VetoMapText" style={{ color: '#c01e1e', width: '100%', }}>BAN</div>
                                {singleFiles.filter(file => file.fileParent === "vetoMap2Icon").map((file, index) =>
                                    <DBImage bgColor='inherit' cName="VetoMapImage" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                                )}
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="VetoMapWhite">
                                {singleFiles.filter(file => file.fileParent === "lowerThirdTeamLogo1").map((file, index) =>
                                    <DBImage bgColor={panelData.lowerThirdTeamColor1} cName="VetoMapTeam" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                                )}
                                <div className="VetoMapText" style={{ color: '#c01e1e', width: '100%', }}>BAN</div>
                                {singleFiles.filter(file => file.fileParent === "vetoMap3Icon").map((file, index) =>
                                    <DBImage bgColor='inherit' cName="VetoMapImage" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                                )}
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="VetoMapGrey">
                                {singleFiles.filter(file => file.fileParent === "lowerThirdTeamLogo2").map((file, index) =>
                                    <DBImage bgColor={panelData.lowerThirdTeamColor2} cName="VetoMapTeam" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                                )}
                                <div className="VetoMapText" style={{ color: '#c01e1e', width: '100%', }}>BAN</div>
                                {singleFiles.filter(file => file.fileParent === "vetoMap4Icon").map((file, index) =>
                                    <DBImage bgColor='inherit' cName="VetoMapImage" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                                )}
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="VetoMapWhite">
                                {singleFiles.filter(file => file.fileParent === "lowerThirdTeamLogo1").map((file, index) =>
                                    <DBImage bgColor={panelData.lowerThirdTeamColor1} cName="VetoMapTeam" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                                )}
                                <div className="VetoMapText" style={{ color: '#46ad34', width: '100%' }}>PICK</div>
                                {singleFiles.filter(file => file.fileParent === "vetoMap5Icon").map((file, index) =>
                                    <DBImage bgColor='inherit' cName="VetoMapImage" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                                )}
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="VetoMapGrey">
                                {singleFiles.filter(file => file.fileParent === "lowerThirdTeamLogo2").map((file, index) =>
                                    <DBImage bgColor={panelData.lowerThirdTeamColor2} cName="VetoMapTeam" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                                )}
                                <div className="VetoMapText" style={{ color: '#46ad34', width: '100%' }}>PICK</div>
                                {singleFiles.filter(file => file.fileParent === "vetoMap6Icon").map((file, index) =>
                                    <DBImage bgColor='inherit' cName="VetoMapImage" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                                )}
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    )
}

export default VetoMap
