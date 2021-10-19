import React from 'react'

const MatchupLeftTeam = (props) => {

    currentMacthupLogoURL = props.file.filePath

    return (
        <div className="leftTeam" style={{ backgroundColor: props.panelData.currentMatchupColor1 }}>
            <div className="LeftTeamLogo" style={{ backgroundImage: `url(${currentMacthupLogoURL})` }} />
            <div className="LeftTeamName">
                <h1 className="LeftTeamNameText">{props.panelData.currentMatchupName1}</h1>
            </div>
        </div>
    )
}

export default MatchupLeftTeam
