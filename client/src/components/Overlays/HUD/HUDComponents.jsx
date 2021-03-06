import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import DBImage from '../Components/DBImage/DBImage';
import { getSingleFiles } from '../../../api/index.js';

const HUDComponents = ({ currentId, setCurrentId }) => {

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
        hudLeftText: '', hudRightText: '', hudLeftOperatorIcon1: '', hudLeftOperatorIcon2: '', hudRightOperatorIcon1: '',
        hudRightOperatorIcon2: '', hudLeftTeamLogo: '', hudRightTeamLogo: '', lowerThirdTeamColor1: '', lowerThirdTeamColor2: ''
    });
    const panel = useSelector((state) => (currentId ? state.panels.find((message) => message._id === currentId) : null));

    useEffect(() => {
        if (panel) setPanelData(panel);
    }, [panel]);

    return (
        <div>
            {panels.map((panel) => (setCurrentId(panel._id),
                <div className="HUDOverlayBody">
                    <div className="HUDlogobox"></div>

                    <div className="HUDlefttextbox">
                        <div className="HUDlefttext">
                            {panelData.hudLeftText}
                        </div>
                    </div>

                    {singleFiles.filter(file => file.fileParent === "hudLeftOperatorIcon1").map((file, index) =>
                        <DBImage bgColor='inherit' cName="HUDlefticon1" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                    )}

                    {singleFiles.filter(file => file.fileParent === "hudLeftOperatorIcon2").map((file, index) =>
                        <DBImage bgColor='inherit' cName="HUDlefticon2" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                    )}

                    <div className="HUDleftdiamond1"></div>
                    <div className="HUDleftdiamond2"></div>

                    {singleFiles.filter(file => file.fileParent === "hudLeftTeamLogo").map((file, index) =>
                        <DBImage bgColor={panelData.lowerThirdTeamColor2} cName="HUDleftteamlogo" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                    )}

                    {singleFiles.filter(file => file.fileParent === "hudRightTeamLogo").map((file, index) =>
                        <DBImage bgColor={panelData.lowerThirdTeamColor1} cName="HUDrightteamlogo" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                    )}

                    <div className="HUDrightdiamond1"></div>
                    <div className="HUDrightdiamond2"></div>

                    {singleFiles.filter(file => file.fileParent === "hudRightOperatorIcon1").map((file, index) =>
                        <DBImage bgColor='inherit' cName="HUDrighticon1" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                    )}

                    {singleFiles.filter(file => file.fileParent === "hudRightOperatorIcon2").map((file, index) =>
                        <DBImage bgColor='inherit' cName="HUDrighticon2" panelData={panelData} getsingle={() => getSingleFileslist()} file={file} />
                    )}

                    <div className="HUDrighttextbox">
                        <div className="HUDrighttext">
                            {panelData.hudRightText}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HUDComponents
